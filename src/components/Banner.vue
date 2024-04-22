<template>
    <section class="banner-box">
        <img :src="banner.src" :alt="banner.alt" class="banner__image" />
        <div class="banner__text">
            <h2 class="banner__heading">{{ banner.heading }}</h2>
            <p class="banner__paragraph">
                {{ banner.paragraph }}
            </p>
            <ButtonError class="banner__button">
                <router-link :to="link" class="banner__button-link">{{ buttonText }}</router-link><svg
                    class="banner__button-svg" width="19" height="17" viewBox="0 0 19 17" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
                        stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </ButtonError>
        </div>
    </section>
</template>

<script>
import ButtonError from "@/components/ButtonError.vue";

export default {
    name: "Banner",
    props: {
        banner: Object,
        buttonText: String,
        link: String,
    },
    components: {
        ButtonError,
    },
    data() {
        return {};
    },
};
</script>

<style scoped lang="scss">
.banner__image {
    width: 50%;
    height: 50%;
    flex-shrink: 0;
}

.banner__text {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 43%;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
}

.banner__heading {
    display: flex;
    width: 395px;
    height: 172px;
    flex-direction: column;
    justify-content: center;

    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 312.5px */
}

.banner__paragraph {
    display: flex;
    width: 569px;
    height: 139px;
    flex-direction: column;
    justify-content: center;

    color: #292F36;
    font-family: DM Serif Display;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 52.5px */
    letter-spacing: 0.35px;
}

.banner__button {
    display: flex;
    padding: 25px 47px 24px 48px;
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
}

.banner__button-link {
    color: #fff;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 1.25px;
}

.banner__button:hover .banner__button-svg path {
    transition: 0.3s;
    stroke: #292f36;
}
</style>