<template>
    <div class="w-full flex flex-col overflow-y-hidden">
        <div class="w-full border-b-[1px] border-lines-100">
            <CodeTab title="Vue" @handleClose="handleClose" />
        </div>
        <div
            class="grid grid-cols-3 gap-x-8 gap-y-8 w-full h-full py-20 px-28 overflow-scroll"
        >
            <div
                class="col-span-1"
                v-for="(project, index) in filteredProjects"
                :key="index"
            >
                <BaseCardProject
                    :sequence="project?.sequence"
                    :title="project?.title"
                    :description="project?.description"
                    :image="project?.image"
                    :link="project?.link"
                    :tech="project?.tech"
                    :top="project?.top"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PROJECTS } from "@/utilities/data";
import type { IProject } from "@/utilities/interfaces";

const props = defineProps({
    selected: { type: Array as PropType<string[]>, default: [] },
});

const filteredProjects = computed(() => {
    if (props?.selected?.length === 0) {
        return PROJECTS;
    }

    return PROJECTS.filter((i: IProject) => props?.selected.includes(i.tech));
});

const handleClose = () => {};
</script>
