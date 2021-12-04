<template lang="html">
    <span class="ps-rating">
        <i class="fa" :class="star <= stars ? 'fa-star' : 'fa-star-o'" v-for="star in 5" :key="star"></i>
    </span>
</template>

<script>
export default {
    name: 'Rating',
    props: {
        stars: {
            type : Number,
            default : 0
        }
    }
};
</script>

<style lang="scss" scoped></style>
