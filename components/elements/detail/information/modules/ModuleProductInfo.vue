<template lang="html">
    <div>
        <h1>{{ product.title }}</h1>
        <div class="ps-product__meta">
            <p>
                Brand:
                <nuxt-link to="/shop">
                    <a class="ml-2 text-capitalize">
                        {{ product.vendor }}
                    </a>
                </nuxt-link>
            </p>
            <div class="ps-product__rating">
                <rating :stars="product.averageStar" />
                <span>(1 review)</span>
            </div>
        </div>
        <h4 v-if="product.is_sale === true" class="ps-product__price sale">
            <!-- <del class="mr-2"> {{ $helper.convertCurrency(product.sale_price) }}</del> -->
            <del class="mr-2"> {{ $helper.convertCurrency(product.price) }}</del>
            <!-- {{ $helper.convertCurrency(product.sale_price) }} -->
            {{ $helper.convertCurrency(product.price) }}
        </h4>
        <h4 v-else class="ps-product__price">
            <!-- {{ $helper.convertCurrency(product.sale_price) }} -->
            {{ $helper.convertCurrency(product.price) }}
        </h4>
    </div>
</template>

<script>
import Rating from '~/components/elements/Rating';
export default {
    name: 'ModuleProductInfo',
    components: { Rating },
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
