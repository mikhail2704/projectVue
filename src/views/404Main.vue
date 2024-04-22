<template>
    <main class="main center">
        <section class="banner-error">
            <Banner v-for="banner in errorBanner" :banner="banner" :buttonText="errorButtonText" :link="link" />
        </section>
    </main>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
    name: "404View",
    components: {
        Banner,
    },
    data() {
        return {
            link: "/",
            errorButtonText: "Back To Home",
            errorBanner: [
                {
                    id: "errorbanner",
                    src: require("../assets/bannererror.jpg"),
                    alt: "destroyed-flat",
                    heading: "404",
                    paragraph: "We are sorry, but the page you requested was not found",
                },
            ],
        };
    },
};
</script>
<style scoped lang="scss">
.banner-error {
    // max-width: 1920px;
    margin: 0 auto;
    // padding-left: 360px;
    padding-top: 45px;
    padding-bottom: 100px;
}

.banner-error :deep(.banner-box) {
    display: flex;
    flex-direction: row-reverse;
    gap: 81px;
}

.banner-error :deep(.banner__text) {
    // padding-top: 272px;
}

.banner-error :deep(.banner__image) {
    border-bottom-left-radius: 37%;
}

// .banner-error :deep(.banner__heading) {
//     display: flex;
//     width: 395px;
//     height: 172px;
//     flex-direction: column;
//     justify-content: center;

//     color: #cda274;
//     font-family: DM Serif Display;
//     font-size: 250px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 125%;
//     /* 312.5px */
// }

// .banner-error :deep(.banner__paragraph) {
//     display: flex;
//     width: 569px;
//     height: 139px;
//     flex-direction: column;
//     justify-content: center;

//     color: #292f36;
//     font-family: DM Serif Display;
//     font-size: 35px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 150%;
//     /* 52.5px */
//     letter-spacing: 0.35px;
// }
</style>