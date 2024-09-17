<template>
    <div class="w-full flex flex-col overflow-y-hidden">
        <div class="w-full border-b-[1px] border-lines-100">
            <CodeTab title="Vue" />
        </div>
        <div
            class="grid grid-cols-3 gap-x-8 gap-y-8 w-full h-full py-20 px-28 overflow-scroll"
        >
            <div class="col-span-1">
                <BaseCardProject title="_calculator-app" />
            </div>
            <div class="col-span-1">
                <BaseCardProject
                    sequence="Project 2"
                    title="_storma-landing"
                    description="Built the landing page for Storma using Nuxt 3, Tailwind, and Vuetify. It's connected to a Strapi backend. "
                    image="/images/webp/bg-homepage.webp"
                    link="https://storma.com/"
                    tech="vue"
                />
            </div>
            <div class="col-span-1">
                <BaseCardProject
                    sequence="Project 3"
                    title="_storma-developer-portal"
                    description="I contributed in the development of the Talent Portal. This is the website for talents looking for jobs."
                    image="/images/jpeg/bg-developers.jpg"
                    link="https://client.cloudemployee.io/auth/login/"
                    tech="vue"
                />
            </div>
            <div class="col-span-1">
                <BaseCardProject
                    sequence="Project 4"
                    title="_storma-client-portal"
                    description="I contributed in the developement of the Client Portal. This is where the companies manage their talents."
                    image="/images/png/hero-companies-bg.png"
                    link="https://talent.cloudemployee.io/auth/login/"
                    tech="vue"
                />
            </div>
            <div class="col-span-1">
                <BaseCardProject
                    sequence="Project 5"
                    title="_supernudge-app"
                    description="Skyrocket response rates. Automate email nudges to recipients."
                    image="/images/png/supernudge.png"
                    link="https://supernudge.app/"
                    tech="vue"
                />
            </div>
            <div class="col-span-1">
                <BaseCardProject
                    sequence="Project 6"
                    title="_knock-knock-app"
                    description="A simple to do list website. This is based off the knock knock pads."
                    image="/images/png/knookknook.png"
                    link="https://knock-knock-89c26.web.app/"
                    tech="react"
                    top
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>
