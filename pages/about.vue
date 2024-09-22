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
                :testimonial="fileView.testimonial"
                :snippet="fileView.snippet"
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
    TESTIMONIALS,
    SNIPPETS,
} from "@/utilities/data";
import type {
    ILine,
    ISection,
    ITestimonial,
    ISnippet,
} from "@/utilities/interfaces";
useHead({
    title: "Charlene Tormes | About",
});

const fileView: {
    lines: ILine[] | null;
    title: string | null;
    isShowing: boolean;
    navigation: ISection[];
    testimonial: ITestimonial | null;
    snippet: ISnippet | null;
} = reactive({
    lines: null,
    title: null,
    isShowing: false,
    navigation: PROFESSIONAL_INFO,
    testimonial: null,
    snippet: null,
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
    fileView.snippet = null;
    fileView.testimonial = null;
    switch (file) {
        case FILES.ABOUT_ME:
            fileView.lines = ABOUT_ME;
            fileView.title = FILES.ABOUT_ME;
            fileView.snippet = SNIPPETS[0];
            break;
        case FILES.ARTIFICIAL_INTELLIGENCE:
            fileView.lines = ARTIFICIAL_INTELLIGENCE;
            fileView.title = FILES.ARTIFICIAL_INTELLIGENCE;
            fileView.snippet = SNIPPETS[1];
            break;
        case FILES.BLOCKCHAIN:
            fileView.lines = BLOCKCHAIN;
            fileView.title = FILES.BLOCKCHAIN;
            fileView.snippet = SNIPPETS[2];
            break;
        case FILES.COLLEGE:
            fileView.lines = COLLEGE;
            fileView.title = FILES.COLLEGE;
            fileView.snippet = SNIPPETS[0];
            break;
        case FILES.CODE_AXIS:
            fileView.lines = CODE_AXIS;
            fileView.title = FILES.CODE_AXIS;
            fileView.snippet = SNIPPETS[1];
            break;
        case FILES.ALLIANCE:
            fileView.lines = ALLIANCE;
            fileView.title = FILES.ALLIANCE;
            fileView.testimonial = TESTIMONIALS[0];
            break;
        case FILES.LEXMARK:
            fileView.lines = LEXMARK;
            fileView.title = FILES.LEXMARK;
            fileView.testimonial = TESTIMONIALS[3];
            break;
        case FILES.UNAWA:
            fileView.lines = UNAWA;
            fileView.title = FILES.UNAWA;
            fileView.testimonial = TESTIMONIALS[2];
            break;
        case FILES.UPWORK:
            fileView.lines = UPWORK;
            fileView.title = FILES.UPWORK;
            fileView.testimonial = TESTIMONIALS[1];
            break;
        case FILES.INSPIREX:
            fileView.lines = INSPIREX;
            fileView.title = FILES.INSPIREX;
            fileView.testimonial = TESTIMONIALS[0];
            break;
        case FILES.PPC:
            fileView.lines = PPC;
            fileView.title = FILES.PPC;
            fileView.testimonial = TESTIMONIALS[1];
            break;
        case FILES.MAVC:
            fileView.lines = MAVC;
            fileView.title = FILES.MAVC;
            fileView.testimonial = TESTIMONIALS[2];
            break;
        case FILES.ANDROID_MASTERS_18:
            fileView.lines = ANDROID_2018;
            fileView.title = FILES.ANDROID_MASTERS_18;
            fileView.testimonial = TESTIMONIALS[3];
            break;
        case FILES.ANDROID_MASTERS_17:
            fileView.lines = ANDROID_2017;
            fileView.title = FILES.ANDROID_MASTERS_17;
            fileView.testimonial = TESTIMONIALS[0];
            break;
        case FILES.PTF:
            fileView.lines = PTF;
            fileView.title = FILES.PTF;
            fileView.testimonial = TESTIMONIALS[1];
            break;
        case FILES.AWS_CLOUD:
            fileView.lines = AWS_CLOUD;
            fileView.title = FILES.AWS_CLOUD;
            fileView.testimonial = TESTIMONIALS[2];
            break;
        case FILES.SCRUM_MASTER:
            fileView.lines = SCRUM_MASTER;
            fileView.title = FILES.SCRUM_MASTER;
            fileView.testimonial = TESTIMONIALS[3];
            break;
        case FILES.TOPCIT:
            fileView.lines = TOPCIT;
            fileView.title = FILES.TOPCIT;
            fileView.testimonial = TESTIMONIALS[0];
            break;
        case FILES.VALORANT:
            fileView.lines = VALORANT;
            fileView.title = FILES.VALORANT;
            fileView.snippet = SNIPPETS[0];
            break;
        case FILES.PS5:
            fileView.lines = PS5;
            fileView.title = FILES.PS5;
            fileView.snippet = SNIPPETS[1];
            break;
        case FILES.SWITCH:
            fileView.lines = SWITCH;
            fileView.title = FILES.SWITCH;
            fileView.snippet = SNIPPETS[2];
            break;
        case FILES.PINGPONG:
            fileView.lines = TABLE_TENNIS;
            fileView.title = FILES.PINGPONG;
            fileView.snippet = SNIPPETS[0];
            break;
        case FILES.FUNKO:
            fileView.lines = FUNKO_POP;
            fileView.title = FILES.FUNKO;
            fileView.snippet = SNIPPETS[1];
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
