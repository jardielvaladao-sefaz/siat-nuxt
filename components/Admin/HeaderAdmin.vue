<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
      min-height="78"
      height="78"
    >
      <v-toolbar-title>
        <NuxtLink to="/" aria-current="page" class="logo white--text d-inline-flex align-center justify-content">
          <img src="/images/logo-sefaz.svg" alt="" class="image">
          <h1 class="title-s">
            SIAT WEB
          </h1>
        </NuxtLink>
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
