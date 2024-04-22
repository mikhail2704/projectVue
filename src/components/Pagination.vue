<template>
    <!-- Pagination -->
    <div class="pagination">
        <!-- <div class="pagination__left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none"
                        transform="rotate(180)">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div> -->
        <PaginationItem v-for="item in list" :text="item" />
        <div class="pagination__right">
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
        <!-- <svg class="page__item" xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <text x="18" y="32" fill="grey">{{ text.number }}</text>
        </svg> -->
    </div>
</template>

<script>
import PaginationItem from '@/components/PaginationItem.vue';

export default {
    name: 'Pagination',
    props: {
        list: Array,
    },
    data() {
        return {};
    },
    components: { PaginationItem }
}
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    gap: 20px;
    justify-content: center;
}
</style>