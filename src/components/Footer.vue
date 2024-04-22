<template>
    <footer class="footer center">
        <div class="footer__main">
            <nav class="logo">
                <img src="../assets/Logo.svg" alt="logo" class="logo__img">
                <router-link to="/" class="logo__text">Interno</router-link>
            </nav>
            <p class="footer__main_text">
                It is a long established fact that a reader will be distracted lookings.
            </p>
            <div class="footer__main_links">
                <a href="#" class="footer__main_link">
                    <img src="../assets/link1.svg" alt="link">
                </a>
                <a href="#" class="footer__main_link">
                    <img src="../assets/link2.svg" alt="link">
                </a>
            </div>
        </div>
        <div class="footer__pages">
            <p class="footer__pages_title">
                Pages
            </p>
            <router-link to="/" class="footer__pages_subtitle">
                Home
            </router-link>
            <router-link to="/project" class="footer__pages_subtitle">
                Project
            </router-link>
            <router-link to="/blog" class="footer__pages_subtitle">
                Blog
            </router-link>
        </div>
        <div class="footer__empty"></div>
        <div class="footer__contact">
            <p class="footer__contact_title">Contact</p>
            <p class="footer__contact_address">
                55 East Birchwood Ave. Brooklyn, New York 11201
            </p>
            <p class="footer__contact_mail">
                contact@interno.com
            </p>
            <p class="footer__contact_phone">
                (123) 456 - 7890
            </p>
        </div>
    </footer>
</template>

<script>
// import Header from './Header.vue';
export default {
    // name: 'WebsiteInternoVueSliFooter',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        // components: {
        //     Header
        // }

    },
};
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    &__text {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 50px */
    }
}

.footer {
    display: flex;
    flex-direction: row;
    gap: 101px;
    margin-bottom: 134px;

    &__main {

        &_text {
            width: 393px;

            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
            margin-top: 18px;
            margin-bottom: 31px;
        }

        &_links {
            display: flex;
            width: 225px;
            align-items: center;
            gap: 54px;
        }
    }

    &__pages {
        display: flex;
        width: 125px;
        flex-direction: column;
        align-items: flex-start;
        flex-shrink: 0;

        &_title {
            margin-bottom: 9px;
            color: #292f36;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
        }

        &_subtitle {
            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 300%;
            /* 66px */
            letter-spacing: 0.22px;
        }
    }

    &__empty {
        width: 120px;
        height: 66px;
    }

    &__contact {
        display: flex;
        width: 258px;
        flex-direction: column;
        align-items: flex-start;
        gap: 26px;
        flex-shrink: 0;

        &_title {
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 31.25px */
        }

        &_address,
        &_phone {
            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
        }

        &_mail {
            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 300%;
            letter-spacing: 0.22px;
        }
    }
}
</style>