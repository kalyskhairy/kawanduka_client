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
        v-if="categories !== null"
        collection-slug="clothing-and-parel"
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
            collections: state => state.collection.collections,
            categories: state => state.collection.categories
        })
    },
    async created() {
        const collectionsSlug = ['deal-of-the-day'];
        const categoriesSlug = [
            'clothing-and-parel',
            'consumer-electrics',
            'computers-and-technologies',
            'garden-and-kitchen',
            'health-and-beauty'
        ];

        await this.$store.dispatch(
            'collection/getCollectionsBySlugs',
            collectionsSlug
        );
        await this.$store.dispatch(
            'collection/getCategoriesBySlugs',
            categoriesSlug
        );
    }
};
</script>

<style lang="scss" scoped></style>
