import colors from 'vuetify/lib/util/colors'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false, // false for SPA on Netlify default is true
  target: 'static', // static for SPA on Netlify default is 'server'
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
      { rel: 'profile', href: 'https://gmpg.org/xfn/11' }
      /* { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' } */
    ],
    bodyAttrs: { class: 'body' }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css'
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
    '@nuxtjs/svg',
    '@nuxtjs/pwa'
  ],
  eslint: {
    cache: true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/dotenv', {
      filename: process.env.NODE_ENV === 'production' ? './.env.prod' : './.env'
    }],
    ['@nuxtjs/axios', {
      baseURL: process.env.BASE_URL
    }],
    ['@nuxtjs/vuetify', {
      icons: {
        iconfont: 'mdi'
      },
      theme: {
        themes: {
          light: {
            primary: '#004e5d', // #004e5d
            secondary: colors.grey.darken4, // #212121
            accent: colors.indigo.base, // #3F51B5
            error: colors.red.darken3, // #C62828
            info: colors.lightBlue.darken3, // #0277BD
            success: colors.green.accent4, // #00C853
            warning: colors.yellow.darken3 // #F9A825
          }
        }
      }
    }]
  ],
  publicRuntimeConfig: {
    pwa: {
      manifest: {
        name: 'SIAT / SEFAZ-PI',
        lang: 'pt-br',
        useWebmanifestExtension: true
      }
    }
  },
  serverMiddleware: [
    // Server-side redirects
    '~/serverMiddleware/redirects'
  ],
  loading: { color: '#004e5d' },
  generate: {
    fallback: true // prevent error 404 on Netlify
  },
  router: {
    prefetchLinks: true
  }
  // Build Configuration: https://go.nuxtjs.dev/config-build
  /*
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
  */
}
