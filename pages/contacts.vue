<template>
    <div class="page-container w-full bg-primary-200">
        <div class="w-full h-full flex">
            <BaseContactDrawer />
            <div class="grid grid-cols-2 w-full overflow-hidden">
                <div
                    class="col-span-1 w-full h-full flex border-r-[1px] border-lines-100 text-secondary-100"
                >
                    <CodeContact v-model="formValues" />
                    <!-- {{ formValues }} -->
                </div>
                <div
                    class="col-span-1 w-full h-full flex overflow-x-hidden overflow-y-auto"
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
}
</style>
