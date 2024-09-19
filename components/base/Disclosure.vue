<template>
    <div class="w-full" data-v-inspector="true">
        <div class="mx-auto w-full max-w-md rounded-2xl">
            <Disclosure
                as="div"
                v-slot="{ open }"
                v-for="(section, index) in sections"
                :key="index"
            >
                <DisclosureButton
                    class="flex gap-2 w-full items-end rounded-lg text-left text-sm font-medium text-white"
                >
                    <ChevronRightIcon
                        :class="open ? 'rotate-90 transform' : ''"
                        class="h-6 w-6 text-secondary-100"
                    />
                    <div class="flex gap-2">
                        <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z"
                                :fill="section?.folderColor"
                            />
                        </svg>

                        <span>{{ section?.section }}</span>
                    </div>
                </DisclosureButton>
                <DisclosurePanel class="px-8 pb-2 pt-2 text-sm text-gray-500">
                    <div class="flex gap-2 flex-col w-full">
                        <div
                            v-for="(item, index) in section?.files"
                            :key="index"
                            @click="handleClick(item)"
                            class="flex gap-2 items-start text-secondary-100 hover:text-white cursor-pointer"
                        >
                            <img src="/images/svg/file.svg" />
                            <span>{{ item }}</span>
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ISection } from "@/utilities/interfaces";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import {
    ChevronUpIcon,
    ChevronRightIcon,
    ChevronDownIcon,
} from "@heroicons/vue/20/solid";

const emits = defineEmits(["handleFileClick"]);

interface Props {
    sections?: ISection[];
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
