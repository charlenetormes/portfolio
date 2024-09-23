<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 w-full lg:overflow-hidden">
        <div
            class="editor-container col-span-1 max-h-full lg:overflow-x-hidden"
        >
            <CodeEditor
                :lines="lines"
                :title="title"
                :isTabVisible="isTabVisible"
                :sectionTitle="sectionTitle"
                @handleClose="handleClose"
            />
        </div>
        <div
            class="editor-container col-span-1 max-h-full lg:overflow-x-hidden"
        >
            <CodeShowcase :testimonial="testimonial" :snippet="snippet" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ABOUT_ME } from "@/utilities/data";
import type { ILine, ITestimonial, ISnippet } from "@/utilities/interfaces";

const emits = defineEmits(["handleClose"]);

interface Props {
    sectionTitle: string;
    title: string;
    lines: ILine[];
    isTabVisible: boolean;
    testimonial: ITestimonial;
    snippet: ISnippet;
}

defineProps({
    sectionTitle: { type: String, default: "professional-info" },
    title: { type: String, default: "about-me" },
    lines: { type: Array as PropType<ILine[]>, default: ABOUT_ME },
    isTabVisible: { type: Boolean, default: false },
    testimonial: { type: Object as PropType<ITestimonial>, default: null },
    snippet: { type: Object as PropType<ISnippet>, default: null },
}) satisfies Props;

const handleClose = () => {
    emits("handleClose");
};
</script>
