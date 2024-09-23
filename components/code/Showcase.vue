<template>
    <div
        class="w-full h-full flex flex-col border-r-none lg:border-r-[1px] border-lines-100"
    >
        <div
            class="hidden lg:block w-full min-h-[45px] border-b-none lg:border-b-[1px] border-lines-100"
        ></div>
        <div class="flex flex-col gap-[10px] lg:gap-[60px] px-4 lg:px-10 py-5">
            <div class="flex gap-2 text-white lg:text-secondary-100 text-base">
                <span v-if="snippet || testimonial">//</span>
                <span v-if="snippet">Code snippet showcase:</span>
                <span v-else-if="testimonial"
                    >Featured Client Testimonial:</span
                >
            </div>
            <CodeSnippet v-if="snippet" v-bind="snippet" />
            <CodeTestimonial v-else-if="testimonial" v-bind="testimonial" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ITestimonial, ISnippet } from "@/utilities/interfaces";

defineProps({
    testimonial: { type: Object as PropType<ITestimonial>, default: null },
    snippet: { type: Object as PropType<ISnippet>, default: null },
});
</script>
