<template>
    <div class="round-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'RoundButton70x70',
}
</script>

<style lang="scss" scoped>
// .round-button:hover {
//     background: #f4f0ec;
// }

.round-button:hover circle {
    fill: #f5e8dc;
}
</style>