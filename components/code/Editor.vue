<template>
    <div class="w-full h-full flex flex-col border-r-[1px] border-lines-100">
        <div
            class="hidden lg:block min-h-[45px] border-b-[1px] border-lines-100"
        >
            <CodeTab
                v-if="isTabVisible"
                @handleClose="handleClose"
                :title="title"
            />
        </div>
        <div
            v-if="title"
            class="w-full text-secondary-100 flex gap-1 lg:gap-3 px-4 lg:px-10 pt-6 text-sm lg:text-base"
        >
            <span class="text-white">//</span>
            <span class="text-white">{{ sectionTitle }}</span>
            <span>/</span>
            <span>{{ title }}</span>
        </div>
        <div
            class="flex flex-col gap-1 px-4 lg:px-10 py-5 overflow-y-auto overflow-x-hidden text-sm lg:text-base"
            v-if="lines?.length > 0"
        >
            <CodeLine
                v-for="(item, index) in lines"
                :key="index"
                :line="index + 1"
                :total="lines?.length"
                :statement="item?.statement"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ABOUT_ME } from "@/utilities/data";
import type { ILine } from "@/utilities/interfaces";

const emits = defineEmits(["handleClose"]);

interface Props {
    lines: ILine[];
    sectionTitle: string;
    title: string;
    isTabVisible: Boolean;
}

defineProps({
    lines: { type: Array as PropType<ILine[]>, default: ABOUT_ME },
    sectionTitle: { type: String, default: "personal-info" },
    title: { type: String, default: "personal-info" },
    isTabVisible: { type: Boolean, default: false },
}) satisfies Props;

const handleClose = () => {
    emits("handleClose");
};
</script>
