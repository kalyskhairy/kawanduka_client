<template lang="html">
    <nuxt-link :to="`/product/${product.id}`">
        <img
            :src="product.image"
            :alt="product.name"
        />
    </nuxt-link>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
export default {
    name: 'ModuleProductThumbnailImage',
    props: {
        product: {
            type: Object,
            default: () => {
            }
        }
    },
    computed: {

        // baseUrl() {
        //     return baseUrl;
        // },
    },

};
</script>

<style lang="scss" scoped>

</style>
