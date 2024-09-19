<template>
    <div class="page-container w-full bg-primary-200">
        <div class="w-full h-full flex">
            <BaseSideDrawer @handleFileClick="handleFileClick">
                <template #side>
                    <BaseSideNavigation
                        :view="view"
                        @handleNavigation="handleNavigation"
                    />
                </template>
            </BaseSideDrawer>
            <AboutPersonalInfo
                v-if="view.personal"
                :lines="fileView.lines"
                :title="fileView.title"
                :isTabVisible="fileView.isShowing"
                @handleClose="handleClose"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { VIEWS, FILES } from "@/utilities/enums";
import {
    ABOUT_ME,
    COLLEGE,
    ARTIFICIAL_INTELLIGENCE,
    BLOCKCHAIN,
} from "@/utilities/data";
import type { ILine } from "@/utilities/interfaces";
useHead({
    title: "Charlene Tormes | About",
});

const fileView: { lines: ILine[]; title: string; isShowing: boolean } =
    reactive({
        lines: [],
        title: "",
        isShowing: false,
    });

const view = reactive({
    professional: false,
    personal: true,
    hobbies: false,
});

const resetView = () => {
    view.professional = false;
    view.personal = false;
    view.hobbies = false;
};

const handleNavigation = (
    newView: VIEWS.PROFESSIONAL | VIEWS.PERSONAL | VIEWS.HOBBIES
) => {
    resetView();
    view[newView] = true;
};

const handleFileClick = (file: string) => {
    fileView.isShowing = true;
    switch (file) {
        case FILES.ABOUT_ME:
            fileView.lines = ABOUT_ME;
            fileView.title = FILES.ABOUT_ME;
            break;
        case FILES.ARTIFICIAL_INTELLIGENCE:
            fileView.lines = ARTIFICIAL_INTELLIGENCE;
            fileView.title = FILES.ARTIFICIAL_INTELLIGENCE;
            break;
        case FILES.BLOCKCHAIN:
            fileView.lines = ABOUT_ME;
            fileView.title = FILES.BLOCKCHAIN;
            break;
        case FILES.COLLEGE:
            fileView.lines = COLLEGE;
            fileView.title = FILES.COLLEGE;
            break;
    }
};

const handleClose = () => {
    fileView.lines = [];
    fileView.title = "";
    fileView.isShowing = false;
};
</script>

<style scoped>
.page-container {
    height: calc(100vh - 115px);
}
</style>
