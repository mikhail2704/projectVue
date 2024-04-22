<template>
    <div class="project-card">
        <img :src="text.src" :alt="text.alt">
        <div class="project-card__content">
            <div class="project-card__content_text">
                <!-- <IntroText v-for="item in text" :key="item.id" :text="item" /> -->
                <p class="project-card__content_text-title">
                    <!-- Minimal Bedroom -->
                    {{ text.title }}
                </p>
                <p class="project-card__content_text-subtitle">
                    <!-- Decor / Artchitecture -->
                    {{ text.subtitleLeft }}
                    {{ text.subtitleLine }}
                    {{ text.subtitleRight }}
                </p>
            </div>
            <router-link to="/project-details">
                <div v-if="sizeButton === 70" class="project-card__content_button">
                    <RoundButton70x70 />
                </div>
                <div v-else class="project-card__content_button">
                    <RoundButton52x52 />
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import IntroText from '@/components/IntroText.vue';
// import RoundButton from './RoundButton.vue';
import RoundButton52x52 from '@/components/RoundButton52x52.vue';
import RoundButton70x70 from '@/components/RoundButton70x70.vue';
export default {
    name: 'ProjectCard',
    components: { IntroText, RoundButton52x52, RoundButton70x70 },
    props: {
        text: Object,
        sizeButton: Number,
    },

    data() {
        return {
            // projectIntro: [
            //     {
            //         id: "projectText",
            //         title: "Our Project",
            //         subheadLeft: "Home",
            //         subheadLine: " / ",
            //         subheadRight: "Project"
            //     }
            // ],
        };
    },
}
</script>

<style lang="scss" scoped>
.project-card {
    // display: grid;
    // gap: 24px;
    display: flex;
    // width: 585px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    &__content {
        display: flex;
        // gap: 298px;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        &_text {
            width: 217px;

            &-title {
                color: #292F36;
                font-family: DM Serif Display;
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                /* 31.25px */
                letter-spacing: 0.5px;
            }

            &-subtitle {
                color: #4D5053;
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

    // &:hover {
    //     background: #f4f0ec;
    // }

    // &:hover circle {
    //     fill: #FFF;
    // }
}
</style>