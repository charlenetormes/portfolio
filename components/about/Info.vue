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
            <CodeShowcase />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ABOUT_ME } from "@/utilities/data";
import type { ILine } from "@/utilities/interfaces";

const emits = defineEmits(["handleClose"]);

interface Props {
    title: string;
    lines: ILine[];
    isTabVisible: boolean;
}

defineProps({
    title: { type: String, default: "about-me" },
    lines: { type: Array as PropType<ILine[]>, default: ABOUT_ME },
    isTabVisible: { type: Boolean, default: false },
}) satisfies Props;

const handleClose = () => {
    emits("handleClose");
};
</script>
