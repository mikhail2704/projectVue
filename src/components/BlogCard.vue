<template>
    <div class="blog__item">
        <img :src="text.src" :alt="text.alt" :class="text.class">
        <router-link to="/blog-details" class="blog__item_tag">{{ text.tag }}</router-link>
        <p class="blog__item_text">
            {{ text.title }}
        </p>
        <div class="blog__item_content">
            <div class="blog__item_content-date">{{ text.date }}</div>
            <router-link to="/blog-details" class="blog__item_content-elem">
                <!-- <RoundButton52x52 :text="fill" /> -->
                <!-- <RoundButton52x52 :fill="'#F4F0EC'" /> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script>
// import RoundButton52x52 from '@/components/RoundButton52x52.vue';
import { resolveDirective } from 'vue';

export default {
    name: 'BlogCard',

    props: {
        text: Object,
        // fill: Object,
    },

    // components: { RoundButton52x52 }
}
</script>

<style lang="scss" scoped>
.blog__item {
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

        &-elem {
            width: 52px;
            height: 52px;
            flex-shrink: 0;
        }
    }

    // circle {
    //     fill: red;
    // }

    &:hover {
        background: #f4f0ec;
    }

    &:hover circle {
        fill: #FFF;
    }
}
</style>