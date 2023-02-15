// const alias: Record<string, string> = {
//   echarts: 'echarts/dist/echarts.common.min.js'
// }

// if (process.env.NODE_ENV === 'development') {
//   alias.ethers = 'ethers/lib/index'
//   alias.moment = 'moment/moment'
// }

export default defineNuxtConfig({
  modules: ['nuxt-windicss', ['@pinia/nuxt', { autoImports: ['defineStore'] }], '@vueuse/nuxt'],
  app: {
    head: {
      title: 'Nuxt3 Starter',
      meta: [
        { charset: 'utf-8' },
        { hid: 'keywords', name: 'keywords', content: '' },
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  },
  typescript: { strict: true },
  // alias,
  css: ['~~/assets/css/app.css'],
  build: {
    templates: [
      {
        filename: 'views/app.template.html',
        getContents() {
          return `<!DOCTYPE html>
            <html {{ HTML_ATTRS }}>
              <head>
              {{ HEAD }}
              </head>
              <body {{ BODY_ATTRS }}>
              {{ APP }}
              </body>
            </html>`
        }
      }
    ]
  }
})
