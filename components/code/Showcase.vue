<template>
    <div class="w-full h-full flex flex-col border-r-[1px] border-lines-100">
        <div class="w-full min-h-[45px] border-b-[1px] border-lines-100"></div>
        <div
            class="flex flex-col gap-[60px] px-10 py-5 overflow-y-auto overflow-x-hidden"
        >
            <div class="flex gap-2 text-secondary-100 text-lg">
                <span>//</span>
                <span>Code snippet showcase:</span>
            </div>

            <CodeSnippet />
        </div>
    </div>
</template>

<script lang="ts" setup></script>
