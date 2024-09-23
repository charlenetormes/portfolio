// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: "/portfolio/",
        buildAssetsDir: "assets",
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: `${process.env.NUXT_APP_BASE_URL}/favicon.ico`,
                },
            ],
        },
    },
    runtimeConfig: {
        public: {
            baseURL: "/portfolio",
            EMAIL_API_KEY: process.env.API_KEY,
        },
    },
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: ["@/assets/css/main.css", "@/assets/css/global.css", "vuetify/styles"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    plugins: ["@/plugins/vuetify"],
    build: {
        transpile: ["vuetify"],
    },
});
