<template>
  <Main>
    <v-container>
      <div class="pt-12 pa-11">
        <h2 class="subtitle text-uppercase primary--text mb-10">
          {{ title }}
        </h2>
        <p>Página em construção</p>
      </div>
    </v-container>
  </Main>
</template>

<script>
export default {
  layout: 'page',
  data () {
    return {
      title: 'Sobre'
    }
  },
  head () {
    return {
      title: this.title + ' | ' + process.env.nameApp,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Página ' + this.title + ' | ' + process.env.nameApp + ' ' + process.env.descriptionApp

        }
      ]
    }
  }
}
</script>
