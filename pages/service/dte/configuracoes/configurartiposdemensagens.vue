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
            Configurar Tipos de Mensagens
          </h2>
          <Popover />
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
                        </v-icon> ADICIONAR NOVO TIPO
                      </v-btn>
                    </template>
                    <v-form method="POST" action="">
                      <v-card class="pb-8">
                        <v-card-title>
                          <span class="text-h5">Novo Tipo de Mensagem</span>
                        </v-card-title>
                        <v-card-text>
                          <small>* campos obrigatórios</small>
                          <v-divider class="mb-10" />

                          <v-row>
                            <v-col cols="4" md="6">
                              <v-text-field outlined label="Descrição*" placeholder="Descrição*" />
                            </v-col>
                            <v-col cols="4" md="6">
                              <v-select outlined :items="items" label="Estilo*" placeholder="Estilo*" />
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col cols="6" md="6">
                              <v-select outlined :items="items" label="Exige Ciência*" placeholder="Exige Ciência*" />
                            </v-col>
                            <v-col cols="6" md="6">
                              <v-select outlined :items="items" label="Permite Resposta*" placeholder="Permite Resposta*" />
                            </v-col>
                            <v-col cols="6" md="6">
                              <v-select outlined :items="items" label="Bloqueia Menu*" placeholder="Bloqueia Menu*" />
                            </v-col>
                            <v-col cols="6" md="6">
                              <v-select outlined :items="items" label="Envia e-mail*" placeholder="Envia e-mail*" />
                            </v-col>
                          </v-row>

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
                    <v-icon class="mr-2" title="Detalhar Modelo de Mensagem" @click="editItem(item)">
                      mdi-table-search
                    </v-icon>
                    <v-icon class="mr-2" title="Alterar Modelo de Mensagem" @click="editItem(item)">
                      mdi-square-edit-outline
                    </v-icon>
                    <v-icon class="mr-2" title="Inativar Modelo de Mensagem" @click="editItem(item)">
                      mdi-checkbox-blank-off-outline
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
      const title = 'Configurar Tipos de Mensagens'
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
    items: ['Pessoa Jurídica', 'Pessoa Física'],
    headers: [
      { text: 'Ativo', value: 'ativo' },
      { text: 'Descrição', value: 'desc' },
      { text: 'Estilo', value: 'estilo' },
      { text: 'Exige Ciência', value: 'ciencia' },
      { text: 'Permite Resposta', value: 'situacao' },
      { text: 'Bloqueia Menu', value: 'menu' },
      { text: 'Envia e-mail', value: 'email' },
      { text: 'Operações', value: 'actions', sortable: false }
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
