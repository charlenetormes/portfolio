<template>
    <div class="w-full flex flex-col overflow-y-hidden">
        <div class="hidden lg:block w-full border-b-[1px] border-lines-100">
            <CodeTab
                :title="tabTitle"
                :hideClose="true"
                @handleClose="handleClose"
            />
        </div>
        <div
            class="grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-3 mobile:gap-x-4 lg:gap-x-8 mobile:gap-y-4 lg:gap-y-8 w-full h-full mobile:py-6 lg:py-20 mobile:px-6 lg:px-28 overflow-scroll"
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
import { capitalizeFirstLetter } from "@/utilities/helper";
import type { IProject } from "@/utilities/interfaces";

const props = defineProps({
    selected: { type: Array as PropType<string[]>, default: [] },
});

const tabTitle = computed(() => {
    if (props?.selected?.length === 0) return "All;";
    return (
        props?.selected
            ?.map((val: string) => capitalizeFirstLetter(val))
            ?.join(";") + ";"
    );
});

const filteredProjects = computed(() => {
    if (props?.selected?.length === 0) {
        return PROJECTS;
    }

    return PROJECTS.filter((i: IProject) => props?.selected.includes(i.tech));
});

const handleClose = () => {};
</script>
