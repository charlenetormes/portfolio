<template>
    <div class="w-full flex flex-col gap-[10px] py-5 px-3">
        <div class="w-full flex gap-3 text-white">
            <span>//</span><span>food left</span>
        </div>
        <div class="w-full grid grid-cols-5 gap-2">
            <div v-for="i in 10" :key="i">
                <img v-if="i <= food" src="/images/svg/active-food.svg" />
                <img v-else src="/images/svg/inactive-food.svg" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    food: { type: Number, default: 10 },
});
</script>
