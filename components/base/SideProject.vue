<template>
    <div class="form-control gap-4 px-4 py-5 text-white">
        <label class="flex gap-3 items-center cursor-pointer">
            <input
                type="checkbox"
                v-model="selectedValues"
                @change="handleChange"
                value="vue"
                class="checkbox checkbox-sm [--chkbg:theme(colors.primary.200)] [--chkfg:theme(colors.secondary.100)] checked:border-secondary-100"
            />
            <span>
                <IconsVue :isChecked="selectedValues.includes('vue')" />
            </span>
            <span
                :class="[
                    'label-text text-secondary-100',
                    {
                        'text-white font-semibold':
                            selectedValues.includes('vue'),
                    },
                ]"
                >Vue</span
            >
        </label>
        <label class="flex gap-3 items-center cursor-pointer">
            <input
                type="checkbox"
                v-model="selectedValues"
                @change="handleChange"
                value="react"
                class="checkbox checkbox-sm [--chkbg:theme(colors.primary.200)] [--chkfg:theme(colors.secondary.100)] checked:border-secondary-100"
            />
            <span>
                <IconsReact :isChecked="selectedValues.includes('react')" />
            </span>
            <span
                :class="[
                    'label-text text-secondary-100',
                    {
                        'text-white font-semibold':
                            selectedValues.includes('react'),
                    },
                ]"
                >React</span
            >
        </label>
    </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["update:modelValue"]);
const selectedValues = ref([]);

const handleChange = () => {
    emits("update:modelValue", selectedValues.value);
};
</script>

<style scoped>
.checkbox {
    border: 1px solid #607b96;
}
:deep(.v-input__details) {
    display: none !important;
}
</style>
