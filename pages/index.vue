<template lang="html">
    <main id="homepage-4">
        <market-place2-banner />
        <!-- <market-place-deal-of-day
            v-if="collections !== null"
            collection-slug="deal-of-the-day"
        /> -->
        <!-- <market-place2-categories /> -->
        <!-- <market-place2-promotions /> -->
        <categories  
            v-if="categories !== null"
        />
        <product-service 
            v-if="products !== null"
            :products="getProducts"
            title="Product dan Servis Terbaru"
        />
        <!-- <product-service 
            v-if="products !== null"
            collection-slug="consumer-electrics"
            title="Product dan Servis Teratas"
        /> -->
        <!-- <market2-consumer-electronics
            v-if="categories !== null"
            collection-slug="consumer-electrics"
        />
        <market2-clothing
            v-if="categories !== null"
            collection-slug="clothing-and-parel"
        /> -->
        <!-- <market2-computer-and-technology
            v-if="categories !== null"
            collection-slug="computers-and-technologies"
        />
        <market2-garden-and-kitchen
            v-if="categories !== null"
            collection-slug="garden-and-kitchen"
        /> -->
        <!-- <market2-healthy-and-beauty
            v-if="categories !== null"
            collection-slug="health-and-beauty"
        /> -->
        <market-place2-download />
    </main>
</template>

<script>
import { mapState } from 'vuex';
import ProductService from '~/components/partials/homepage/marketplace-2/ProductService';
import Categories from '~/components/partials/homepage/marketplace-2/Categories';
import MarketPlaceDealOfDay from '~/components/partials/homepage/default/HomeDefaultDealOfDay';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import MarketPlace2Categories from '~/components/partials/homepage/marketplace-2/MarketPlace2Categories';
import MarketPlace2Promotions from '~/components/partials/homepage/marketplace-2/MarketPlace2Promotions';
import MarketPlace2Download from '~/components/partials/homepage/marketplace-2/MarketPlace2Download';
import Market2ConsumerElectronics from '~/components/partials/homepage/marketplace-2/Market2ConsumerElectronics';
import Market2Clothing from '~/components/partials/homepage/marketplace-2/Market2Clothing';
import Market2ComputerAndTechnology from '~/components/partials/homepage/marketplace-2/Market2ComputerAndTechnology';
import Market2GardenAndKitchen from '~/components/partials/homepage/marketplace-2/Market2GardenAndKitchen';
import Market2HealthyAndBeauty from '~/components/partials/homepage/marketplace-2/Market2HealthyAndBeauty';
import MarketPlace2Banner from '~/components/partials/homepage/marketplace-2/MarketPlace2Banner';
import HeaderMarketPlace2 from '~/components/shared/headers/HeaderMarketPlace2';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    transition: 'zoom',
    layout: 'layout-market-place-2',
    components: {
        HeaderMobile,
        HeaderMarketPlace2,
        MarketPlace2Banner,
        Market2HealthyAndBeauty,
        Market2GardenAndKitchen,
        Market2ComputerAndTechnology,
        Market2Clothing,
        Market2ConsumerElectronics,
        MarketPlace2Download,
        MarketPlace2Promotions,
        MarketPlace2Categories,
        FooterDefault,
        MarketPlaceDealOfDay,
        Categories,
        ProductService
    },
    data() {
        return {
            banner: null,
            params: {
                productName: '',
                religionId : '',
                areaId     : '',
                store_id   : '',
                sort       : 'asc',
                page       : 1,
                limit      : 10
            }
        }
    },
    computed: {
        ...mapState({
            products: state => state.product.products,
            categories: state => state.collection.categories
        }),
        newestProducts: {
            get() {
                let params = this.params;
                params.sort = 'desc';
                return params;
            }
        },
        getProducts: {
            get() {
                return this.products.data;
            },
            set(newvalue) {
                this.$emit('change', newvalue);
            }
        }
    },
    async mounted() {
        await this.$store.dispatch(
            'product/getProducts',
            this.params
        );
        await this.$store.dispatch(
            'collection/getCategories'
        );
        await this.$store.dispatch(
            'cart/getCartProducts'
        )
        await this.$store.dispatch(
            'product/getWishlistProducts'
        )
        let params = this.params;
        // params.
        // await this.$store.dispatch(
        //     'product/getProducts'
        // );

        this.banner = await this.$publicApi.getBanner();
        
    }
};
</script>

<style lang="scss">
@import '~/assets/scss/market-place-2.scss';
</style>
