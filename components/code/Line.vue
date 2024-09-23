<template>
    <div class="w-full flex gap-4 lg:gap-10 text-secondary-100 text-sm">
        <span>{{ line }}</span>
        <span :class="{ '-ml-2': digitLength > 1 }">{{ statement }}</span>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    line: number;
    total: number;
    statement: string;
}

const props = defineProps({
    line: { type: Number, default: 1 },
    statement: { type: String, default: "/**" },
    total: { type: Number, default: 1 },
}) satisfies Props;

const digitLength = computed(() => {
    return props?.line?.toString()?.length;
});
</script>
