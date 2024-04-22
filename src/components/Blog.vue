<template>
    <section class="blog center">
        <h2 class="blog__header">Articles & News</h2>
        <div class="blog__items" id="cardbox-container">
            <div class="blog__item" v-for="article in articlesData" :key="article.id">
                <img :src="article.src" :alt="article.alt" class="blog__item_img">
                <h3 class="blog__item_text">{{ article.title }}</h3>
                <div class="blog__item_content">
                    <p class="blog__item_content-date">{{ article.date }}</p>
                    <router-link to="/blog-details" class="blog__item_content-elem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
                <a href="#" class="blog__item_tag">{{ article.button }}</a>
            </div>
        </div>
        <div class="articles__pagination">
            <span class="articles__pagination-item">01</span>
            <span class="articles__pagination-item">02</span>
            <span class="articles__pagination-item">03</span>
            <span class="articles__pagination-item"><svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Blog',

    data() {
        return {
            articlesData: [
                {
                    id: 1,
                    src: require('../assets/Image_blog1.svg'),
                    alt: 'interior',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    button: 'Kitchan Design'
                },
                {
                    id: 2,
                    src: require('../assets/Image_blog2.svg'),
                    alt: 'interior',
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022',
                    button: 'Living Design'
                },
                {
                    id: 3,
                    src: require('../assets/Image_blog3.svg'),
                    alt: 'interior',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    button: 'Interior Design'
                },
                {
                    id: 4,
                    src: require('../assets/Image_blog4.svg'),
                    alt: 'interior',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    button: 'Kitchan Design'
                },
                {
                    id: 5,
                    src: require('../assets/Image_blog5.svg'),
                    alt: 'interior',
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022',
                    button: 'Living Design'
                },
                {
                    id: 6,
                    src: require('../assets/Image_blog6.svg'),
                    alt: 'interior',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    button: 'Interior Design'
                }
            ]

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.blog {
    margin-top: 0px;



    &__header {
        margin-bottom: 30px;
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
    }

    &__items {
        display: flex;
        flex-direction: row;
        gap: 25px;
        flex-wrap: wrap;
    }

    &__item {
        position: relative;
        padding: 20px;
        border-radius: 62px;
        border: 1px solid #e7e7e7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        transition: 0.3s;

        &_img {
            margin-bottom: 21px;
        }

        &_tag {
            position: absolute;
            width: 124px;
            top: 247px;
            left: 40px;
            color: #4d5053;
            font-family: Jost;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.16px;
            background-color: #fff;
            border-radius: 8px 8px 8px 0px;
            padding: 7px 9px 10px 11px;
            transition: 0.3s;
        }

        &_text {
            display: flex;
            width: 305px;
            height: 70px;
            flex-direction: column;
            justify-content: center;

            color: #292F36;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 31.25px */
            letter-spacing: 0.5px;
            margin-bottom: 30px;
        }

        &_content {
            display: flex;
            width: 340px;
            align-items: center;
            gap: 65px;

            &-date {
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
        }

        &:hover {
            background: #f4f0ec;
        }

        &:hover circle {
            fill: #fff;
        }
    }
}

.articles__pagination {
    padding-top: 19px;
    padding-bottom: 200px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;

    &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 53px;
        height: 53px;
        border: 1px solid #cda274;
        border-radius: 50%;
        color: #292f36;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        text-transform: capitalize;

        &:first-child {
            background-color: #f4f0ec;
            border: none;
        }
    }
}
</style>