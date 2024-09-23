<template>
    <div class="w-full flex flex-col overflow-y-hidden">
        <div class="hidden lg:block w-full border-b-[1px] border-lines-100">
            <CodeTab title="contacts" />
        </div>
        <div
            class="flex items-start justify-center mobile:px-6 py-20 w-full bg-primary-200"
        >
            <form
                v-if="!isSubmitted"
                @submit.prevent="handleSubmit"
                class="flex flex-col gap-6 text-secondary-100 max-w-xl w-full px-4"
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
                    {{ isLoading ? "submitting..." : "submit-message" }}
                </button>
            </form>
            <div
                v-else-if="isSubmitted"
                class="flex flex-col items-center justify-center gap-4 max-w-96 text-center"
            >
                <h3 class="text-2xl text-white">Thank You! 🤘</h3>
                <p class="text-balance">
                    Your message has been accepted. You will receive answer
                    really soon!
                </p>
                <button
                    @click="sendNewMessage"
                    type="button"
                    class="max-w-40 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    send-new-message
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const emits = defineEmits(["update:modelValue"]);
const isLoading = ref(false);
const isSubmitted = ref(false);

const apiKey = process.env.NUXT_API_KEY ?? "";

const form = reactive({
    name: "",
    email: "",
    message: "",
});

const handleSubmit = async () => {
    isLoading.value = true;
    await sendEmail();
    isLoading.value = false;
};

const sendNewMessage = () => {
    isSubmitted.value = false;
};

const sendEmail = async () => {
    try {
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                accept: "application/json",
                "api-key": apiKey,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                sender: {
                    email: "charlenetormes@gmail.com",
                    name: "Charlene Tormes",
                },
                to: [
                    {
                        email: "charlene.tormes@gmail.com",
                    },
                ],
                subject: `Contacted via Portfolio Website | ${form?.name}`,
                htmlContent: `<html><head></head><body><p>${form?.message}</p><br/><p>Sender Email: ${form?.email}</p></body></html>`,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        console.log(response);
    } catch (error) {
        console.error("Failed to send email", error);
    }
};

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
