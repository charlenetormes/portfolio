<template>
    <div class="flex flex-col w-full">
        <div class="w-full min-h-[45px] border-b-[1px] border-lines-100"></div>
        <div class="w-full h-full flex flex-col px-10 py-20 text-secondary-100">
            <div class="flex flex-col gap-2">
                <div
                    v-for="(line, index) in data"
                    :key="index"
                    class="flex gap-10"
                >
                    <span>{{ index + 1 }}</span>
                    <div
                        v-if="index === 3"
                        :class="{
                            '-ml-2': (index + 1)?.toString()?.length > 1,
                        }"
                        v-html="name"
                    ></div>
                    <div
                        v-if="index === 4"
                        :class="{
                            '-ml-2': (index + 1)?.toString()?.length > 1,
                        }"
                        v-html="email"
                    ></div>
                    <div
                        v-if="index === 5"
                        :class="{
                            '-ml-2': (index + 1)?.toString()?.length > 1,
                        }"
                        v-html="message"
                    ></div>
                    <div
                        v-if="index === 6"
                        :class="{
                            '-ml-2': (index + 1)?.toString()?.length > 1,
                        }"
                        v-html="date"
                    ></div>
                    <div
                        v-else
                        :class="{
                            '-ml-2': (index + 1)?.toString()?.length > 1,
                        }"
                        v-html="line"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import moment from "moment";
interface FormValues {
    name: string;
    email: string;
    message: string;
}

interface Props {
    form: FormValues;
}

const props = defineProps({
    form: { type: Object as PropType<FormValues>, default: null },
}) satisfies Props;

const data = reactive([
    `<span class="text-accent-400">const</span> <span class="text-accent-500">button</span> <span class="text-accent-400">=</span> <span class="text-accent-400">document</span>.<span class="text-accent-400">querySelector</span>(<span class="text-accent-100">'#sendBtn'</span>);`,
    ``,
    `<span class="text-accent-500">const</span> <span class="text-accent-400">message</span> = {`,
    ``,
    ``,
    ``,
    ``,
    `}`,
    ``,
    `<span class="text-accent-500">button</span>.<span class="text-accent-500">addEventListener</span>(<span class="text-accent-100">'click'</span>, () <span class="text-accent-400">=></span> {`,
    `&nbsp;&nbsp;<span class="text-accent-500">form</span>.<span class="text-accent-500">send</span>(<span class="text-accent-500">message</span>);`,
    `})`,
]);

const digitLength = (line: number) => {
    return line?.toString()?.length;
};

const name = computed(() => {
    return `&nbsp;&nbsp;<span class="text-accent-500 text-wrap max-w-full">name</span>: <span class="text-accent-100">"${
        props?.form?.name ?? ""
    }"</span>`;
});

const email = computed(() => {
    return `&nbsp;&nbsp;<span class="text-accent-500 text-wrap max-w-full">email</span>: <span class="text-accent-100">"${
        props?.form?.email ?? ""
    }"</span>`;
});

const message = computed(() => {
    return `&nbsp;&nbsp;<span class="text-accent-500 text-wrap max-w-full">message</span>: <span class="text-accent-100">"${
        props?.form?.message ?? ""
    }"</span>`;
});

const date = computed(() => {
    return `&nbsp;&nbsp;<span class="text-accent-500">date</span>: ${moment().format(
        "ddd DD MMM"
    )}`;
});
</script>
