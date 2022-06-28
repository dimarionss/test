import colors from 'vuetify/es5/util/colors'
export default {
  ssr: false,
  privateRuntimeConfig: {
    // API_SECRET: process.env.API_TOKEN,
  },
  publicRuntimeConfig: {
    // API_BASE: process.env.NODE_ENV === 'production' ? process.env.URL_SERVER : process.env.URL_LOCAL,
  },
  head: {
    title: 'Platform',
    htmlAttrs: {
      lang: 'en',
      class: 'platform',
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'math platform'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      hid: 'icon',
      href: '/favicon.ico'
    }],
    script: []
  },
  css: ['@/assets/styles/reset.scss', '@/assets/styles/main.scss'],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/svg',
    '@nuxtjs/moment',
    'nuxt-gsap-module',
    '@nuxtjs/vuetify',
  ],
  gsap: {},
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', '@nuxtjs/auth-next',],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      },
    },
  },
  styleResources: {
    scss: [
      '@/assets/styles/helper/_vars-style.scss',
      '@/assets/styles/helper/_vars-helper.scss',
      '@/assets/styles/helper/_mixins.scss',
    ],
  },
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? process.env.URL_SERVER : process.env.URL_LOCAL,
  },
  router: {
    base: '/',
    mode: 'history',
    middleware: ['auth'],
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '/:lang/*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },
  auth: {
    redirect: {
      callback: "/",
      home: "/home",
      login: "/",
      logout: "/"
    },
    localStorage: false,
    strategies: {
      local: false,
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
        logoutRedirectUri: 'http://localhost:3000',
        scope: ['openid', 'profile', 'offline_access'],
        accessType: 'offline',
        responseType: 'code',
        grantType: 'authorization_code',
        codeChallengeMethod: 'S256',
      }
    },
  },
  generate: {
    dir: './dist_server'
  },
  build: {
    target: 'static'
  }
}
