<template>
    <header class="header center">
        <nav class="logo">
            <img src="../assets/Logo.svg" alt="logo" class="logo__img">
            <router-link to="/" class="logo__text">Interno</router-link>
            <!-- <a href="./index.html" class="logo__text">Interno</a> -->
        </nav>
        <nav class="menu">
            <router-link to="/" class="menu__home">Home</router-link>
            <!-- <a href="./index.html" class="menu__home">Home</a> -->
            <router-link to="/project" class="menu__project">Project</router-link>
            <!-- <a href="#" class="menu__project">Project</a> -->
            <router-link to="/blog" class="menu__blog">Blog</router-link>
            <!-- <a href="./pages/blog.html" class="menu__blog">Blog</a> -->
        </nav>
    </header>
</template>

<script>
export default {
    name: 'WebsiteInternoVueSliHeader',

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
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 53px;
}

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

.menu {
    display: flex;
    justify-content: space-between;
    width: 243px;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 25px */
}
</style>

<!-- <template>
    <header class="header center">
        <Logo />
        <nav class="header__navigation">
            <Navigation />
        </nav>
    </header>
</template>

<script>
import Navigation from "./Navigation.vue";
import Logo from "./Logo.vue";

export default {
    name: "Header",
    components: {
        Navigation,
        Logo,
    },
    props: {},
};
</script>

<style scoped lang="scss">
.navlist {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 48px;
}

.header__navigation :deep(.navlist__item-link) {
    color: #292f36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    transition: 0.3s;

    &:hover {
        color: #cda274;
    }
}
</style> -->