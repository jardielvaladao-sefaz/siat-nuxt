<template>
  <Main>
    <v-navigation-drawer app permanent>
      <v-list-item class="primary service-name" dark>
        <v-list-item-content>
          <v-list-item-title class="subtitle text-uppercase">
            {{ title }}
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
      <div class="pt-4 pa-8">
        <v-breadcrumbs large :items="breadcrumbs" class="pl-0 ml-0" />
        <div class="mb-10">
          <h2 class="subtitle text-uppercase primary--text">
            Mensagens do Domicílio Tributário Eletrônico (DT-E)
          </h2>
        </div>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-card color="basil">
                  <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
                    <v-tab>
                      <v-icon left>
                        mdi-email-receive
                      </v-icon>Caixa de Entrada do Domicílio Eletrônico
                    </v-tab>
                    <v-tab>
                      <v-icon left>
                        mdi-email-send
                      </v-icon>Caixa de Saída do Domicílio Eletrônico
                    </v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item>
                      <v-card flat color="basil">
                        <v-card-text>
                          <v-row>
                            <v-col cols="6" md="3">
                              <v-text-field label="Pesquisar" placeholder="Pesquisar" append-icon="mdi-magnify" />
                            </v-col>
                            <v-col cols="6" md="3">
                              <v-select v-model="select" :items="items" label="Ordenar" placeholder="Ordenar" />
                            </v-col>
                            <v-col cols="6" md="3">
                              <v-select v-model="select" :items="items" label="Listar" placeholder="Listar" />
                            </v-col>
                            <v-col cols="6" md="3">
                              <v-select v-model="select" :items="items" class="visualizar" label="Visualizar" placeholder="Visualizar" />
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col cols="8" md="12">
                              <v-data-table
                                :headers="headers"
                                :items="desserts"
                                sort-by="desc"
                                class="elevation-1"
                                no-data-text="Nenhum resultado encontrado"
                                :footer-props="{'items-per-page-text':'Registros por página'}"
                              >
                                <template #[`item.actions`]="{ item }">
                                  <v-icon class="mr-2" title="Detalhar Mensagem" @click="editItem(item)">
                                    mdi-email-check
                                  </v-icon>
                                  <v-icon class="mr-2" title="Responder Mensagem" @click="editItem(item)">
                                    mdi-reply
                                  </v-icon>
                                </template>
                              </v-data-table>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat color="basil">
                        <v-card-text>
                          <v-row>
                            <v-col cols="6" md="3">
                              <v-text-field label="Pesquisar" placeholder="Pesquisar" append-icon="mdi-magnify" />
                            </v-col>
                            <v-col cols="6" md="3">
                              <v-select v-model="select" :items="items" label="Ordenar" placeholder="Ordenar" />
                            </v-col>
                            <v-col cols="6" md="3">
                              <v-select v-model="select" :items="items" label="Listar" placeholder="Listar" />
                            </v-col>
                            <v-col cols="6" md="3">
                              <v-select v-model="select" :items="items" class="visualizar" label="Visualizar" placeholder="Visualizar" />
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col cols="8" md="12">
                              <v-data-table
                                :headers="headers2"
                                :items="desserts2"
                                sort-by="desc"
                                class="elevation-1"
                                no-data-text="Nenhum resultado encontrado"
                                :footer-props="{'items-per-page-text':'Registros por página'}"
                              >
                                <template #[`item.actions`]="{ item }">
                                  <v-icon class="mr-2" title="Detalhar Mensagem" @click="editItem(item)">
                                    mdi-email-search
                                  </v-icon>
                                  <v-icon class="mr-2" title="Imprimir Mensagem" @click="editItem(item)">
                                    print
                                  </v-icon>
                                  <v-icon class="mr-2" title="Inativar" @click="editItem(item)">
                                    mdi-email-off
                                  </v-icon>
                                  <v-icon class="mr-2" title="Buscar Destinatários" @click="editItem(item)">
                                    mdi-account-search
                                  </v-icon>
                                </template>
                              </v-data-table>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
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
      let title = ''
      let service = []
      const _services = await $axios.$get('/api/services.json')
      const services = _services.services
      for (const n in services) { // mais rapido do que fazer um axios.get na categoria current
        if (services[n].link === 'dte') {
          title = services[n].name
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
        right: null
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
    tab: null,
    items: [
      'Appetizers', 'Entrees', 'Deserts', 'Cocktails'
    ],
    headers: [
      { text: 'Status', value: 'status' },
      { text: 'Situação da Ciência', value: 'situacao' },
      { text: 'Tipo', value: 'tipo' },
      { text: 'CPF/CNPJ', value: 'cpf' },
      { text: 'Destinatário', value: 'destino' },
      { text: 'Remetente', value: 'remete' },
      { text: 'Data de Emissão', value: 'datae' },
      { text: 'Assunto', value: 'assunto' },
      { text: 'Data de Leitura', value: 'datal' },
      { text: 'Data de Ciência', value: 'datac' },
      { text: 'Prioridade', value: 'priori' },
      { text: 'Operações', value: 'actions', sortable: false, align: 'center' }
    ],
    headers2: [
      { text: 'Status', value: 'status' },
      { text: 'Situação da Ciência', value: 'situacao' },
      { text: 'Tipo', value: 'tipo' },
      { text: 'CPF/CNPJ', value: 'cpf' },
      { text: 'Destinatário', value: 'destino' },
      { text: 'Data de Emissão', value: 'datae' },
      { text: 'Assunto', value: 'assunto' },
      { text: 'Data de Leitura', value: 'datal' },
      { text: 'Data de Ciência', value: 'datac' },
      { text: 'Prioridade', value: 'priori' },
      { text: 'Operações', value: 'actions', sortable: false, align: 'center' }
    ],
    desserts: [],
    desserts2: [],
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
    }
  }
}
</script>
