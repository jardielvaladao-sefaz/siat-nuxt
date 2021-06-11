<template>
  <Main>
    <v-navigation-drawer app permanent>
      <v-list-item class="primary service-name" dark>
        <v-list-item-content>
          <v-list-item-title class="subtitle text-uppercase">
            DT-E
          </v-list-item-title>
          <v-list-item-subtitle>
            v{{ service.version }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <Menu />
    </v-navigation-drawer>
    <v-container>
      <div class="pt-4 pa-6">
        <v-breadcrumbs large :items="breadcrumbs" class="pl-0 ml-0" />
        <div class="mb-6 d-flex  justify-space-between">
          <h2 class="subtitle primary--text">
            Enviar Mensagem
          </h2>
          <Popover />
        </div>
        <v-divider class="mb-10" />
        <v-form>
          <v-container class="ma-0">
            <v-row>
              <v-col cols="6" md="4">
                <div class="text-left">
                  <v-title class="subheading font-weight-bold">
                    <h3><strong>Dados do Destinatário</strong></h3>
                  </v-title>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="6">
                <v-select v-model="select" outlined :items="items" label="Modo de Envio*" placeholder="Modo de Envio*" />
              </v-col>

              <v-col cols="6" md="6">
                <v-select v-model="select" outlined :items="items" label="Prioridade*" placeholder="Prioridade*" />
              </v-col>

              <v-col cols="6" md="6">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                      v-model="date1"
                      outlined
                      label="Data de Início de Exibição*"
                      class="periodo"
                      placeholder="Data de Início de Exibição*"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker v-model="date" outlined @input="menu2 = false" />
                </v-menu>
              </v-col>

              <v-col cols="6" md="6">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                      v-model="date1"
                      outlined
                      label="Data Fim de Exibição*"
                      class="periodo"
                      placeholder="Data Fim de Exibição*"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker v-model="date" outlined @input="menu2 = false" />
                </v-menu>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="12">
                <v-select v-model="select" outlined :items="items" label="Modelo*" placeholder="Modelo*" />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="12">
                <v-text-field outlined label="Assunto*" placeholder="Assunto*" />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="12">
                <v-textarea
                  outlined
                  name="input-7-1"
                  label="Mensagem"
                  placeholder="Mensagem"
                  row-height="50"
                  auto-grow
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="12">
                <v-file-input
                  v-model="files"
                  outlined
                  placeholder="Importar Anexo da Mensagem"
                  label="Importar Anexo da Mensagem"
                  multiple
                  prepend-icon="mdi-paperclip"
                  show-size
                  counter
                >
                  <template #selection="{ text }">
                    <v-chip small label color="primary">
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="12">
                <v-file-input
                  v-model="files"
                  outlined
                  placeholder="Importar Planilha de Mala Direta"
                  label="Importar Planilha de Mala Direta"
                  multiple
                  prepend-icon="mdi-paperclip"
                  show-size
                  counter
                >
                  <template #selection="{ text }">
                    <v-chip small label color="primary">
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="6">
                <div class="text-left">
                  <v-btn class="mr-4" to="/service/dte" prefetch>
                    <v-icon left>
                      mdi-subdirectory-arrow-left
                    </v-icon> Voltar
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="6" md="6">
                <div class="text-right">
                  <v-btn color="success darken-2 mr-4" @click="1">
                    <v-icon dark left>
                      mdi-content-save
                    </v-icon> Enviar Mensagem
                  </v-btn>
                  <v-btn class="" color="warning" @click="1">
                    <v-icon dark left>
                      mdi-eraser
                    </v-icon> Limpar
                  </v-btn>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="12">
                <v-spacer />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </v-container>
  </Main>
</template>
<script>

export default {
  layout: 'admin',
  async asyncData ({ params, $axios }) {
    try {
      const title = 'Enviar Mensagem'
      let service = []
      const _services = await $axios.$get('/api/services.json')
      const services = _services.services
      for (const n in services) { // mais rapido do que fazer um axios.get na categoria current
        if (services[n].link === 'dte') {
          service = services[n]
        }
      }
      const breadcrumbs = [
        { text: 'Início', disabled: false, to: '/' },
        { text: 'Painel', disabled: false, to: '/painel' },
        { text: 'DTE', disabled: false, to: '/service/dte' },
        { text: title, disabled: true, to: '#' }
      ]
      return {
        title,
        service,
        breadcrumbs,
        textos: 6,
        right: null,
        items: [],
        dialog: false
      }
    } catch (error) {
    }
  },
  data: () => ({
    date: '',
    date1: '',
    row: [],
    select: [],
    files: [],
    menu: false,
    modal: false,
    menu1: false,
    menu2: false,
    items: [
      'Tipo de Mensagem',
      'Mala Direta'
    ],
    items2: [
      'Tipo de Mensagem',
      'Mala Direta'
    ],
    headers: [
      { text: 'Tipo de Mensagem', value: 'tipo' },
      { text: 'Destinatário', value: 'destino' },
      { text: 'Assunto', value: 'assunto' },
      { text: 'Remetente', value: 'remetente' },
      { text: 'Data de Emissão', value: 'datae' },
      { text: 'Data de Leitura', value: 'datal' },
      { text: 'Data de Ciência', value: 'datac' },
      { text: 'Data Limite de Ciência', value: 'datalc' },
      { text: 'Sistema', value: 'sistema' },
      { text: 'Ações', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedItem: {
      inscricao: '',
      cnpjcpf: ' ',
      razao: ' ',
      ccad: ' ',
      tcred: ' ',
      dtcred: ' '
    }
  }),
  head () {
    return {
      title: this.title + ' | ' + process.env.nameApp,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Módulo ' + this.title + ' | ' + process.env.nameApp + ' ' + process.env.descriptionApp
        }
      ]
    }
  },
  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          inscricao: ' ',
          cnpjcpf: ' ',
          razao: ' ',
          ccad: ' ',
          tcred: ' ',
          dtcred: ' '
        }
      ]
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    editItem (i) {
      return true
    }
  }
}
</script>
<style scoped>
.razao{
   width: 1100px;
}
.text-right{
   margin-right: -15px;
}

.v-data-table > .v-data-table__wrapper > table > thead > tr > th{
   font-size: 16px !important;
}
</style>
