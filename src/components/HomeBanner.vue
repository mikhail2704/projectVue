<template>
    <section class="banner center">
        <div class="banner-box">
            <img src="../assets/Banner_empty.svg" alt="living-room" class="banner__image">
            <div class="banner__text">
                <h2 class="banner__heading">Let Your Home Be Unique</h2>
                <p class="banner__paragraph">There are many variations of the passages of lorem Ipsum fromavailable,
                    majority.</p>
                <button class="banner__button"><a href="#" class="banner__button-link">Get Started</a><svg
                        class="banner__button-svg" width="19" height="17" viewBox="0 0 19 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'WebsiteInternoVueSliHomeBanner',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.banner {
    margin-top: 57px;

    &-box {
        position: relative;
    }

    &__text {
        position: absolute;
        max-width: 434px;
        top: 208px;
        left: 52px;
    }

    &__heading {
        margin-bottom: 18px;
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 65px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__paragraph {
        margin-bottom: 21px;
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__button {
        display: flex;
        padding: 23px 47px 24px 48px;
        flex-direction: row;
        align-items: center;
        gap: 7px;
        border: none;
        border-radius: 18px;
        background: #292f36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        transition: 0.3s;

        &:hover {
            background: #cda274;
        }

        &:hover .banner__button-svg path {
            stroke: #292f36;
        }
    }

    &__button-link {
        color: #fff;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 1.25px;
    }
}
</style>