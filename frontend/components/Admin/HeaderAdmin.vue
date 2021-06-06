<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
      min-height="78"
      height="78"
    >
      <v-app-bar-nav-icon @click="drawer = true" />

      <v-toolbar-title>
        <a href="/" aria-current="page" class="logo white--text d-inline-flex align-center justify-content">
          <img src="/images/logo-sefaz-inverted.svg" alt="" class="image">
          <h1 class="title-s">SIAT WEB</h1>
        </a>
      </v-toolbar-title>

      <v-spacer />

      <v-menu
        left
        bottom
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-badge
              color="error"
              content="2"
            >
              <v-btn icon height="auto" width="auto">
                <v-icon>mdi-bell-outline</v-icon>
              </v-btn>
            </v-badge>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="n in 2"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Mensagem de teste {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="mx-1" />
      <v-menu
        left
        bottom
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            color="primary"
            elevation="0"
            dark
            v-bind="attrs"
            v-on="on"
          >
            LOGIN USERNAME
            <v-icon right>
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="n in 3"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Menu {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="mx-1" />

      <v-btn
        color="white"
        dark
        outlined
        href="/"
      >
        SAIR
        <v-icon right>
          mdi-exit-to-app
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item href="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Início
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sobre o SIAT</v-list-item-title>
          </v-list-item>

          <v-list-item href="/noticias">
            <v-list-item-icon>
              <v-icon>mdi-newspaper-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Notícias</v-list-item-title>
          </v-list-item>

          <v-list-item href="https://portal.sefaz.pi.gov.br/" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-open-in-new</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Página SEFAF-PI
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: ''
    },
    menu: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    drawer: false,
    group: null
  })
}
</script>
