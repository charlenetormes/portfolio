<template>
    <div class="w-full h-full flex flex-col border-r-[1px] border-lines-100">
        <div class="w-full min-h-[45px] border-b-[1px] border-lines-100">
            <CodeTab />
        </div>
        <div
            class="flex flex-col gap-1 px-10 py-5 overflow-y-auto overflow-x-hidden"
        >
            <CodeLine
                v-for="(item, index) in data"
                :key="index"
                :line="index + 1"
                :total="data?.length"
                :statement="item?.statement"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
const data = [
    {
        statement: "/**",
    },
    {
        statement: "* About me",
    },
    {
        statement: "* I have 5 years of experience in web",
    },
    {
        statement: "* development lorem ipsum dolor sit amet, ",
    },
    {
        statement: "* consectetur adipiscing elit, sed do eiusmod",
    },
    {
        statement: "* tempor incididunt ut labore et dolore",
    },
    {
        statement: "* magna aliqua. Ut enim ad minim veniam,",
    },
    {
        statement: "* quis nostrud exercitation ullamco laboris",
    },
    {
        statement: "* nisi ut aliquip ex ea commodo consequat.",
    },
    {
        statement: "* Duis aute irure dolor in reprehenderit in",
    },
    {
        statement: "*",
    },
    {
        statement: "* Duis aute irure dolor in reprehenderit in",
    },
    {
        statement: "* voluptate velit esse cillum dolore eu fugiat ",
    },
    {
        statement: "* nulla pariatur. Excepteur sint occaecat",
    },
    {
        statement: "* officia deserunt mollit anim id est laborum.",
    },
    {
        statement: "/**",
    },
    {
        statement: "* About me",
    },
    {
        statement: "* I have 5 years of experience in web",
    },
    {
        statement: "* development lorem ipsum dolor sit amet, ",
    },
    {
        statement: "* consectetur adipiscing elit, sed do eiusmod",
    },
    {
        statement: "* tempor incididunt ut labore et dolore",
    },
    {
        statement: "* magna aliqua. Ut enim ad minim veniam,",
    },
    {
        statement: "* quis nostrud exercitation ullamco laboris",
    },
    {
        statement: "* nisi ut aliquip ex ea commodo consequat.",
    },
    {
        statement: "* Duis aute irure dolor in reprehenderit in",
    },
    {
        statement: "*",
    },
    {
        statement: "* Duis aute irure dolor in reprehenderit in",
    },
    {
        statement: "* voluptate velit esse cillum dolore eu fugiat ",
    },
    {
        statement: "* nulla pariatur. Excepteur sint occaecat",
    },
    {
        statement: "* officia deserunt mollit anim id est laborum.",
    },
    {
        statement: "/**",
    },
    {
        statement: "* About me",
    },
    {
        statement: "* I have 5 years of experience in web",
    },
    {
        statement: "* development lorem ipsum dolor sit amet, ",
    },
    {
        statement: "* consectetur adipiscing elit, sed do eiusmod",
    },
    {
        statement: "* tempor incididunt ut labore et dolore",
    },
    {
        statement: "* magna aliqua. Ut enim ad minim veniam,",
    },
    {
        statement: "* quis nostrud exercitation ullamco laboris",
    },
    {
        statement: "* nisi ut aliquip ex ea commodo consequat.",
    },
    {
        statement: "* Duis aute irure dolor in reprehenderit in",
    },
    {
        statement: "*",
    },
    {
        statement: "* Duis aute irure dolor in reprehenderit in",
    },
    {
        statement: "* voluptate velit esse cillum dolore eu fugiat ",
    },
    {
        statement: "* nulla pariatur. Excepteur sint occaecat",
    },
    {
        statement: "* officia deserunt mollit anim id est laborum.",
    },
];
</script>
