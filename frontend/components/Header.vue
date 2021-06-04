<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title>
        <a href="/" aria-current="page" class="logo white--text d-inline-flex">
          <h1 class="title-s">SIAT WEB</h1>
          <img src="/images/logo-sefaz.svg" alt="" class="image">
        </a>
      </v-toolbar-title>

      <v-spacer />

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
  }
}
</script>
