<template>
    <div class="page-container w-full bg-primary-200">
        <div class="w-full h-full flex">
            <BaseSideDrawer>
                <template #side>
                    <BaseSideNavigation />
                </template>
            </BaseSideDrawer>
            <div class="grid grid-cols-2 w-full overflow-hidden">
                <div
                    class="editor-container col-span-1 max-h-full overflow-x-hidden"
                >
                    <CodeEditor />
                </div>
                <div
                    class="editor-container col-span-1 max-h-full overflow-y-auto"
                >
                    <CodeShowcase />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Charlene Tormes | About",
});
</script>

<style scoped>
.page-container {
    height: calc(100vh - 115px);
}
</style>
