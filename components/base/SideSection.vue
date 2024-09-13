<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-col w-full">
            <div
                :class="[
                    'py-[10px] px-4 border-b-[1px] border-lines-100 w-full',
                    { 'border-t-[1px]': withTopBorder },
                ]"
            >
                <span class="text-white text-base">{{ title }}</span>
            </div>
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    title: string;
    withTopBorder: boolean;
}

defineProps({
    title: { type: String, default: "personal-info" },
    withTopBorder: { type: Boolean, default: false },
}) satisfies Props;
</script>
