<template>
    <div class="w-full h-full flex flex-col border-r-[1px] border-lines-100">
        <div class="min-h-[45px] border-b-[1px] border-lines-100">
            <CodeTab
                v-if="isTabVisible"
                @handleClose="handleClose"
                :title="title"
            />
        </div>
        <div
            class="flex flex-col gap-1 px-10 py-5 overflow-y-auto overflow-x-hidden"
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
    title: string;
    isTabVisible: Boolean;
}

defineProps({
    lines: { type: Array as PropType<ILine[]>, default: ABOUT_ME },
    title: { type: String, default: "personal-info" },
    isTabVisible: { type: Boolean, default: false },
}) satisfies Props;

const handleClose = () => {
    emits("handleClose");
};
</script>
