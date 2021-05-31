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
            v-for="n in 8"
            :key="n"
            cols="6"
            lg="3"
            md="3"
            sm="4"
          >
            <v-card elevation="2" align="center" justify="center" class="text-center rounded-lg pa-7 pb-2">
              <a href="/" target="_blank">
                <div
                  class="img-service"
                >
                  <img src="images/carro-3.svg" alt="">
                </div>
                <v-card-text>
                  <h3 class="subtitle-1 font-weight-bold">IPVA</h3>
                  <div class="ma-1">v.1.0.2</div>
                  <v-flex>
                    <div
                      class="pa-status success rounded-circle d-inline-block"
                    />
                    <div class="d-inline-block">online</div>
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
import Section from '../components/Webflow/Section.vue'
export default {
  components: { Section },
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
  }
}
</script>

<style scoped>
@media screen and (max-width: 1000px) {

}
</style>
