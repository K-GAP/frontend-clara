// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',

    ],
    // i18n: {
    //     locales: [
    //         {code: 'kr', file: 'kr-KR.json'},
    //         {code: 'en', file: 'en-US.json'}
    //     ],
    //     vueI18n: {
    //         legacy: false,
    //         locale: 'kr',
    //         fallbackLocale: 'kr',
    //         availableLocales: ['en', 'kr'],
    //     }
    // },
    typescript: {
        tsConfig: {
            compilerOptions: {
                strict: true,
                types: ['@pinia/nuxt', './type.d.ts'],
            },
        },
    },
    tailwindcss: {
        configPath: './tailwind.config.ts',
    },
})
