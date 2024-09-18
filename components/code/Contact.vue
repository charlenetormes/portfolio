<template>
    <div class="w-full flex flex-col overflow-y-hidden">
        <div class="w-full border-b-[1px] border-lines-100">
            <CodeTab title="contacts" />
        </div>
        <div class="flex items-start justify-center py-20 w-full h-full">
            <form
                class="flex flex-col gap-6 text-secondary-100 max-w-xl w-full"
            >
                <div class="flex flex-col gap-2">
                    <label class="items-start">_name</label>
                    <input
                        v-model="form.name"
                        type="text"
                        placeholder="John Doe"
                        class="input input-bordered w-full bg-primary-100 text-secondary-400"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="items-start">_email</label>
                    <input
                        v-model="form.email"
                        type="text"
                        placeholder="example@gmail.com"
                        class="input input-bordered w-full bg-primary-100 text-secondary-400"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="items-start">_message</label>
                    <textarea
                        v-model="form.message"
                        class="textarea textarea-bordered bg-primary-100 text-secondary-400"
                        placeholder="Message"
                        rows="8"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    class="max-w-40 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    submit-message
                </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["update:modelValue"]);

const form = reactive({
    name: "",
    email: "",
    message: "",
});

watch(
    () => form.name,
    () => {
        handleUpdates();
    }
);

watch(
    () => form.email,
    () => {
        handleUpdates();
    }
);

watch(
    () => form.message,
    () => {
        handleUpdates();
    }
);

const handleUpdates = () => {
    emits("update:modelValue", form);
};
</script>
