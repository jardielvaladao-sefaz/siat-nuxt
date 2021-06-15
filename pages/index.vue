<template>
  <div>
    <Menu :titulo="title" :versao="version" />
    <Main>
      <v-container>
        <div class="pt-4 pa-8">
          <v-breadcrumbs large :items="breadcrumbs" class="pl-0 ml-0" />
          <div class="mb-10">
            <h2 class="subtitle text-uppercase primary--text">
              DT-E | Domicílio Tributário Eletrônico
            </h2>
          </div>
          <Section>
            <h3>Como utilizar?</h3>
            <p>Acesse o SIAT atrav&eacute;s do seu login e senha,&nbsp;<a href="#">clique aqui</a></p>
            <h3>Usu&aacute;rio j&aacute; possui o acesso como respons&aacute;vel ou colaborador PJ pelo SIAT, como acessar o Processo Eletr&ocirc;nico?</h3>
            <p>Para utilizar o Processo Eletr&ocirc;nico basta usar o seu acesso como Respons&aacute;vel ou Colaborador de Pessoa Jur&iacute;dica no SIAT &ndash;&nbsp;<a href="#">Clique aqui</a></p>
            <h3>N&atilde;o possuo acesso ao SIAT, como me cadastrar?</h3>
            <p>Se n&atilde;o possuir acesso ao SIAT como Pessoa F&iacute;sica,&nbsp;<a href="#">clique aqui</a>&nbsp;e cadastre-se.</p>
            <h3>Usu&aacute;rio possui acesso pelo SIAT atrav&eacute;s de login do antigo sistema de nota (apenas por CNPJ), &eacute; poss&iacute;vel utilizar o Processo Eletr&ocirc;nico?</h3>
            <p>N&atilde;o. Ser&aacute; necess&aacute;rio o credenciamento da empresa clicando neste&nbsp;<a href="#">link</a>&nbsp;ou se cadastrar como pessoa f&iacute;sica no SIAT por meio deste&nbsp;<a href="#">link</a>&nbsp;.</p>
          </Section>
        </div>
      </v-container>
    </Main>
  </div>
</template>
<script>
export default {
  async asyncData ({ params, $axios }) {
    try {
      const services = await $axios.$get('/api/services.json')
      const breadcrumbs = [
        { text: 'Início', disabled: false, to: '/' },
        { text: 'DTE', disabled: false, to: '/' }
      ]
      return {
        title: process.env.nameApp,
        version: process.env.version,
        service: services.services,
        breadcrumbs,
        textos: 6,
        right: null
      }
    } catch (error) {
    }
  }
}
</script>
<style scoped>
  section a, section h3 {font-weight:500}
</style>
