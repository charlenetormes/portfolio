<template>
    <div class="page-container w-full bg-primary-200">
        <div class="w-full h-full flex">
            <BaseProjectDrawer />
            <div class="w-full h-full flex">
                <CodeProject />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Charlene Tormes | Projects",
});
</script>

<style scoped>
.page-container {
    height: calc(100vh - 115px);
}
</style>
