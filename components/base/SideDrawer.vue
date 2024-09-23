<template>
    <div
        class="flex lg:flex-row w-full lg:max-w-80 h-full border-r-[1px] border-lines-100 lg:overflow-hidden"
    >
        <slot name="side" />
        <div
            class="flex flex-col w-full h-full overflow-y-auto overflow-x-hidden"
        >
            <!-- DESKTOP VIEW -->
            <div class="hidden lg:block">
                <BaseSideSection :title="title" defaultOpen>
                    <BaseSideContent
                        @handleFileClick="handleFileClick"
                        :sections="sections"
                    />
                </BaseSideSection>
            </div>
            <!-- END -->
            <!-- MOBILE VIEW -->
            <BaseSideSection title="professional-info" defaultOpen>
                <BaseSideContent
                    @handleFileClick="handleFileClick"
                    :sections="PROFESSIONAL_INFO"
                />
            </BaseSideSection>
            <BaseSideSection title="personal-info">
                <BaseSideContent
                    @handleFileClick="handleFileClick"
                    :sections="PERSONAL_INFO"
                />
            </BaseSideSection>
            <BaseSideSection title="hobbies-info">
                <BaseSideContent
                    @handleFileClick="handleFileClick"
                    :sections="HOBBIES_INFO"
                />
            </BaseSideSection>
            <!-- END -->
            <BaseSideSection :withTopBorder="true" title="contacts">
                <BaseSideContact />
            </BaseSideSection>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    PERSONAL_INFO,
    PROFESSIONAL_INFO,
    HOBBIES_INFO,
} from "@/utilities/data";
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
