<template>
  <Content>
    <lazy-section>
      <div id="hero" class="banner">
        <h2 class="display-1 white--text font-weight-medium">
          Portal de serviços do SIAT
        </h2>
      </div>
    </lazy-section>

    <Section id="services" class="section">
      <v-container>
        <div class="pb-13 justify-center text-center">
          <h2 class="subtitle primary--text">
            Aplicações públicas online
          </h2><p class="ma-0">
            Confira abaixo os serviços on-line do SIAT
          </p>
        </div>
        <v-row>
          <v-col
            v-for="(service, index) in services"
            :id="index"
            :key="service.name"
            cols="6"
            lg="3"
            md="3"
            sm="4"
          >
            <v-card
              :id="`service-${index}`"
              elevation="2"
              align="center"
              justify="center"
              :class="`status-${status_class(service.status)} text-center rounded-lg pa-7 pb-2`"
            >
              <a :href="`${service.link}`" target="_blank" :title="service.name">
                <div
                  class="img-service"
                >
                  <img :src="service.image" :alt="service.name">
                </div>
                <v-card-text>
                  <h3 class="subtitle-1 font-weight-bold">{{ service.name }}</h3>
                  <div class="ma-1">v.{{ service.version }}</div>
                  <v-flex>
                    <div
                      class="pa-status success rounded-circle d-inline-block"
                    />
                    <div class="d-inline-block">{{ status(service.status) }}</div>
                  </v-flex>
                </v-card-text>
              </a>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </Section>
  </Content>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    try {
      const result = await $axios.$get('https://portal.sefaz.pi.gov.br/siat-services-status.json')
      const services = result.services
      return {
        services
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
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 1000px) {

}
</style>
