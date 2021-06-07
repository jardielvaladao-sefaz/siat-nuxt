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
            Cadastrar Parâmetros
          </h2>
          <v-btn color="secondary" fab dark x-small class="float-right">
            <v-icon>mdi-help</v-icon>
          </v-btn>
        </div>
        <v-divider class="mb-10" />
        <v-form>
          <v-container class="ma-0">
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
                <div justify="center">
                  <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                  >
                    <template #activator="{ on, attrs }">
                      <v-btn
                        color="success"
                        dark
                        v-bind="attrs"
                        class="float-right"
                        v-on="on"
                      >
                        <v-icon left dark>
                          mdi-plus
                        </v-icon> Adicionar Novo Tipo
                      </v-btn>
                    </template>
                    <v-form method="POST" action="">
                      <v-card class="pb-8">
                        <v-card-title>
                          <span class="text-h5">Novo Tipo de Parâmetro</span>
                        </v-card-title>
                        <v-card-text>
                          <small>* campos obrigatórios</small>
                          <v-divider class="mb-10" />
                          <v-text-field label="Nome *" placeholder="Nome *" solo />
                          <v-text-field label="Descrição *" placeholder="Descrição *" solo />
                          <v-select :items="items" label="Ativo *" placeholder="Ativo *" solo />
                          <v-row>
                            <v-col cols="6" md="12">
                              <v-spacer />
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col cols="6" lg="3">
                              <div class="text-left">
                                <v-btn class="mr-4" @click="dialog = false">
                                  <v-icon left>
                                    mdi-subdirectory-arrow-left
                                  </v-icon> Voltar
                                </v-btn>
                              </div>
                            </v-col>
                            <v-col cols="6" lg="9">
                              <div class="d-flex justify-end">
                                <v-btn color="success darken-2 mr-4" @click="dialog = false">
                                  <v-icon left dark>
                                    mdi-content-save
                                  </v-icon> Salvar
                                </v-btn>
                                <v-btn color="warning" @click="dialog = false">
                                  <v-icon left dark>
                                    mdi-eraser
                                  </v-icon> Limpar
                                </v-btn>
                              </div>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-form>
                  </v-dialog>
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
                  sort-by="codigo"
                  class="elevation-1"
                  no-data-text="Nenhum resultado encontrado"
                  :footer-props="{'items-per-page-text':'Registros por página'}"
                >
                  <template #[`item.actions`]="{ item }">
                    <v-icon class="mr-2" title="Alterar Modelo de Mensagem" @click="editItem(item)">
                      mdi-square-edit-outline
                    </v-icon>
                  </template>
                  <template #[`item.ativo`]="{ item }">
                    <v-switch @click="editItem(item)" />
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
      const title = 'Cadastrar Parâmetros'
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
    menu: false,
    modal: false,
    menu1: false,
    menu2: false,
    headers: [
      { text: 'Ativo', value: 'ativo' },
      { text: 'Código do Parâmetro', value: 'codigo' },
      { text: 'Nome do Parâmetro', value: 'nome' },
      { text: 'Descrição do Parâmetro', value: 'desc' },
      { text: 'Data de Criação', value: 'data' },
      { text: 'Ações', value: 'actions', sortable: false, align: 'center' }
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
