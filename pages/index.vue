<template>
    <div class="page-container w-full bg-primary-200">
        <div
            class="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 min-h-full"
        >
            <div class="col-span-1 flex justify-center items-center">
                <div class="flex flex-col text-white gap-20">
                    <div class="flex flex-col text-white">
                        <span class="text-lg">Hi all. I am</span>
                        <h2 class="text-[62px]">Charlene Tormes</h2>
                        <div class="flex items-center gap-5 text-secondary-300">
                            <span class="text-[32px]">></span>
                            <span class="text-[32px]"
                                >Full Stack Developer</span
                            >
                        </div>
                    </div>

                    <div class="flex flex-col w-full gap-3">
                        <div class="flex gap-4 text-secondary-100">
                            <span>//</span>
                            <span>complete the game to continue</span>
                        </div>
                        <div class="flex gap-4 text-secondary-100">
                            <span>//</span>
                            <span>you can also see it on my Github page</span>
                        </div>
                        <div class="flex gap-4">
                            <span class="text-secondary-300">const</span>
                            <span class="text-accent-200">githubLink</span> =
                            <span
                                class="text-accent-100 cursor-pointer hover:opacity-80"
                                >"https://github.com/example/url"</span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="relative col-span-1 flex justify-center items-center text-secondary-100"
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
                            class="w-full h-[405px] bg-primary-200 rounded-lg"
                        ></div>
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
                            <SnakeFood />
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
</script>

<style scoped>
.page-container {
    height: calc(100vh - 115px);
}

.instructions-container {
    background: rgba(1, 20, 35, 0.19);
}
</style>
