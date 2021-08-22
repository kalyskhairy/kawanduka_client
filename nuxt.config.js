export default {
    head: {
        titleTemplate: 'Martfury - Multi-purpose Ecomerce template with vuejs',
        title: 'Martfury - Multi-purpose Ecomerce template with vuejs',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Martfury - Multipurpose Marketplace Vuejs Ecommerce Template'
            }
        ],
        link: [
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext'
            }
        ]
    },

    css: [
        'swiper/dist/css/swiper.css',
        '~/static/fonts/Linearicons/Font/demo-files/demo.css',
        '~/static/fonts/font-awesome/css/font-awesome.css',
        '~/static/css/bootstrap.min.css',
        '~/assets/scss/style.scss'
    ],

    plugins: [
        { src: '~plugins/vueliate.js', ssr: false },
        { src: '~/plugins/swiper-plugin.js', ssr: false },
        { src: '~/plugins/vue-notification.js', ssr: false },
        { src: '~/plugins/axios.js', ssr: false },
        { src: '~/plugins/lazyLoad.js', ssr: false },
        { src: '~/plugins/public-service.js' }
    ],

    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt',
        '@nuxtjs/dotenv'
    ],

    styleResources: {
        scss: './assets/scss/env.scss'
    },

    modules: ['@nuxtjs/axios', 'nuxt-i18n'],

    i18n: {
        locales: [
            { code: 'en', file: 'en.json' },
            { code: 'fr', file: 'fr.json' },
            { code: 'zh', file: 'zh.json' }
        ],
        lazy: true,
        defaultLocale: 'en',
        langDir: 'lang/locales/'
    },

    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'active'
    },
    target: 'server',
    server: {
        port: process.env.port || 4002,
        host: '127.0.0.1'
    },
    auth: {
        localStorage: false,
        redirect: {
          login: '/login',
          logout: '/login',
          callback: '/login',
          home: '/'
        },
        cookie: {
          prefix: 'auth.',
          options: {
            path: '/',
            domain: process.env.DOMAIN_COOKIES,
            secure: (process.env.APP_ENV == 'production')
          }
        },
        strategies: {
          local: {
            token: {
              property: 'access_token',
              maxAge: 3000
            },
            user: {
              property: '',
            },
            endpoints: {
              login: { url: '/auth/login', method: 'post' },
              logout: { url: '/auth/logout', method: 'post' },
              user: { url: '/auth/me', method: 'get' }
            },
          }
        },
      },
};
