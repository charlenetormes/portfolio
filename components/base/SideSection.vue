<template>
    <div class="flex flex-col w-full" data-v-inspector="true">
        <div class="flex flex-col w-full">
            <Disclosure
                :class="[
                    'py-[10px] px-4 border-b-[1px] border-lines-100 w-full',
                ]"
                as="div"
                v-slot="{ open }"
                :defaultOpen="defaultOpen"
            >
                <DisclosureButton
                    class="flex gap-2 w-full items-end rounded-lg text-left text-sm font-medium text-white"
                >
                    <ChevronRightIcon
                        :class="open ? 'rotate-90 transform' : ''"
                        class="h-6 w-6 text-secondary-100"
                    />
                    <span :class="['text-white text-sm lg:text-base']">{{
                        title
                    }}</span>
                </DisclosureButton>
                <DisclosurePanel class="px-2 pb-2 pt-2 text-sm text-gray-500">
                    <slot />
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import {
    ChevronUpIcon,
    ChevronRightIcon,
    ChevronDownIcon,
} from "@heroicons/vue/20/solid";

interface Props {
    title: string;
    withTopBorder: boolean;
    defaultOpen: boolean;
}

defineProps({
    title: { type: String, default: "personal-info" },
    withTopBorder: { type: Boolean, default: false },
    defaultOpen: { type: Boolean, default: false },
}) satisfies Props;
</script>
