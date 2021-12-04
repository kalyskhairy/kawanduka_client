<template lang="html">
    <nuxt-link
        :to="`/product/${product.id}`"
        class="ps-product__title"
    >
        {{ product.name && product.name }}
    </nuxt-link>
</template>

<script>
export default {
    name: 'ModuleProductTitle',
    props: {
        product: {
            type: Object,
            default: () => {
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
