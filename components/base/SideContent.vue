<template>
    <div class="flex flex-col w-full py-6 px-4">
        <BaseDisclosure @handleFileClick="handleClick" :sections="sections" />
    </div>
</template>

<script lang="ts" setup>
import type { ISection } from "@/utilities/interfaces";
const emits = defineEmits(["handleFileClick"]);

interface Props {
    sections: ISection[];
}

defineProps({
    sections: {
        type: Array as PropType<ISection[]>,
        default: [
            {
                section: "bio",
                files: ["college"],
                folderColor: "#E99287",
            },
        ],
    },
}) satisfies Props;

const handleClick = (file: string) => {
    emits("handleFileClick", file);
};
</script>
