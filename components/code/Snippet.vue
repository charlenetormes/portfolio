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
                    <span class="text-secondary-100">Created 5 months ago</span>
                </div>
            </div>
        </div>

        <div
            class="w-full flex border-[1px] border-lines-100 py-6 px-7 rounded-[15px] text-secondary-100"
        >
            <CodeGistEmbed :code="code" />
        </div>

        <div class="border-b-[1px] h-[2px] border-lines-100 pt-3"></div>
        <p
            class="text-secondary-100 text-xs text-balance w-full text-center pt-2"
        >
            {{ description }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import type { ISnippet } from "@/utilities/interfaces";

const props = defineProps({
    code: { type: String, default: null },
    description: { type: String, default: null },
    date: { type: Object as PropType<Date>, default: null },
});
</script>

<style scoped>
.details-container:hover svg path {
    fill: #3c9d93;
}
.details-container:hover p {
    color: #3c9d93;
}
</style>
