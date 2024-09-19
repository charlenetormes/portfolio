<template>
    <div
        class="flex w-full max-w-80 h-full border-r-[1px] border-lines-100 overflow-hidden"
    >
        <slot name="side" />
        <div class="flex flex-col w-full h-full overflow-y-auto">
            <BaseSideSection>
                <BaseSideContent
                    @handleFileClick="handleFileClick"
                    :sections="PERSONAL_INFO"
                />
            </BaseSideSection>
            <BaseSideSection :withTopBorder="true" title="contacts">
                <BaseSideContact />
            </BaseSideSection>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PERSONAL_INFO } from "@/utilities/data";
const emits = defineEmits(["handleFileClick"]);

const handleFileClick = (file: string) => {
    emits("handleFileClick", file);
};
</script>
