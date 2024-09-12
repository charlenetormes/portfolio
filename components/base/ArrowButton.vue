<template>
    <div
        class="w-[50px] min-h-[29px] bg-primary-400 border-[1px] border-lines-100 rounded-lg flex items-center justify-center"
        @click="handleEventClick"
    >
        <svg
            v-if="direction === DIRECTION.UP"
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z"
                fill="white"
            />
        </svg>
        <svg
            v-if="direction === DIRECTION.DOWN"
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.49998 6.80914L0.24997 0.809142L8.75 0.809143L4.49998 6.80914Z"
                fill="white"
            />
        </svg>
        <svg
            v-if="direction === DIRECTION.LEFT"
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.0390623 4.80914L6.03906 0.559128L6.03906 9.05916L0.0390623 4.80914Z"
                fill="white"
            />
        </svg>
        <svg
            v-if="direction === DIRECTION.RIGHT"
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.96045 4.80914L0.960449 9.05916L0.960449 0.559128L6.96045 4.80914Z"
                fill="white"
            />
        </svg>
    </div>
</template>

<script lang="ts" setup>
import { DIRECTION } from "@/utilities/enums";

interface Props {
    direction: number;
}

defineProps({
    direction: { type: Number, default: DIRECTION.UP },
}) satisfies Props;

const emits = defineEmits(["handleClick"]);
</script>
