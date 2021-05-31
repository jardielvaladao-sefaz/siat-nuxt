<template>
  <v-app-bar
    app
    color="primary"
    class="white--text"
  >
    <a href="/" aria-current="page" class="white--text"><img
                                                          src="/images/brasao-piaui.png"
                                                          loading="lazy"
                                                          height=""
                                                          width="75"
                                                          alt=""
                                                          class="image"
                                                        >
      <h1 class="white--text headline text-weight-bold">SIAT / SEFAZ-PI</h1>
    </a>
    <a href="/login" class="white--text" title="Login">ENTRAR</a>
  </v-app-bar>
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
