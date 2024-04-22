<template>
    <div>
        <h2 class="intro__heading">{{ text.title }}</h2>
        <div class="intro__subhead">
            <router-link :to="text.linkLeft" class="intro__subhead_item">{{ text.subheadLeft }}</router-link>
            <span class="intro__subhead_line">{{ text.subheadLine }}</span>
            <router-link :to="text.linkRight" class="intro__subhead_item">{{ text.subheadRight }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroText',
    props: {
        text: Object,
    }
}
</script>

<style lang="scss" scoped>
.intro__heading {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */


}

.intro__subhead_item {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.intro__subhead_line {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}
</style>