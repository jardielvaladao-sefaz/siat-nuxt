import environments from './.env.js'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portal de serviços SIAT / SEFAZ-PI',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'dns-prefetch', content: '//ajax.googleapis.com' },
      { name: 'dns-prefetch', content: '//fonts.googleapis.com' },
      { name: 'dns-prefetch', content: '//www.google-analytics.com' },
      { name: 'dns-prefetch', content: '//connect.facebook.net' },
      { name: 'dns-prefetch', content: '//fbstatic-a.akamaihd.net' },
      { name: 'dns-prefetch', content: '//www.googletagmanager.com' },
      { name: 'dns-prefetch', content: '//www.google.com' },
      { name: 'dns-prefetch', content: '//s.w.org' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Portal de serviços SIAT / SEFAZ-PI' },
      { property: 'og:description', content: 'Portal de serviços SIAT / SEFAZ-PI' },
      { property: 'og:site_name', content: 'SIAT / SEFAZ-PI' },
      { hid: 'description', name: 'description', content: 'Portal de serviços SIAT / SEFAZ-PI' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon.png' },
      { rel: 'profile', href: 'https://gmpg.org/xfn/11' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;0,900;1,500&family=PT+Sans:wght@400;700&display=swap' }
    ],
    bodyAttrs: { class: 'body' }
  },

  ssr: true,

  env: environments,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/normalize.min.css',
    '@/assets/css/webflow.min.css',
    '@/assets/css/siatweb.webflow.min.css',
    '@/assets/css/style.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/helpers'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa'
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://portal.sefaz.pi.gov.br'
    },
    pwa: {
      manifest: {
        name: 'SIAT / SEFAZ-PI',
        lang: 'pt-br',
        useWebmanifestExtension: true
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  serverMiddleware: [
    // Server-side redirects
    '~/serverMiddleware/redirects'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  }
}
