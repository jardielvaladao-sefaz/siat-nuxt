<template>
  <v-list
    dense
    nav
  >
    <v-list-group
      v-for="item in menu"
      :key="item.title"
      v-model="item.active"
      :prepend-icon="item.icon"
    >
      <template #activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="child in item.items"
        :key="child.title"
        :href="`/service/dte/${child.href}`"
      >
        <v-list-item-content>
          <v-list-item-title v-text="child.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
<script>
export default {
  layout: 'page',
  data () {
    return {
      menu: [
        {
          icon: 'mdi-message-text-outline',
          active: false,
          items: [
            { title: 'Enviar Mensagem', href: 'mensagens/enviarmensagem' },
            { title: 'Consultar Mensagens', href: 'mensagens/consultarmensagens' },
            { title: 'Consultar Mensagens - Destinatário', href: 'mensagens/consultarmensagensdestinatario' }
          ],
          title: 'Mensagens'
        },
        {
          icon: 'mdi-cog-outline',
          active: false,
          items: [
            { title: 'Cadastrar Parâmetros', href: 'configuracoes/cadastrarparametros' },
            { title: 'Configurar Tipos de Mensagens', href: 'configuracoes/configurartiposdemensagens' },
            { title: 'Cadastrar Modelo de Mensagens', href: 'configuracoes/cadastrarmodelodemensagens' }
          ],
          title: 'Configurações'
        }
      ]
    }
  }
}
</script>
