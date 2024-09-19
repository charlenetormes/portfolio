<template>
    <div class="flex w-full max-w-80 h-full border-r-[1px] border-lines-100">
        <div class="flex flex-col w-full">
            <BaseSideSection title="projects">
                <BaseSideProject @change="handleChange" v-model="techs" />
            </BaseSideSection>
        </div>
    </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["update:modelValue"]);
const techs = ref();

const handleChange = () => {
    emits("update:modelValue", techs.value);
};
</script>
