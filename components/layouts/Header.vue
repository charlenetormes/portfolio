<template>
    <Disclosure as="nav" class="bg-primary-200 shadow" v-slot="{ open }">
        <div
            class="w-full flex bg-primary-200 min-h-[56px] border-b-[1px] border-lines-100"
        >
            <div class="flex w-full justify-between">
                <div class="flex w-full">
                    <div
                        class="min-w-80 py-4 px-5 border-r-none lg:border-r-[1px] border-lines-100"
                    >
                        <nuxt-link to="/">
                            <h1
                                class="text-secondary-100 text-base hover:text-white cursor-pointer"
                            >
                                charlene-tormes
                            </h1>
                        </nuxt-link>
                    </div>
                    <div
                        class="hidden lg:flex w-full items-start justify-between"
                    >
                        <div class="flex w-full items-center">
                            <div class="flex relative">
                                <nuxt-link to="/">
                                    <div
                                        class="relative border-r-[1px] border-lines-100 text-secondary-100 py-4 px-5 cursor-pointer hover:bg-primary-300 transition-all duration-100"
                                    >
                                        <span
                                            :class="{
                                                'text-white':
                                                    route.path === PATHS.HOME,
                                            }"
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
                                                'text-white':
                                                    route.path === PATHS.ABOUT,
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
                                                'text-white':
                                                    route.path ===
                                                    PATHS.PROJECTS,
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
                        <div>
                            <div class="flex relative">
                                <nuxt-link to="/contacts">
                                    <div
                                        class="relative border-l-[1px] border-lines-100 text-secondary-100 py-4 px-5 cursor-pointer hover:bg-primary-300 transition-all duration-100"
                                    >
                                        <span
                                            :class="[
                                                {
                                                    'text-white':
                                                        route.path ===
                                                        PATHS.CONTACTS,
                                                },
                                                'text-nowrap',
                                            ]"
                                            >_contact-me</span
                                        >
                                    </div>
                                </nuxt-link>
                                <div
                                    v-if="route.path === PATHS.CONTACTS"
                                    class="absolute bottom-0 w-full h-[3px] bg-accent-100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="-ml-2 mr-2 flex items-center lg:hidden">
                    <!-- Mobile menu button -->
                    <DisclosureButton
                        class="relative bg-primary-200 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only bg-primary-200"
                            >Open main menu</span
                        >
                        <Bars3Icon
                            v-if="!open"
                            class="block h-6 w-6 text-secondary-100"
                            aria-hidden="true"
                        />
                        <XMarkIcon
                            v-else
                            class="block h-6 w-6 text-secondary-100"
                            aria-hidden="true"
                        />
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <DisclosurePanel class="lg:hidden">
            <div class="space-y-1 pb-3 pt-2">
                <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
                <DisclosureButton
                    as="a"
                    href="/portfolio"
                    :class="[
                        'block bg-primary-200 hover:bg-primary-100 hover:text-white cursor-pointer py-2 pl-3 pr-4 text-base font-medium text-secondary-100 sm:pl-5 sm:pr-6',
                        {
                            'border-l-4 border-accent-100':
                                route.path === PATHS.HOME,
                        },
                    ]"
                    >_hello</DisclosureButton
                >
                <DisclosureButton
                    as="a"
                    href="/portfolio/about"
                    :class="[
                        'block bg-primary-200 hover:bg-primary-100 hover:text-white cursor-pointer py-2 pl-3 pr-4 text-base font-medium text-secondary-100 sm:pl-5 sm:pr-6',
                        {
                            'border-l-4 border-accent-100':
                                route.path === PATHS.ABOUT,
                        },
                    ]"
                    >_about-me</DisclosureButton
                >
                <DisclosureButton
                    as="a"
                    href="/portfolio/projects"
                    :class="[
                        'block bg-primary-200 hover:bg-primary-100 hover:text-white cursor-pointer py-2 pl-3 pr-4 text-base font-medium text-secondary-100 sm:pl-5 sm:pr-6',
                        {
                            'border-l-4 border-accent-100':
                                route.path === PATHS.PROJECTS,
                        },
                    ]"
                    >_projects</DisclosureButton
                >
                <DisclosureButton
                    as="a"
                    href="/portfolio/contacts"
                    :class="[
                        'block bg-primary-200 hover:bg-primary-100 hover:text-white cursor-pointer py-2 pl-3 pr-4 text-base font-medium text-secondary-100 sm:pl-5 sm:pr-6',
                        {
                            'border-l-4 border-accent-100':
                                route.path === PATHS.CONTACTS,
                        },
                    ]"
                    >_contacts</DisclosureButton
                >
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { PlusIcon } from "@heroicons/vue/20/solid";
import { PATHS } from "@/utilities/enums";
const route = useRoute();
</script>
