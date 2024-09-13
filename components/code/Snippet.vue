<template>
    <div class="flex flex-col gap-2 w-full">
        <div class="flex justify-between w-full">
            <div class="flex gap-3 items-center">
                <img
                    class="w-9 h-9 rounded-full"
                    src="/images/png/charlenetormes.png"
                />
                <div class="flex flex-col text-sm">
                    <p class="text-accent-500">@charlenetormes</p>
                    <span class="text-secondary-100">Created 5 months ago</span>
                </div>
            </div>

            <div class="flex gap-5">
                <div class="details-container flex gap-[5px] cursor-pointer">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_64_1669)">
                            <path
                                d="M3.69676 14.3032C2.99928 13.6076 2.44616 12.7809 2.06917 11.8708C1.69218 10.9607 1.49875 9.9851 1.50001 9C1.50001 4.85775 4.85776 1.5 9.00001 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9.00001 16.5H1.50001L3.69676 14.3032ZM6.00001 9.75C6.00001 10.5456 6.31608 11.3087 6.87869 11.8713C7.44129 12.4339 8.20436 12.75 9.00001 12.75C9.79566 12.75 10.5587 12.4339 11.1213 11.8713C11.6839 11.3087 12 10.5456 12 9.75H6.00001Z"
                                fill="#607B96"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_64_1669">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p class="text-secondary-100 text-sm">details</p>
                </div>
            </div>
        </div>

        <div
            class="w-full flex border-[1px] border-lines-100 py-6 px-7 rounded-[15px] text-secondary-100"
        >
            <CodeGistEmbed :code="code" />
        </div>

        <div class="border-b-[1px] h-[2px] border-lines-100 pt-3"></div>
        <p
            class="text-secondary-100 text-xs text-balance w-full text-center pt-2"
        >
            Created this helper function to remove html tags from a string that
            was returned from the backend and did not need to be passed to a
            v-html tag
        </p>
    </div>
</template>

<script lang="ts" setup>
const code = `
export const removeHtmlTags = (str: string): string => {
  return str?.replace(/<[^>]*>/g, '')
}`;
</script>

<style scoped>
.details-container:hover svg path {
    fill: #3c9d93;
}
.details-container:hover p {
    color: #3c9d93;
}
</style>
