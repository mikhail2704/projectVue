<template>
    <section class="counter center">
        <div class="counter__content center">
            <div class="counter__content_item">
                <p class="counter__content_item-number">
                    12
                </p>
                <p class="counter__content_item-text">
                    Years Of Experiance
                </p>
            </div>
            <div class="counter__content_line"></div>
            <div class="counter__content_item">
                <p class="counter__content_item-number">
                    85
                </p>
                <p class="counter__content_item-text">
                    Success Project
                </p>
            </div>
            <div class="counter__content_line counter__content_line-middle"></div>
            <div class="counter__content_item">
                <p class="counter__content_item-number">
                    15
                </p>
                <p class="counter__content_item-text">
                    Active Project
                </p>
            </div>
            <div class="counter__content_line counter__content_line-right"></div>
            <div class="counter__content_item">
                <p class="counter__content_item-number">
                    95
                </p>
                <p class="counter__content_item-text">
                    Happy Customers
                </p>
            </div>
            <!-- <div class="counter__content_line" style="border-left: 3px solid red; padding-left:10px"></div> -->
        </div>
    </section>
</template>

<script>
export default {
    name: 'WebsiteInternoVueSliHomeCounter',

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

<style lang="scss" scoped>
.counter {
    margin-bottom: 96px;
    background-color: #F4F0EC;

    &__content {
        display: flex;
        flex-direction: row;
        padding-top: 161px;
        padding-bottom: 151px;
        justify-content: center;
        align-items: center;

        &_item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 15px;

            &-number {
                margin-top: -10px;
                text-align: center;
                color: #cda274;
                font-family: DM Serif Display;
                font-size: 85px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 1.7px;
            }

            &-text {
                color: #4d5053;
                font-family: Jost;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.22px;
            }
        }

        &_line {
            border-left: 1px solid #CDA274;
            height: 130px;
            margin-right: 76px;
            margin-left: 54px;

            &-middle {
                margin-left: 76px;
            }

            &-right {
                margin-left: 84px;
            }
        }
    }
}
</style>