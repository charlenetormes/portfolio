<template>
    <div
        class="flex max-w-[220px] justify-between items-center text-secondary-100 border-r-[1px] border-lines-100 py-[10px] px-4"
    >
        <span>{{ title }}</span>
        <XMarkIcon
            class="w-5 h-5 cursor-pointer hover:text-secondary-200 transition-all duration-100"
        />
    </div>
</template>

<script lang="ts" setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";

interface Props {
    title: string;
}

defineProps({
    title: { type: String, default: "personal-info" },
}) satisfies Props;
</script>
