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
      <div class="pt-4 pa-10">
        <v-breadcrumbs large :items="breadcrumbs" class="pl-0 ml-0" />
        <div class="mb-6 d-flex  justify-space-between">
          <h2 class="subtitle primary--text">
            Consulta de Mensagem - Destinatário
          </h2>
          <v-btn color="secondary" fab dark x-small class="float-right">
            <v-icon>mdi-help</v-icon>
          </v-btn>
        </div>
        <v-divider class="mb-10" />
        <v-form>
          <v-container class="ma-0">
            <v-row>
              <v-col cols="6" md="4">
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
                  <v-text-field solo label="Inscrição" placeholder="Inscrição" />
                </div>
              </v-col>

              <v-col cols="auto">
                <v-radio-group v-model="row" row>
                  <v-radio label="CPF" value="radio-1" />
                  <v-radio label="CNPJ" value="radio-2" />
                </v-radio-group>
              </v-col>

              <v-col cols="6" md="4">
                <v-text-field solo type="number" label="CPF/CNPJ" placeholder="CPF/CNPJ" />
              </v-col>

              <v-col cols="6" md="12">
                <v-text-field solo label="Nome/Razão Social" placeholder="Nome/Razão Social" class="razao" />
              </v-col>
            </v-row>

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
              <v-col cols="6" md="4">
                <div class="text-center">
                  <v-text-field solo label="Inscrição" placeholder="Inscrição" />
                </div>
              </v-col>

              <v-col cols="auto">
                <v-radio-group v-model="row" row>
                  <v-radio label="CPF" value="radio-1" />
                  <v-radio label="CNPJ" value="radio-2" />
                </v-radio-group>
              </v-col>

              <v-col cols="6" md="4">
                <v-text-field solo type="number" label="CNPJ/CPF" placeholder="CNPJ/CPF" />
              </v-col>

              <v-col cols="6" md="12">
                <v-text-field solo label="Nome/Razão Social" placeholder="Nome/Razão Social" class="razao" />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="4">
                <v-text-field solo label="Assunto" placeholder="Assunto" />
              </v-col>

              <v-col cols="6" md="4">
                <v-select v-model="select" solo :items="items" label="Prioridade" placeholder="Prioridade" />
              </v-col>

              <v-col cols="4" md="4">
                <v-select v-model="select" solo :items="items" label="Tipo de Mensagem" placeholder="Tipo de Mensagem" />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4" md="4">
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
                      solo
                      label="Periodo da Emissão da Mensagem*"
                      class="periodo"
                      placeholder="Periodo da Emissão da Mensagem*"
                      append-outer-icon="mdi-calendar"
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
                  <v-btn class="mr-4" href="/service/dte">
                    <v-icon left>
                      mdi-subdirectory-arrow-left
                    </v-icon> Voltar
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="6" md="6">
                <div class="text-right">
                  <v-btn color="primary" @click="1">
                    <v-icon dark left>
                      mdi-magnify
                    </v-icon> Consultar
                  </v-btn>
                  <v-btn class="mr-4" color="warning" @click="1">
                    <v-icon dark left>
                      mdi-eraser
                    </v-icon> Limpar
                  </v-btn>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="12">
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
                  no-data-text="Nenhum resultado encontrado"
                  :footer-props="{'items-per-page-text':'Registros por página'}"
                >
                  <template #[`item.actions`]="{ item }">
                    <v-icon class="mr-2" title="Detalhar Mensagem" @click="editItem(item)">
                      mdi-table-search
                    </v-icon>
                    <v-icon class="mr-2" title="Imprimir Mensagem" @click="editItem(item)">
                      mdi-printer
                    </v-icon>
                    <v-icon class="mr-2" title="Buscar Destinatários" @click="editItem(item)">
                      mdi-account-search
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
      const title = 'Consultar Mensagens de Destinatário'
      let service = []
      const _services = await $axios.$get('/api/services.json')
      const services = _services.services
      for (const n in services) { // mais rapido do que fazer um axios.get na categoria current
        if (services[n].link === 'dte') {
          service = services[n]
        }
      }
      const breadcrumbs = [
        { text: 'Início', disabled: false, href: '/' },
        { text: 'Painel', disabled: false, href: '/painel' },
        { text: 'DTE', disabled: false, href: '/service/dte' },
        { text: title, disabled: true, href: '#' }
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
    menu: false,
    modal: false,
    menu1: false,
    menu2: false,
    headers: [
      { text: 'Tipo de Mensagem', value: 'tipo' },
      { text: 'Assunto', value: 'assunto' },
      { text: 'Remetente', value: 'remetente' },
      { text: 'Data de Emissão', value: 'datae' },
      { text: 'Data Limite de Ciência', value: 'datalc' },
      { text: 'Qtd. Destinatários', value: 'destinos' },
      { text: 'Qtd. Lidas', value: 'lidas' },
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
