<template>
  <Main>
    <v-container>
      <div class="pt-12 pa-11">
        <v-breadcrumbs large :items="breadcrumbs" class="pl-0 ml-0" />
        <h2 class="subtitle text-uppercase primary--text mb-10">
          {{ title }}
        </h2>
        <div id="lipsum">
          <v-img
            v-if="image.length"
            max-width="500"
            :src="image"
            class="float-left mb-2 mr-4"
          />
          <!-- eslint-disable vue/no-v-html -->
          <div v-html="content" />
          <!-- eslint-enable -->
        </div>
      </div>
    </v-container>
  </Main>
</template>
<script>
export default {
  layout: 'page',
  async asyncData ({ params, $axios }) {
    try {
      let title = 'Notícia'
      let content = ''
      let image = ''
      const _noticias = await $axios.$get('/api/noticias.json')
      const noticias = _noticias.noticias
      for (const n in noticias) { // mais rapido do que fazer um axios.get na categoria current
        if (noticias[n].link === params.slug) {
          title = noticias[n].title
          content = noticias[n].content
          image = noticias[n].image
        }
      }
      const breadcrumbs = [
        {
          text: 'Início',
          disabled: false,
          href: '/'
        },
        {
          text: 'Notícias',
          disabled: false,
          href: '/noticias'
        },
        {
          text: title,
          disabled: true,
          href: '#'
        }
      ]
      return {
        title,
        content,
        image,
        breadcrumbs
      }
    } catch (error) {
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
