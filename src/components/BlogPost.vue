<template>
    <section class="blog-post center">
        <h2 class="blog-post__title">Latest Post</h2>
        <div class="blog-post__latest-post">
            <div class="blog-post__latest-post-subbox">
                <img class="blog-post__latest-post-image" src="../assets/Blog_Latest_Post.svg" alt="kitchen">
                <article class="blog-post__latest-post-text">
                    <h3 class="blog-post__latest-post-head">Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p class="blog-post__latest-post-prgth blog-post__latest-post-prgth_1">Lorem ipsum dolor sit
                        amet, adipiscing Aliquam eu sem
                        vitae turpis dignissim maximus.posuere in.Contrary to popular
                        belief.
                    </p>
                    <p class="blog-post__latest-post-prgth blog-post__latest-post-prgth_2">Lorem Ipsum is not simply
                        random text. It has roots in a
                        piece of classica.</p>
                    <div class="blog__data-arrow-box blog-post__data-arrow-box">
                        <p class="blog__date">26 December,2022</p>
                        <a href="#" class="blog__arrowbox">
                            <!-- <RoundButton52x52 /> -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                                <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
// import RoundButton52x52 from '@/components/RoundButton52x52.vue';

export default {
    name: 'BlogPost',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    // components: { RoundButton52x52 }
};
</script>

<style lang="scss" scoped>
.blog-post {
    padding-top: 202px;
    padding-bottom: 149px;
    display: flex;
    flex-direction: column;
    gap: 27px;

    &__title {
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__latest-post {
        padding: 22px;
        border-radius: 62px;
        border: 1px solid #e7e7e7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        transition: 0.3s;

        &:hover {
            background: #f4f0ec;
        }

        &:hover circle {
            fill: white;
        }

        &-subbox {
            display: flex;
            flex-direction: row;
            gap: 64px;
        }

        &-image {
            border-radius: 48px;
        }

        &-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: 16px;
        }

        &-head {
            max-width: 463px;
            margin-bottom: 22px;
            color: #292f36;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
        }

        &-prgth {
            max-width: 482px;
            color: #4d5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;

            &_1 {
                margin-bottom: 34px;
            }

            &_2 {
                margin-bottom: 42px;
            }
        }
    }

    &__data-arrow-box {
        display: flex;
        width: 489px;
        align-items: center;
        gap: 214px;
    }
}

.blog__date {
    display: flex;
    width: 223px;
    height: 33px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}
</style>