<template>
    <div
        class="flex flex-col gap-3 lg:justify-start mobile:justify-center lg:items-start mobile:items-center"
    >
        <div
            class="flex flex-wrap gap-2 w-full text-secondary-100 items-start lg:items-center justify-start lg:justify-center"
        >
            <h3 class="text-accent-500">{{ sequence }}</h3>
            <span>//</span>
            <span>{{ title }}</span>
        </div>
        <div
            class="flex flex-col max-w-[370px] min-h-[315px] border-[1px] border-lines-100 rounded-[15px]"
        >
            <div class="relative flex max-h-[145px] w-full">
                <img
                    :class="[
                        'w-full object-cover rounded-t-[15px]',
                        { 'object-top': top },
                    ]"
                    :src="image"
                />
                <div
                    :class="[
                        'text-secondary-100 absolute top-2 right-3 flex items-center justify-center w-7 h-7',
                        {
                            'bg-vue': tech === TECH.VUE,
                            'bg-react': tech === TECH.REACT,
                        },
                    ]"
                >
                    <IconsVue v-if="tech === TECH.VUE" />
                    <IconsReact v-else-if="tech === TECH.REACT" />
                </div>
            </div>
            <div class="py-6 px-7 flex flex-col gap-5 text-secondary-100">
                <p class="text-base min-h-[96px]">
                    {{ description }}
                </p>
                <a target="_blank" :href="link">
                    <button
                        type="button"
                        class="max-w-32 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        view-project
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { TECH } from "@/utilities/enums";

interface Props {
    sequence: string;
    title: string;
    description: string;
    link: string;
    image: string;
    tech: string;
    top: boolean;
}

//Duis aute irure dolor in velit esse cillum dolore.

defineProps({
    sequence: { type: String, default: "Project 1" },
    title: { type: String, default: "_ui-animations" },
    description: {
        type: String,
        default:
            "A calculator app that does basic arithmetic functions and it's built to simulate an iOS calculator app.",
    },
    link: {
        type: String,
        default: "https://charlenetormes.github.io/candyspace/calculator",
    },
    image: { type: String, default: "/images/png/calculator.png" },
    tech: { type: String, default: TECH.VUE },
    top: { type: Boolean, default: false },
});
</script>
