<template>
    <main class="project">
        <section class="intro">
            <IntroText class="intro__title" v-for="item in projectIntro" :text="item" :key="item.id" />
        </section>
        <section class="project__content center">
            <div class="project__content_buttons">
                <div class="project__buttons">
                    <Button class="project__buttons_item" v-for="item in buttons" :text="item" :key="item.id"
                        @click="projectActive" />
                </div>
            </div>
            <div class="project__cards">
                <ProjectCard v-for="item in projectCards" :key="item.id" :text="item" :size-button="70" />
            </div>
            <div class="pages">
                <!-- <div class="pagination__left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none"
                        transform="rotate(180)">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div> -->
                <Pagination class="pagination" :list="paginationData" />
                <!-- <div class="pagination__right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div> -->
            </div>
        </section>
    </main>
</template>

<script>

import IntroText from '@/components/IntroText.vue';
import Button from '@/components/Button.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import Pagination from '@/components/Pagination.vue';


export default {
    name: 'Project',

    components: {
        IntroText,
        Button,
        ProjectCard,
        Pagination
    },

    data() {
        return {
            projectIntro: [
                {
                    id: "projectText",
                    title: "Our Project",
                    subheadLeft: "Home",
                    linkLeft: "/",
                    subheadLine: " / ",
                    subheadRight: "Project",
                    linkRight: "/project"
                }
            ],
            paginationData: [
                {
                    id: "page1",
                    number: "01",
                },
                {
                    id: "page2",
                    number: "02",
                },
                {
                    id: "page3",
                    number: "03",
                },
            ],

            buttons: [
                {
                    id: "bathroom",
                    name: "Bathroom"
                },
                {
                    id: "bedroom",
                    name: "Bed Room"
                },
                {
                    id: "kitchan",
                    name: "Kitchan"
                },
                {
                    id: "livingroom",
                    name: "Living Area"
                }
            ],
            projectCards: [
                {
                    id: "product-card1",
                    card_id: "bedroom",
                    src: require("../assets/project-card-1.png"),
                    alt: "image",
                    title: "Minimal Bedroom",
                    subtitleLeft: "Decor",
                    subtitleLine: " / ",
                    subtitleRight: "Artchitecture",
                    class: "project__card_image"
                },
                {
                    id: "product-card2",
                    card_id: "bedroom",
                    src: require("../assets/project-card-2.png"),
                    alt: "image",
                    title: "Minimal Bedroom",
                    subtitleLeft: "Decor",
                    subtitleLine: " / ",
                    subtitleRight: "Artchitecture",
                    class: "project__card_image"
                },
                {
                    id: "product-card3",
                    card_id: "bedroom",
                    src: require("../assets/project-card-3.png"),
                    alt: "image",
                    title: "Classic Minimal Bedroom",
                    subtitleLeft: "Decor",
                    subtitleLine: " / ",
                    subtitleRight: "Artchitecture",
                    class: "project__card_image"
                },
                {
                    id: "product-card4",
                    card_id: "bedroom",
                    src: require("../assets/project-card-4.png"),
                    alt: "image",
                    title: "Modern Bedroom",
                    subtitleLeft: "Decor",
                    subtitleLine: " / ",
                    subtitleRight: "Artchitecture",
                    class: "project__card_image"
                },
                {
                    id: "product-card5",
                    card_id: "bedroom",
                    src: require("../assets/project-card-5.png"),
                    alt: "image",
                    title: "Minimal Bedroom table",
                    subtitleLeft: "Decor",
                    subtitleLine: " / ",
                    subtitleRight: "Artchitecture",
                    class: "project__card_image"
                },
                {
                    id: "product-card6",
                    card_id: "bedroom",
                    src: require("../assets/project-card-6.png"),
                    alt: "image",
                    title: "System Table",
                    subtitleLeft: "Decor",
                    subtitleLine: " / ",
                    subtitleRight: "Artchitecture",
                    class: "project__card_image"
                },
                {
                    id: "product-card7",
                    card_id: "bedroom",
                    src: require("../assets/project-card-7.png"),
                    alt: "image",
                    title: "Modern Medroom",
                    subtitleLeft: "Decor",
                    subtitleLine: " / ",
                    subtitleRight: "Artchitecture",
                    class: "project__card_image"
                },
                {
                    id: "product-card8",
                    card_id: "bedroom",
                    src: require("../assets/project-card-8.png"),
                    alt: "image",
                    title: "Modern Bedroom",
                    subtitleLeft: "Decor",
                    subtitleLine: " / ",
                    subtitleRight: "Artchitecture",
                    class: "project__card_image"
                },
            ],
        };
    },

    methods: {
        projectActive(e) {
            if (document.querySelector(".project__buttons_item-active") !== null) {
                document.querySelector(".project__buttons_item-active").classList.remove("project__buttons_item-active");
            }
            e.target.classList.add("project__buttons_item-active");

        }
    }
}
</script>

<style lang="scss" scoped>
.intro {
    margin-top: 45px;
    // background-image: url(../assets/project_intro-picture.png);
    background: url(../assets/project_intro-picture.png), lightgray 50% / cover no-repeat;
    // background-size: cover;
    // background-repeat: no-repeat;
    display: flex;
    justify-content: center;

    &__title {
        margin-top: 179px;
        display: flex;
        width: 504px;
        padding: 41px 125px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        border-radius: 37px 37px 0px 0px;
        background: #FFF;
    }
}

.project__content {
    margin-top: 200px;
    display: grid;
    gap: 61px;

    &_buttons {
        display: flex;
        justify-content: center;
    }
}

.project__buttons {
    display: flex;
    width: 880px;
    // flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: space-between;

    border-radius: 18px;
    border: 1px solid #CDA274;
}

.project__cards {
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);
    // column-gap: 30px;
    // row-gap: 36px;
    height: 3260px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;
}

.pages {
    display: flex;
    gap: 100px;
    justify-content: center;
    margin-bottom: 200px;
}
</style>