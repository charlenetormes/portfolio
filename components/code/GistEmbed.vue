<script lang="ts" setup>
const props = defineProps({
    gistUrl: {
        type: String,
        required: true,
    },
});

onMounted(() => {
    const script = document.createElement("script");
    script.src = props.gistUrl;
    script.async = true;
    document.getElementById("gist-container").appendChild(script);
});
</script>

<template>
    <client-only>
        <div id="gist-container"></div>
    </client-only>
</template>
