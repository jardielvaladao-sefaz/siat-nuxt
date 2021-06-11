<template>
  <Main>
    <Section>
      <div class="pt-12 pa-11">
        <v-row>
          <v-col
            cols="6"
            lg="6"
            md="12"
            sm="12"
            class="justify-center"
          >
            <h2 class="subtitle text-uppercase primary--text">
              {{ title }}
            </h2><p class="ma-0">
              Olá, <b>LOGIN USERNAME</b> confira suas aplicações:
            </p>
          </v-col>
          <v-col
            cols="6"
            lg="6"
            md="12"
            sm="12"
            class="justify-right align-right text-right"
          >
            <form
              action="/painel"
              method="POST"
              name="search"
              class="d-inline-flex"
            >
              <v-text-field
                label="Buscar"
                hide-details="auto"
                name="s"
                placeholder="Buscar"
                required
                solo
                x-large
                class="rounded-r-0"
                list="services-list"
              />
              <v-btn
                x-large
                color="primary"
                dark
                elevation="0"
                type="submit"
                class="rounded-l-0"
              >
                BUSCAR
              </v-btn>
            </form>
            <datalist id="services-list">
              <option
                v-for="service in services"
                :key="service.name"
              >
                {{ service.name }}
              </option>
            </datalist>
          </v-col>
        </v-row>
      </div>
      <div class="grey lighten-4">
        <div class="pa-11 pb-2">
          <h3 class="font-weight-light text-center mb-9">
            VOCÊ VISITOU RECENTEMENTE
          </h3>
          <v-row>
            <v-col
              v-for="(service, i) in services"
              :id="i"
              :key="service.name"
              cols="6"
              lg="2"
              md="2"
              sm="2"
            >
              <v-card
                v-if="i < 6"
                :id="`service-${i}`"
                elevation="2"
                align="center"
                justify="center"
                :class="`service status-${status_class(service.status)} text-center rounded-lg pa-6 pb-2`"
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
                      <div class="ma-1">
                        v{{ service.version }}
                      </div>
                      <v-flex>
                        <div
                          :class="`pa-status ${status_class(service.status)} rounded-circle d-inline-block`"
                        />
                        <div class="d-inline-block">
                          {{ status(service.status) }}
                        </div>
                      </v-flex>
                    </div>
                  </v-card-text>
                </NuxtLink>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="pa-11 pb-16">
        <v-row>
          <v-col
            v-for="(service, i) in services"
            :id="i"
            :key="service.name"
            cols="6"
            lg="2"
            md="2"
            sm="2"
          >
            <v-card
              v-if="i >= 6"
              :id="`service-${i}`"
              elevation="2"
              align="center"
              justify="center"
              :class="`service status-${status_class(service.status)} text-center rounded-lg pa-6 pb-2`"
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
                    <div class="ma-1">
                      v{{ service.version }}
                    </div>
                    <v-flex>
                      <div
                        :class="`pa-status ${status_class(service.status)} rounded-circle d-inline-block`"
                      />
                      <div class="d-inline-block">
                        {{ status(service.status) }}
                      </div>
                    </v-flex>
                  </div>
                </v-card-text>
              </NuxtLink>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center mt-10">
          <v-pagination
            v-model="page"
            :length="6"
          />
        </div>
      </div>
    </Section>
  </Main>
</template>
<script>
export default {
  layout: 'admin',
  async asyncData ({ $axios }) {
    try {
      const _services = await $axios.$get('/api/services.json')
      return {
        services: _services.services,
        page: 1,
        title: 'Painel de aplicações'
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
