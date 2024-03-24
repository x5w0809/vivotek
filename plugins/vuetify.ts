import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        // 引入所有的 component 與 directives
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
})