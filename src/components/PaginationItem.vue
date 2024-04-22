<template>
    <div class="page">
        <svg class="page__item" xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <text x="18" y="32" fill="grey">{{ text.number }}</text>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'PaginationItem',
    props: {
        text: Object,
    }
}
</script>