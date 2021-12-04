<template lang="html">
    <p
        v-if="product.is_sale === true"
        class="ps-product__price sale"
    >
        {{ $helper.convertCurrency(product.price) }}
        <del class="ml-2"> {{ $helper.convertCurrency(product.price) }}</del>
    </p>
    <p v-else class="ps-product__price">{{ $helper.convertCurrency(product.price) }}</p>
</template>

<script>
export default {
name: "ModuleProductPrice",
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
