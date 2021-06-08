<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :max-width="250"
    bottom
    nudge-bottom="0"
    offset-y
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="secondary"
        v-bind="attrs"
        fab
        dark
        x-small
        v-on="on"
      >
        <v-icon>mdi-help</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-uppercase mb-2">
              Descrição de tela
            </v-list-item-title>
            <v-list-item-subtitle>
              <div style="white-space: normal !important;">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  layout: 'page',
  data () {
    return {
      menu: false
    }
  }
}
</script>
