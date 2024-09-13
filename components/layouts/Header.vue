<template>
    <div
        class="w-full flex bg-primary-200 min-h-[56px] border-b-[1px] border-lines-100"
    >
        <div class="min-w-80 py-4 px-5 border-r-[1px] border-lines-100">
            <h1 class="text-secondary-100 text-base">charlene-tormes</h1>
        </div>
        <div class="flex w-full items-center">
            <div class="flex relative">
                <nuxt-link to="/">
                    <div
                        class="relative border-r-[1px] border-lines-100 text-secondary-100 py-4 px-5 cursor-pointer hover:bg-primary-300 transition-all duration-100"
                    >
                        <span
                            :class="{ 'text-white': route.path === PATHS.HOME }"
                            >_hello</span
                        >
                    </div>
                </nuxt-link>
                <div
                    v-if="route.path === PATHS.HOME"
                    class="absolute bottom-0 w-full h-[3px] bg-accent-100"
                ></div>
            </div>
            <div class="flex relative">
                <nuxt-link to="/about">
                    <div
                        class="relative border-r-[1px] border-lines-100 text-secondary-100 py-4 px-5 cursor-pointer hover:bg-primary-300 transition-all duration-100"
                    >
                        <span
                            :class="{
                                'text-white': route.path === PATHS.ABOUT,
                            }"
                            >_about-me</span
                        >
                    </div>
                </nuxt-link>
                <div
                    v-if="route.path === PATHS.ABOUT"
                    class="absolute bottom-0 w-full h-[3px] bg-accent-100"
                ></div>
            </div>
            <div class="flex relative">
                <nuxt-link to="/projects">
                    <div
                        class="relative border-r-[1px] border-lines-100 text-secondary-100 py-4 px-5 cursor-pointer hover:bg-primary-300 transition-all duration-100"
                    >
                        <span
                            :class="{
                                'text-white': route.path === PATHS.PROJECTS,
                            }"
                            >_projects</span
                        >
                    </div>
                </nuxt-link>
                <div
                    v-if="route.path === PATHS.PROJECTS"
                    class="absolute bottom-0 w-full h-[3px] bg-accent-100"
                ></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PATHS } from "@/utilities/enums";
const route = useRoute();
</script>
