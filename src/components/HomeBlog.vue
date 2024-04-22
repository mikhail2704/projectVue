<template>
    <section class="blog center">
        <p class="blog__title">
            Articles & News
        </p>
        <p class="blog__text">
            It is a long established fact that a reader will be distracted by the of readable content of a page when
            lookings at its layouts the points of using.
        </p>
        <div class="blog__items">
            <BlogCard v-for="item in homeBlogData" :key="item.id" :text="item" />
            <!-- <div class="blog__item">
                <img src="../assets/Image_blog1.svg" alt="photo" class="blog__item_img">
                <a href="#" class="blog__item_tag">Kitchan Design</a>
                <p class="blog__item_text">
                    Let’s Get Solution For Building Construction Work
                </p>
                <div class="blog__item_content">
                    <div class="blog__item_content-date">26 December,2022 </div>
                    <a href="pages/blog_details.html" class="blog__item_content-elem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="blog__item">
                <img src="../assets/Image_blog2.svg" alt="photo" class="blog__item_img">
                <a href="#" class="blog__item_tag">Living Design</a>
                <p class="blog__item_text">
                    Low Cost Latest Invented Interior Designing
                    Ideas.
                </p>
                <div class="blog__item_content">
                    <div class="blog__item_content-date">22 December,2022 </div>
                    <a href="pages/blog_details.html" class="blog__item_content-elem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="blog__item">
                <img src="../assets/Image_blog3.svg" alt="photo" class="blog__item_img">
                <a href="#" class="blog__item_tag">Interior Design</a>
                <p class="blog__item_text">
                    Best For Any Office & Business Interior
                    Solution
                </p>
                <div class="blog__item_content">
                    <div class="blog__item_content-date">25 December,2022 </div>
                    <a href="pages/blog_details.html" class="blog__item_content-elem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue';
export default {
    name: 'HomeBlog',

    components: {
        BlogCard,
    },

    mounted() {

    },

    methods: {

    },

    data() {
        return {
            homeBlogData: [
                {
                    id: 1,
                    src: require("../assets/Image_blog1.svg"),
                    alt: 'photo',
                    class: 'blog__item_img',
                    tag: 'Kitchan Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    id: 2,
                    src: require("../assets/Image_blog2.svg"),
                    alt: 'photo',
                    class: 'blog__item_img',
                    tag: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022',
                },
                {
                    id: 3,
                    src: require("../assets/Image_blog3.svg"),
                    alt: 'photo',
                    class: 'blog__item_img',
                    tag: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022 ',
                },
            ]
        };
    },
};
</script>

<style lang="scss" scoped>
.blog {
    margin-bottom: 96px;

    &__title {
        margin-bottom: 10px;
        color: #292f36;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__text {
        margin-bottom: 52px;
        width: 811px;
        margin-left: auto;
        margin-right: auto;
        color: #4d5053;
        text-align: center;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__items {
        display: flex;
        flex-direction: row;
        gap: 25px;
        flex-wrap: wrap;
    }

    // &__item {
    //     position: relative;
    //     padding: 20px;
    //     border-radius: 62px;
    //     border: 1px solid #e7e7e7;
    //     box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    //     transition: 0.3s;

    //     &_img {
    //         margin-bottom: 21px;
    //     }

    //     &_tag {
    //         position: absolute;
    //         width: 124px;
    //         top: 247px;
    //         left: 40px;
    //         color: #4d5053;
    //         font-family: Jost;
    //         font-size: 16px;
    //         font-style: normal;
    //         font-weight: 400;
    //         line-height: 150%;
    //         letter-spacing: 0.16px;
    //         background-color: #fff;
    //         border-radius: 8px 8px 8px 0px;
    //         padding: 7px 9px 10px 11px;
    //         transition: 0.3s;
    //     }

    //     &_text {
    //         display: flex;
    //         width: 305px;
    //         height: 70px;
    //         flex-direction: column;
    //         justify-content: center;

    //         color: #292F36;
    //         font-family: DM Serif Display;
    //         font-size: 25px;
    //         font-style: normal;
    //         font-weight: 400;
    //         line-height: 125%;
    //         /* 31.25px */
    //         letter-spacing: 0.5px;
    //         margin-bottom: 30px;
    //     }

    //     &_content {
    //         display: flex;
    //         width: 340px;
    //         align-items: center;
    //         gap: 65px;

    //         &-date {
    //             display: flex;
    //             width: 223px;
    //             height: 33px;
    //             flex-direction: column;
    //             justify-content: center;
    //             flex-shrink: 0;

    //             color: #4D5053;
    //             font-family: Jost;
    //             font-size: 16px;
    //             font-style: normal;
    //             font-weight: 400;
    //             line-height: 150%;
    //             /* 24px */
    //             letter-spacing: 0.16px;
    //             text-transform: capitalize;
    //         }

    // &-elem {
    //     width: 52px;
    //     height: 52px;
    //     flex-shrink: 0;
    // }
    //     }

    // &:hover {
    //     background: #f4f0ec;
    // }

    // &:hover circle {
    //     fill: #fff;
    // }

    // }
}
</style>