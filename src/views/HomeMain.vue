<template>
    <HomeBanner />
    <HomeProject />
    <HomeCounter />
    <HomeBlog />
</template>

<script>
import HomeBanner from '@/components/HomeBanner.vue';
import HomeProject from '@/components/HomeProject.vue';
import HomeCounter from '@/components/HomeCounter.vue';
import HomeBlog from '@/components/HomeBlog.vue';
export default {
    name: 'WebsiteInternoVueSliHomeMain',

    mounted() {
    },
    methods: {},
    components: {
        HomeBanner,
        HomeProject,
        HomeCounter,
        HomeBlog
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>