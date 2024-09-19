<template>
    <div
        class="flex w-full max-w-80 h-full border-r-[1px] border-lines-100 overflow-hidden"
    >
        <slot name="side" />
        <div
            class="flex flex-col w-full h-full overflow-y-auto overflow-x-hidden"
        >
            <BaseSideSection :title="title">
                <BaseSideContent
                    @handleFileClick="handleFileClick"
                    :sections="sections"
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
import type { ISection } from "@/utilities/interfaces";
const emits = defineEmits(["handleFileClick"]);

defineProps({
    title: { type: String, default: "personal-info" },
    sections: { type: Array as PropType<ISection[]>, default: PERSONAL_INFO },
});

const handleFileClick = (file: string) => {
    emits("handleFileClick", file);
};
</script>
