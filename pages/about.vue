<template>
    <div class="page-container w-full bg-primary-200">
        <div class="w-full h-full flex">
            <BaseSideDrawer
                @handleFileClick="handleFileClick"
                :sections="fileView.navigation"
                :title="view.title"
            >
                <template #side>
                    <BaseSideNavigation
                        :view="view"
                        @handleNavigation="handleNavigation"
                    />
                </template>
            </BaseSideDrawer>
            <AboutInfo
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
    PERSONAL_INFO,
    PROFESSIONAL_INFO,
    HOBBIES_INFO,
    ABOUT_ME,
    COLLEGE,
    ARTIFICIAL_INTELLIGENCE,
    BLOCKCHAIN,
    CODE_AXIS,
    ALLIANCE,
    LEXMARK,
    UNAWA,
    UPWORK,
    INSPIREX,
    PPC,
    MAVC,
    ANDROID_2018,
    ANDROID_2017,
    PTF,
    AWS_CLOUD,
    SCRUM_MASTER,
    TOPCIT,
    VALORANT,
    PS5,
    SWITCH,
    TABLE_TENNIS,
    FUNKO_POP,
} from "@/utilities/data";
import type { ILine, ISection } from "@/utilities/interfaces";
useHead({
    title: "Charlene Tormes | About",
});

const fileView: {
    lines: ILine[];
    title: string;
    isShowing: boolean;
    navigation: ISection[];
} = reactive({
    lines: CODE_AXIS,
    title: "code-axis",
    isShowing: false,
    navigation: PROFESSIONAL_INFO,
});

const view = reactive({
    professional: true,
    personal: false,
    hobbies: false,
    title: "professional-info",
});

const resetView = () => {
    view.professional = false;
    view.personal = false;
    view.hobbies = false;
};

const resetFileView = () => {
    fileView.lines = [];
    fileView.title = "code-axis";
    fileView.isShowing = false;
};

const handleNavigation = (
    newView: VIEWS.PROFESSIONAL | VIEWS.PERSONAL | VIEWS.HOBBIES
) => {
    resetFileView();
    resetView();
    view[newView] = true;

    switch (newView) {
        case VIEWS.PROFESSIONAL:
            view.title = "professional-info";
            fileView.navigation = PROFESSIONAL_INFO;
            break;
        case VIEWS.PERSONAL:
            view.title = "personal-info";
            fileView.navigation = PERSONAL_INFO;
            break;
        case VIEWS.HOBBIES:
            view.title = "hobbies-info";
            fileView.navigation = HOBBIES_INFO;
            break;
    }
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
            fileView.lines = BLOCKCHAIN;
            fileView.title = FILES.BLOCKCHAIN;
            break;
        case FILES.COLLEGE:
            fileView.lines = COLLEGE;
            fileView.title = FILES.COLLEGE;
            break;
        case FILES.CODE_AXIS:
            fileView.lines = CODE_AXIS;
            fileView.title = FILES.CODE_AXIS;
            break;
        case FILES.ALLIANCE:
            fileView.lines = ALLIANCE;
            fileView.title = FILES.ALLIANCE;
            break;
        case FILES.LEXMARK:
            fileView.lines = LEXMARK;
            fileView.title = FILES.LEXMARK;
            break;
        case FILES.UNAWA:
            fileView.lines = UNAWA;
            fileView.title = FILES.UNAWA;
            break;
        case FILES.UPWORK:
            fileView.lines = UPWORK;
            fileView.title = FILES.UPWORK;
            break;
        case FILES.INSPIREX:
            fileView.lines = INSPIREX;
            fileView.title = FILES.INSPIREX;
            break;
        case FILES.PPC:
            fileView.lines = PPC;
            fileView.title = FILES.PPC;
            break;
        case FILES.MAVC:
            fileView.lines = MAVC;
            fileView.title = FILES.MAVC;
            break;
        case FILES.ANDROID_MASTERS_18:
            fileView.lines = ANDROID_2018;
            fileView.title = FILES.ANDROID_MASTERS_18;
            break;
        case FILES.ANDROID_MASTERS_17:
            fileView.lines = ANDROID_2017;
            fileView.title = FILES.ANDROID_MASTERS_17;
        case FILES.PTF:
            fileView.lines = PTF;
            fileView.title = FILES.PTF;
            break;
        case FILES.AWS_CLOUD:
            fileView.lines = AWS_CLOUD;
            fileView.title = FILES.AWS_CLOUD;
            break;
        case FILES.SCRUM_MASTER:
            fileView.lines = SCRUM_MASTER;
            fileView.title = FILES.SCRUM_MASTER;
            break;
        case FILES.TOPCIT:
            fileView.lines = TOPCIT;
            fileView.title = FILES.TOPCIT;
            break;
        case FILES.VALORANT:
            fileView.lines = VALORANT;
            fileView.title = FILES.VALORANT;
            break;
        case FILES.PS5:
            fileView.lines = PS5;
            fileView.title = FILES.PS5;
            break;
        case FILES.SWITCH:
            fileView.lines = SWITCH;
            fileView.title = FILES.SWITCH;
            break;
        case FILES.PINGPONG:
            fileView.lines = TABLE_TENNIS;
            fileView.title = FILES.PINGPONG;
            break;
        case FILES.FUNKO:
            fileView.lines = FUNKO_POP;
            fileView.title = FILES.FUNKO;
            break;
        default:
            fileView.isShowing = false;
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
