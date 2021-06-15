<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
      min-height="78"
      height="78"
    >
      <v-app-bar-nav-icon v-if="notShow()" @click.stop="toggleDrawer()" />

      <Logo />

      <v-spacer />

      <v-btn
        v-if="notShow()"
        color="white"
        dark
        x-large
        outlined
        to="/login"
        prefetch
      >
        <v-icon left>
          mdi-shield-account
        </v-icon>
        ENTRAR
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
    }
  },
  methods: {
    toggleDrawer () {
      this.$store.commit('toggleDrawer')
    },
    notShow () {
      return this.$router.history.current.path !== '/login'
    }
  }
}
</script>
