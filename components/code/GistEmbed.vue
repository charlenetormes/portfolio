<template>
    <div class="code-snippet bg-primary-200" tabindex="4">
        <pre>
      <code>
        {{ code }}
      </code>
    </pre>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    code: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.code-snippet {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 5px;
    overflow-x: auto;
    font-family: "Courier New", Courier, monospace;
}

code {
    white-space: pre-wrap;
}
</style>
