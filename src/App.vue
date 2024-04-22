<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

  <!-- <Head /> -->
  <!-- <Header />
  <HomeMain />
  <BlogMain />
  <BlogDetailsMain />
  <Project />
  <ProjectDetailsMain />
  <Footer /> -->
  <Header />
  <router-view />
  <Footer />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Head from './components/Head.vue';
import Header from '@/components/Header.vue';
// import HomeMain from '@/views/HomeMain.vue';
// import BlogMain from '@/views/BlogMain.vue';
// import BlogDetailsMain from '@/views/BlogDetailsMain.vue';
// import Project from '@/views/Project.vue';
import Footer from '@/components/Footer.vue';
// import ProjectDetailsMain from '@/views/ProjectDetailsMain.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Head,
    Header,
    // HomeMain,
    // BlogMain,
    // BlogDetailsMain,
    // Project,
    Footer,
    // ProjectDetailsMain
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'DM Serif Display', serif;
  font-family: 'Jost', sans-serif;
  background-color: #fff;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>
