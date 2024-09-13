<template>
    <div class="flex w-full max-w-80 h-full border-r-[1px] border-lines-100">
        <slot name="side" />
        <div class="flex flex-col w-full">
            <BaseSideSection>
                <BaseSideContent />
            </BaseSideSection>
            <BaseSideSection :withTopBorder="true" title="contacts">
                <BaseSideContact />
            </BaseSideSection>
        </div>
    </div>
</template>

<script lang="ts" setup></script>
