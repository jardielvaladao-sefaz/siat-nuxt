<template>
  <header id="header">
    <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navbar w-nav">
      <Container>
        <a href="/" aria-current="page" class="w-nav-brand" title="">
          <img src="/images/logo.png" loading="lazy" width="190" sizes="190px" alt="">
        </a>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <a href="/sobre" class="nav-link w-nav-link  w--current">Sobre</a>
          <a href="/consumidor" class="nav-link w-nav-link">Consumidor</a>
          <a href="/contato" class="nav-link w-nav-link">Contato</a>
          <a href="/suportes" class="nav-link w-nav-link">Suporte</a>
          <a href="/faq" class="nav-link w-nav-link">FAQ</a>
          <a href="https://yumedigital.com.br/users/login" target="_blank" class="nav-link destaque w-nav-link">Login</a>
        </nav>
        <div class="menu-button w-nav-button">
          <div class="w-icon-nav-menu" />
        </div>
      </Container>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: ''
    },
    menu: {
      type: String,
      default: ''
    }
  }
}
</script>
