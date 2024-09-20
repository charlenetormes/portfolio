<template>
    <div class="grid grid-cols-2 w-full overflow-hidden">
        <div class="editor-container col-span-1 max-h-full overflow-x-hidden">
            <CodeEditor
                :lines="lines"
                :title="title"
                :isTabVisible="isTabVisible"
                @handleClose="handleClose"
            />
        </div>
        <div class="editor-container col-span-1 max-h-full overflow-y-auto">
            <CodeShowcase :testimonial="testimonial" :snippet="snippet" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ABOUT_ME } from "@/utilities/data";
import type { ILine, ITestimonial, ISnippet } from "@/utilities/interfaces";

const emits = defineEmits(["handleClose"]);

interface Props {
    title: string;
    lines: ILine[];
    isTabVisible: boolean;
    testimonial: ITestimonial;
    snippet: ISnippet;
}

defineProps({
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
