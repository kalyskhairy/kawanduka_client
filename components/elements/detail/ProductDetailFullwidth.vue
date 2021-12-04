<template lang="html">
    <div class="ps-product--detail ps-product--fullwidth">
        <div class="ps-product__header">
            <thumbnail-default />
            <information-default />
        </div>
        <hr />
        <section
        class="ps-product-list ps-section--carousel-outside"
        id="market2-technology"
        >
            <default-review />
        </section>
        <product-service 
        v-if="products !== null"
        collection-slug="clothing-and-parel"
        :products="products.data"
        title="Produk dan Servis Terkait"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import DefaultDescription from '~/components/elements/detail/modules/DefaultDescription';
import InformationDefault from '~/components/elements/detail/information/InformationDefault';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import DefaultReview from '~/components/elements/detail/modules/DefaultReview';
import ProductService from '~/components/partials/homepage/marketplace-2/ProductService';

export default {
    name: 'ProductDetailFullwidth',
    components: { 
        ThumbnailDefault, 
        InformationDefault, 
        DefaultDescription,
        DefaultReview,
        ProductService
    },
    computed: {
        ...mapState({
            // collections: state => state.collection.collections,
            products: state => state.collection.products,
            product: state => state.product.product
        })
    },
    data() {
        return {
            params: {
                productName: '',
                religionId : '',
                areaId     : '',
                store_id   : '',
                sort       : 'asc',
                page       : 1,
                limit      : 10,
                categoryId : ''
            }
        }
    },
    async created() {
        let params = this.params;
        params.categoryId = this.product.categoryId
        await this.$store.dispatch(
            'collection/getProducts',
            params
        );
    }
};
</script>

<style lang="scss" scoped></style>
