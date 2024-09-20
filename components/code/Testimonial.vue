<template>
    <div class="flex flex-col gap-2 w-full">
        <div class="flex justify-between w-full">
            <div class="flex gap-3 items-center">
                <img
                    class="w-9 h-9 rounded-full"
                    src="/images/png/charlenetormes.png"
                />
                <div class="flex flex-col text-sm">
                    <p class="text-accent-500">@charlenetormes</p>
                    <span class="text-secondary-100">{{
                        getMonthsAgo(date)
                    }}</span>
                </div>
            </div>
        </div>

        <div
            class="w-full flex flex-col gap-2 border-[1px] border-lines-100 py-6 px-7 rounded-[15px] text-secondary-100"
        >
            <div class="flex gap-2 items-center">
                <div class="flex gap-2">
                    <StarIcon
                        v-for="(star, index) in stars"
                        :key="index"
                        class="w-4 h-4"
                    />
                </div>
                <span>|</span>
                <a
                    class="text-accent-500 underline"
                    href="https://www.upwork.com/freelancers/~0113f243486f4ea1ab"
                    target="_blank"
                    >{{ jobTitle }}</a
                >
            </div>
            <p>"{{ testimonial }}"</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import { StarIcon } from "@heroicons/vue/20/solid";
import { getMonthsAgo } from "@/utilities/helper";
import type { ITestimonial } from "@/utilities/interfaces";

defineProps({
    stars: { type: Number, default: 5 },
    testimonial: { type: String, default: null },
    jobTitle: { type: String, default: null },
    link: { type: String, default: "#" },
}) satisfies ITestimonial;

const pastDate = computed(() => {});
</script>
