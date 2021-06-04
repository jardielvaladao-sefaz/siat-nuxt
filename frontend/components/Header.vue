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
          <h1 class="title-s">SIAT WEB</h1>
          <img src="/images/logo-sefaz.svg" alt="" class="image">
        </a>
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        color="white"
        dark
        outlined
        href="/login"
        target="_blank"
      >
        <v-icon left>
          mdi-shield-account
        </v-icon>
        ENTRAR
      </v-btn>
      <!--
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      -->
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

          <v-list-item>
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
