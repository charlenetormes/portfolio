<template>
    <div class="page-container w-full bg-primary-200">
        <div class="w-full h-full mobile:flex-col lg:flex">
            <BaseContactDrawer />
            <div
                class="grid mobile:grid-cols-1 grid-cols-2 w-full overflow-hidden"
            >
                <div
                    class="col-span-1 w-full h-full flex border-r-[1px] border-lines-100 text-secondary-100"
                >
                    <CodeContact v-model="formValues" />
                </div>
                <div
                    class="col-span-1 w-full h-full mobile:hidden lg:flex overflow-x-hidden overflow-y-auto"
                >
                    <CodeContactSnippet :form="formValues" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Charlene Tormes | Projects",
});

const formValues = ref();
</script>

<style scoped>
.page-container {
    height: calc(100vh - 115px);
    @media (max-width: 1023px) {
        height: calc(100vh - 57px);
    }
}
</style>
