<template>
    <div class="page-container w-full bg-primary-200">
        <div class="w-full h-full flex text-white">
            <BaseProjectDrawer v-model="selectedTechs" />
            <div class="w-full h-full flex">
                <CodeProject :selected="selectedTechs" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Charlene Tormes | Projects",
});

const selectedTechs = ref([]);
</script>

<style scoped>
.page-container {
    height: calc(100vh - 115px);
}
</style>
