<template>
  <Main>
    <v-carousel cycle height="320" class="banner">
      <v-carousel-item
        v-for="(banner,i) in banners"
        :key="i"
        :src="banner.src"
        class="fill-height"
      >
        <div class="slide-cover">
          <div class="section pt-4 pb-4">
            <a :to="banner.link" :title="banner.title">
              <h2 class="subtitle-s">
                {{ banner.title }}
              </h2>
              <p class="white--text">
                {{ banner.subtitle }}
              </p>
            </a>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>

    <Section id="services" class="section">
      <v-container class="pa-0">
        <div class="pb-13 justify-center text-center">
          <h2 class="text-h5 font-weight-bold text-uppercase primary--text">
            Aplicações públicas
          </h2><p class="ma-0">
            Confira abaixo os serviços do SIAT
          </p>
        </div>
        <v-row>
          <v-col
            v-for="(service, i) in services"
            :id="i"
            :key="service.name"
            cols="6"
            lg="3"
            md="3"
            sm="4"
          >
            <v-card
              :id="`service-${i}`"
              elevation="2"
              align="center"
              justify="center"
              :class="`service status-${status_class(service.status)} text-center rounded-lg pa-5 pt-6 pb-2`"
            >
              <NuxtLink :to="`/service/${service.link}`" :title="service.name">
                <div
                  class="img-service"
                >
                  <img :src="service.image" :alt="service.name">
                </div>
                <v-card-text>
                  <h3 class="text-h6 font-weight-bold">
                    {{ service.name }}
                  </h3>
                  <div class="grey--text text--darken-3 font-weight-light">
                    <div class="ma-1 mb-4">
                      {{ service.description }}
                    </div>
                    <v-flex>
                      <v-btn color="primary" dark>
                        entrar
                      </v-btn>
                    </v-flex>
                  </div>
                </v-card-text>
              </NuxtLink>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </Section>

    <Section id="noticias" class="section pt-0">
      <v-container class="pa-0">
        <div class="pb-13 justify-center text-center">
          <h2 class="text-h5 font-weight-bold text-uppercase primary--text">
            Últimas notícias
          </h2><p class="ma-0">
            Confira abaixo notícias do portal
          </p>
        </div>
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
              <div class="headline-s">
                {{ noticia.title }}
              </div>
            </NuxtLink>
          </v-col>
        </v-row>
      </v-container>
    </Section>
  </Main>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    try {
      const _services = await $axios.$get('/api/services-public.json')
      const _banners = await $axios.$get('/api/banners.json')
      const _noticias = await $axios.$get('/api/noticias.json')
      const result = await Promise.all([_services, _banners, _noticias])
      return {
        services: result[0].services,
        banners: result[1].banners,
        noticias: result[2].noticias
      }
    } catch (error) {
    }
  },
  head () {
    return {
      title: 'Portal de serviços SIAT / SEFAZ-PI',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Portal de serviços SIAT / SEFAZ-PI'
        }
      ]
    }
  },
  methods: {
    status (s) {
      if (s === '0') { return 'offline' }
      if (s === '2') { return 'manutenção' }
      return 'online'
    },
    status_class (s) {
      if (s === '0') { return 'error' }
      if (s === '2') { return 'warning' }
      return 'success'
    },
    refresh () {
      const r = async function () {
        return await this.$nuxt.refresh()
      }
      setInterval(r, 5000)
    }
  }
}

</script>
<style scoped>
@media screen and (max-width: 1000px) {

}
</style>
