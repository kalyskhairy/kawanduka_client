<template lang="html">
    <span class="ps-rating">
        <i class="fa" :class="star <= stars ? 'fa-star' : 'fa-star-o'" v-for="star in 5" :key="star"></i>
        <!-- <i class="fa" :class="star ? 'fa-star' : 'fa-star-o'" v-for="star in stars" :key="star"></i> -->
    </span>
</template>

<script>
export default {
    name: 'Rating',
    props: {
        stars: {
            type: Number,
        }
    }
};
</script>

<style lang="scss" scoped></style>
