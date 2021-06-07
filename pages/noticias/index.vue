<template>
  <Main>
    <v-container>
      <div class="pt-12 pa-11">
        <h2 class="subtitle text-uppercase primary--text mb-10">
          {{ title }}
        </h2>
        <v-row>
          <v-col
            v-for="(noticia, i) in noticias"
            :id="i"
            :key="noticia.link"
            cols="6"
            lg="3"
            md="3"
            sm="4"
          >
            <NuxtLink :to="`/noticias/${noticia.link}`" class="link-news w-inline-block" :title="noticia.title">
              <v-img
                :src="`${noticia.image}?image=${i * 5 + 10}`"
                :lazy-src="`${noticia.thumbnail}?image=${i * 5 + 10}`"
                class="grey lighten-2 mb-3"
              >
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    />
                  </v-row>
                </template>
              </v-img>
              <div class="body-1">
                {{ noticia.title }}
              </div>
            </NuxtLink>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </Main>
</template>
<script>
export default {
  layout: 'page',
  async asyncData ({ $axios }) {
    try {
      const _noticias = await $axios.$get('/api/noticias.json')
      return {
        noticias: _noticias.noticias,
        title: 'Notícias'
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
