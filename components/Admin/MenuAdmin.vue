<template>
  <v-navigation-drawer id="appDrawer" v-model="drawer" app fixed>
    <v-list-item class="primary service-name" dark>
      <v-list-item-content>
        <v-list-item-title class="subtitle text-uppercase">
          {{ titulo }}
        </v-list-item-title>
        <v-list-item-subtitle>
          v{{ versao }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list
      dense
      nav
    >
      <v-list-group
        v-for="item in menu"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.icon"
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          :to="child.href"
          :title="child.title"
          prefetch
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
    titulo: {
      type: String,
      required: true
    },
    versao: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      menu: [
        {
          icon: 'mdi-message-text-outline',
          active: true,
          items: [
            { title: 'Enviar Mensagem', href: '/admin/mensagens/enviarmensagem' },
            { title: 'Consultar Mensagens', href: '/admin/mensagens/consultarmensagens' },
            { title: 'Consultar Mensagens - Destinatário', href: '/admin/mensagens/consultarmensagensdestinatario' }
          ],
          title: 'Mensagens'
        },
        {
          icon: 'mdi-cog-outline',
          active: false,
          items: [
            { title: 'Cadastrar Parâmetros', href: '/admin/configuracoes/cadastrarparametros' },
            { title: 'Configurar Tipos de Mensagens', href: '/admin/configuracoes/configurartiposdemensagens' },
            { title: 'Cadastrar Modelo de Mensagens', href: '/admin/configuracoes/cadastrarmodelodemensagens' }
          ],
          title: 'Configurações'
        }
      ]
    }
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('drawer', val)
      }
    }
  }
}
</script>
<style scoped>
  #appDrawer {
    overflow: hidden;
  }
  .drawer-menu--scroll{
    height: 56vh;
    overflow: auto;
  }
</style>
