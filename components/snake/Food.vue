<template>
    <div class="w-full flex flex-col gap-[10px] py-5 px-3">
        <div class="w-full flex gap-3 text-white">
            <span>//</span><span>food left</span>
        </div>
        <div class="w-full grid grid-cols-5 gap-2">
            <img
                v-for="(i, index) in 10"
                :key="index"
                src="/images/svg/active-food.svg"
            />
        </div>
    </div>
</template>
