<template>
  <Main>
    <v-navigation-drawer app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="subtitle text-uppercase primary--text">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            v{{ service.version }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-group
          v-for="item in menu"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <div class="pt-12 pa-11">
        <v-breadcrumbs large :items="breadcrumbs" class="pl-0 ml-0" />
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
  layout: 'admin',
  async asyncData ({ params, $axios }) {
    try {
      let title = 'Service'
      let service = []
      const _services = await $axios.$get('/api/services.json')
      const services = _services.services
      for (const n in services) { // mais rapido do que fazer um axios.get na categoria current
        if (services[n].link === params.id) {
          title = services[n].name
          service = services[n]
        }
      }
      const breadcrumbs = [
        { text: 'Início', disabled: false, to: '/' },
        { text: 'Painel', disabled: false, to: '/painel' },
        { text: title, disabled: true, to: '#' }
      ]
      const menu = [
        {
          icon: 'mdi-message-text-outline',
          active: true,
          items: [
            { title: 'Menu de teste 01' },
            { title: 'Menu de teste 02' },
            { title: 'Menu de teste 03' }
          ],
          title: 'Mensagens'
        },
        {
          icon: 'mdi-cog-outline',
          active: true,
          items: [
            { title: 'Menu de teste 01' },
            { title: 'Menu de teste 02' },
            { title: 'Menu de teste 03' }
          ],
          title: 'Configurações'
        }
      ]
      return {
        title,
        service,
        breadcrumbs,
        menu,
        right: null
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
          content: 'Módulo ' + this.title + ' | ' + process.env.nameApp + ' ' + process.env.descriptionApp
        }
      ]
    }
  }
}
</script>
<style scoped>
header.v-sheet .v-app-bar__nav-icon{display:none !important}
.subtitle {margin-bottom: 6px !important;}
</style>
