<template>
    <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }" :zoom="true" :modules="modules" :slides-per-view="1" :space-between="50" navigation
        :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="item in images">
            <div class="swiper-zoom-container">
                <img :src="item.src" alt="photo">
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/zoom'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

// Import Swiper styles
export default {
    name: 'Slider',
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        images: Array,
    },
    setup() {
        // console.log(image);
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y, Zoom],
        };
    },
}
</script>