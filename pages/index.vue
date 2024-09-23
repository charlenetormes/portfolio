<template>
    <div class="page-container w-full bg-primary-200">
        <div
            class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-full"
        >
            <div
                class="relative col-span-1 flex justify-center items-center p-6 lg:p-0"
            >
                <img
                    class="block lg:hidden absolute left-0 top-0 w-full h-full z-1"
                    src="/images/svg/bg.svg"
                />
                <div class="flex flex-col text-white gap-20">
                    <div class="flex flex-col text-white">
                        <span class="text-lg">Hi all. I am</span>
                        <h2
                            class="text-2xl mobile:text-4xl lg:text-5xl text-nowrap"
                        >
                            Charlene Tormes
                        </h2>
                        <div class="flex items-center gap-5 text-secondary-300">
                            <span class="text-2xl mobile:text-2xl lg:text-3xl"
                                >></span
                            >
                            <span class="text-2xl mobile:text-2xl lg:text-3xl"
                                >Full Stack Developer</span
                            >
                        </div>
                    </div>

                    <div class="flex flex-col w-full gap-3">
                        <div
                            class="hidden md:flex flex-wrap gap-4 text-secondary-100 text-sm mobile:text-sm lg:text-base"
                        >
                            <span>//</span>
                            <span>try to complete the game</span>
                        </div>
                        <div
                            class="flex lg:flex-wrap gap-4 text-secondary-100 text-sm mobile:text-sm lg:text-base"
                        >
                            <span>//</span>
                            <span class="md:block hidden"
                                >you can also see it on my Github page</span
                            >
                            <span class="block md:hidden"
                                >check out my github page for more
                                projects</span
                            >
                        </div>
                        <div
                            class="flex flex-wrap gap-4 text-sm mobile:text-sm lg:text-base"
                        >
                            <span class="text-secondary-300">const</span>
                            <span class="text-accent-200">githubLink</span> =
                            <a
                                target="_blank"
                                href="https://github.com/charlenetormes"
                            >
                                <span
                                    class="text-accent-100 cursor-pointer hover:opacity-80"
                                    >"https://github.com/charlenetormes"</span
                                >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="relative col-span-1 hidden lg:flex justify-center items-center text-secondary-100"
            >
                <img
                    class="absolute left-0 top-0 w-full h-full z-1"
                    src="/images/svg/bg.svg"
                />
                <div
                    class="relative flex items-center justify-center w-[510px] h-[475px] z-10"
                >
                    <img src="/images/svg/snake-container.svg" />
                    <div
                        class="absolute flex gap-8 w-full left-0 top-0 py-8 px-8"
                    >
                        <div
                            class="game-container relative w-full h-[405px] rounded-lg"
                        >
                            <SnakeGame @updateFood="handleFoodUpdate" />
                        </div>
                        <div class="w-full flex-col justify-center">
                            <div
                                class="instructions-container w-full flex gap-1 flex-col rounded-lg py-4 px-3"
                            >
                                <div class="flex gap-3 text-white text-sm">
                                    <span>//</span><span>use keyboard</span>
                                </div>
                                <div class="flex gap-3 text-white text-sm">
                                    <span>//</span><span>arrows to play</span>
                                </div>
                                <div
                                    class="arrows-container flex flex-col gap-[5px] w-full pt-5"
                                >
                                    <div
                                        class="w-full flex items-center justify-center"
                                    >
                                        <BaseArrowButton :direction="1" />
                                    </div>
                                    <div
                                        class="w-full flex items-center gap-[5px] justify-center"
                                    >
                                        <BaseArrowButton :direction="3" />
                                        <BaseArrowButton :direction="2" />
                                        <BaseArrowButton :direction="4" />
                                    </div>
                                </div>
                            </div>
                            <SnakeFood :food="Number(food)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Charlene Tormes",
});

const food = ref(10);

const handleFoodUpdate = (foodLeft: number) => {
    food.value = unref(foodLeft);
};
</script>

<style scoped>
.page-container {
    height: calc(100vh - 115px);

    @media (max-width: 1023px) {
        height: calc(100vh - 57px);
    }
}

.instructions-container {
    background: rgba(1, 20, 35, 0.19);
}
.game-container {
    background: rgba(1, 22, 39, 0.84);
}
</style>
