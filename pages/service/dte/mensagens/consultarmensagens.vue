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
            Consultar Mensagens
          </h2>
          <Popover />
        </div>
        <v-divider class="mb-10" />
        <v-form>
          <v-container class="ma-0">
            <v-row>
              <v-col cols="6" md="3">
                <div class="text-left">
                  <v-title class="subheading font-weight-bold">
                    <h3><strong>Dados do Remetente</strong></h3>
                  </v-title>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="4">
                <div class="text-center">
                  <v-text-field outlined label="Inscrição" placeholder="Inscrição" />
                </div>
              </v-col>

              <v-col cols="auto">
                <v-radio-group v-model="row" row>
                  <v-radio label="CPF" value="radio-1" />
                  <v-radio label="CNPJ" value="radio-2" />
                </v-radio-group>
              </v-col>

              <v-col cols="6" md="4">
                <v-text-field outlined label="CPF/CNPJ" placeholder="CPF/CNPJ" />
              </v-col>

              <v-col cols="6" md="12">
                <v-text-field outlined label="Nome/Razão Social" placeholder="Nome/Razão Social" class="razao" />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="3">
                <div class="text-left">
                  <v-title class="subheading font-weight-bold">
                    <h3><strong>Dados do Destinatário</strong></h3>
                  </v-title>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="4">
                <div class="text-center">
                  <v-text-field outlined label="Inscrição" placeholder="Inscrição" />
                </div>
              </v-col>

              <v-col cols="auto">
                <v-radio-group v-model="row" row>
                  <v-radio label="CPF" value="radio-1" />
                  <v-radio label="CNPJ" value="radio-2" />
                </v-radio-group>
              </v-col>

              <v-col cols="6" md="4">
                <v-text-field outlined label="CNPJ/CPF" placeholder="CNPJ/CPF" />
              </v-col>

              <v-col cols="12">
                <v-text-field outlined label="Nome/Razão Social" placeholder="Nome/Razão Social" class="razao" />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="12">
                <v-text-field outlined label="Assunto" placeholder="Assunto" />
              </v-col>

              <v-col cols="6" md="4">
                <v-select v-model="select" outlined :items="items" label="Origem" placeholder="Origem" />
              </v-col>

              <v-col cols="6" md="4">
                <v-select v-model="select" outlined :items="items" label="Status" placeholder="Status" />
              </v-col>

              <v-col cols="6" md="4">
                <v-select v-model="select" outlined :items="items" label="Prioridade" placeholder="Prioridade" />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="6">
                <v-select v-model="select" outlined :items="items" label="Tipo de Mensagem" placeholder="Tipo de Mensagem" />
              </v-col>

              <v-col cols="6" md="6">
                <v-text-field outlined label="Número do Documento" placeholder="Número do Documento" />
              </v-col>

              <v-col cols="6" md="6">
                <v-select v-model="select" outlined :items="items" label="Com Ciência" placeholder="Com Ciência" />
              </v-col>

              <v-col cols="3" md="6">
                <v-select v-model="select" outlined :items="items" label="Sistema" placeholder="Sistema" />
              </v-col>
            </v-row>

            <v-row>
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
                      label="Periodo da Emissão da Mensagem*"
                      class="periodo"
                      placeholder="Periodo da Emissão da Mensagem*"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker v-model="date" @input="menu2 = false" />
                </v-menu>
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
                  <v-btn color="info" class="mr-4" @click="1">
                    <v-icon dark left>
                      mdi-magnify
                    </v-icon> Consultar
                  </v-btn>
                  <v-btn color="warning" @click="1">
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

            <v-row>
              <v-col cols="6" md="12">
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  sort-by="razao"
                  class="elevation-1"
                  no-data-
                  text="Nenhum resultado encontrado"
                  :footer-props="{'items-per-page-text':'Registros por página'}"
                >
                  <template #[`item.actions`]="{ item }">
                    <v-icon class="mr-2" title="Detalhar Mensagem" @click="editItem(item)">
                      mdi-table-search
                    </v-icon>
                    <v-icon class="mr-2" title="Imprimir Mensagem" @click="editItem(item)">
                      mdi-printer
                    </v-icon>
                    <v-icon class="mr-2" title="Imprimir Mensagem com Anexo" @click="editItem(item)">
                      mdi-file-pdf
                    </v-icon>
                  </template>
                </v-data-table>
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
      const title = 'Consultar Mensagens'
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
