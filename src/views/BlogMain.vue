<template>
    <BlogIntro />
    <BlogPost />
    <Blog />
</template>

<script>
import BlogIntro from '@/components/BlogIntro.vue';
import BlogPost from '@/components/BlogPost.vue';
import Blog from '@/components/Blog.vue';
export default {
    name: 'WebsiteInternoVueSliBlogMain',
    components: {
        BlogIntro,
        BlogPost,
        Blog
    },

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

<style lang="scss" scoped></style>