<template>
    <main class="project-details center">
        <section class="project-details__intro">
            <img src="../assets/project-details-intro.png" alt="photo">
        </section>
        <section class="project-details__content">
            <div class="project-details__info">
                <div class="project-details__info_heading">
                    {{ heading }}
                </div>
                <div class="project-details__info_text">
                    {{ text1 }}
                </div>
                <br>
                <div class="project-details__info_text">
                    {{ text2 }}
                </div>
            </div>
            <section class="slider center">
                <div class="slider__content">
                    <div class="slider-wrapper">
                        <Slider :images="sliderImages" />
                    </div>
                </div>
            </section>
        </section>
    </main>
</template>

<script>
import Slider from '@/components/Slider.vue';
import { mapState } from 'vuex'

export default {
    name: 'ProjectDetailsMain',
    components: {
        Slider,
    },
    props: {
    },

    data() {
        return {
            sliderImages: [
                { id: "slider-image_1", src: require("../assets/slider.jpg") },
                { id: "slider-image_2", src: require("../assets/slider2.jpg") },
                { id: "slider-image_3", src: require("../assets/slider3.jpg") },
            ],
            sliderCounter: 0,
        };
    },
    methods: {
    },
    computed: {
        ...mapState(["heading", "text1", "text2"]),
    },
}
</script>

<style scoped lang="scss">
.project-details {

    &__content {
        display: grid;
        justify-items: center;
        margin-top: 200px;
        margin-bottom: 100px;
    }

    &__info {
        margin-bottom: 100px;
        display: flex;
        flex-direction: column;
        max-width: 658px;

        &_heading {
            margin-bottom: 11px;
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 62.5px */
            letter-spacing: 1px;
        }

        &_text {
            color: #4d5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
        }
    }
}

.slider {

    &__content {
        width: 1201px;
        height: 799px;
        flex-shrink: 0;

        max-width: 1201px;
        overflow: hidden;
        border-radius: 70px;
        transition: 0.5s;
    }

    &-wrapper {
        display: flex;
        flex-direction: row;
        gap: 25px;
        transition: all 1s;
    }
}
</style>