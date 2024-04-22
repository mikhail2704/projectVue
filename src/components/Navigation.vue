<template>
    <ul class="navlist">
        <li class="navlist__item">
            <router-link to="/" class="navlist__item-link">Home</router-link>
        </li>
        <li class="navlist__item">
            <router-link to="/project" class="navlist__item-link">Project</router-link>
        </li>
        <li class="navlist__item">
            <router-link to="/blog" class="navlist__item-link">Blog</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Navigation",
    props: {},
    data() {
        return {};
    },
};
</script>