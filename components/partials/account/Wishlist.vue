<template lang="html">
    <div class="ps-page--shop" id="shop-sidebar">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="container">
            <div class="ps-layout--shop">
                <div class="ps-layout__left">
                    <shop-widget
                        v-if="categories !== null && brands !== null"
                    />
                    <bar-shop
                    :title="'Lokasi'"
                    :data="lokasi"
                    />
                </div>

                <div class="ps-layout__right">
                    <div class="ps-shopping">
                        <div class="ps-shopping__header">
                            <p>
                                <strong class="mr-2">{{
                                    dataWishlist !== null ? dataWishlist.length : 0
                                }}</strong>
                                Produk/Jasa Favorite
                            </p>
                        </div>
                        <div class="ps-shopping__content">
                            <template v-if="dataWishlist && dataWishlist.length > 0">
                                <div class="row">
                                    <div
                                        v-for="product in selectedValue"
                                        class="col-md-3"
                                        :key="product.id"
                                    >
                                        <div class="ps-product">
                                            <div class="ps-product__thumbnail">
                                                <module-product-thumbnail-image :product="product"/>
                                                <!-- <module-product-actions :product="product" @toParent="listenEventFromChildren"/> -->
                                                <ul class="ps-product__actions">
                                                    <li>
                                                        <a
                                                            to="#"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Add to cart"
                                                            @click.prevent="handleAddToCart(product.id)"
                                                        >
                                                            <i class="icon-bag2"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            to="#"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Add to cart"
                                                            @click.prevent="handleAddItemToWishlist(product.id, product.name)"
                                                        >
                                                            <!-- <i class="icon-bag2"></i> -->
                                                            <img src="/img/bin.png" style="max-width:40%!important;" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="ps-product__container">
                                                <nuxt-link to="/shop" class="ps-product__vendor">
                                                    <!-- {{ product.vendor }} -->
                                                    vendor
                                                </nuxt-link>
                                                <div class="ps-product__content">
                                                    <module-product-title :product="product"/>
                                                    <div class="ps-product__rating">
                                                        <rating :stars="product.star"/>
                                                        <span>{{ product.star }}</span>
                                                    </div>
                                                    <module-product-price :product="product"/>
                                                </div>
                                                <div class="ps-product__content hover">
                                                    <module-product-title :product="product"/>
                                                    <module-product-price :product="product"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ps-shopping__footer text-center pt-40"></div>
                            </template>
                            <template v-else>
                                <span>Tidak ditemukan.</span>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
import LayoutShop from '~/components/partials/shop/LayoutShop';
import SearchResult from '~/components/partials/search/SearchResult';
import ShopWidget from '~/components/partials/shop/modules/ShopWidget';
import BarShop from '~/components/partials/shop/modules/BarShop';
import Rating from '@/components/elements/Rating';
import ProductQuickview from '~/components/elements/detail/ProductQuickview';
import ModuleProductTitle from '@/components/elements/product/modules/ModuleProductTitle';
import ModuleProductPrice from '@/components/elements/product/modules/ModuleProductPrice';
import ModuleProductThumbnailImage from '@/components/elements/product/modules/ModuleProductThumbnailImage';
import ModuleProductActions from '@/components/elements/product/modules/ModuleProductActions';


export default {
    transition() {
        return 'fadeIn';
    },
    components: {
        ShopWidget,
        SearchResult,
        LayoutShop,
        BreadCrumb,
        BarShop,
        Rating,
        ProductQuickview,
        ModuleProductTitle,
        ModuleProductPrice,
        ModuleProductThumbnailImage,
        ModuleProductActions
    },
    computed: {
        ...mapState({
            searchResults: state => state.product.searchResults,
            collections: state => state.collection.collections,
            categories: state => state.product.categories,
            brands: state => state.product.brands,
            dataWishlist: state => state.product.wishlistItems
        }),
        keyword() {
            return this.$route.query.keyword;
        },
        selectedValue: {
            get() {
                return this.dataWishlist;
            },
            set(newvalue) {
                this.$emit('change', newvalue);
            }
        }
    },
    data() {
        return {
            // dataWishlist: [],
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Favorite'
                }
            ],
            lokasi: [
                {
                    nama: 'Jakarta'
                },
                {
                    nama: 'Bandung'
                },
                {
                    nama: 'Surabaya'
                },
                {
                    nama: 'Tangerang'
                },
                {
                    nama: 'Banten'
                },
            ],
            agama: []
        };
    },
    methods: {
        handleOpenQuickviewDialog() {
            const payload = {
                isQuickview: true
            }
            this.$emit('toParent', payload)
        },
        listenEventFromChildren(payload) {
            if (payload.isQuickview === true) {
                this.quickviewDialog = true;
            }
        },
        async handleAddToCart(id, name) {
            let item = {
                productId: id,
                qty: 1,
            };
            this.$store.dispatch('cart/addProductToCart', item);
            this.$store.dispatch('cart/getCartProducts')
            this.$notify({
                group: 'addCartSuccess',
                title: 'Success!',
                text: `${name} has been added to your cart!`
            });
        },
        async handleAddItemToWishlist(id, name) {

            await this.$store.dispatch('product/removeWishlistProduct', id)

            this.$notify({
                group: 'addCartSuccess',
                title: 'Remove to wishlist!',
                text: `${name} has been remove to your wishlist !`
            });

            await this.$store.dispatch('product/getWishlistProducts');
            // await this.$store.dispatch('product/getProducts', {
            //     productName: '',
            //     religionId : '',
            //     areaId     : '',
            //     store_id   : '',
            //     sort       : 'asc',
            //     page       : 1,
            //     limit      : 10
            // });
        },
    },
    async mounted () {
        this.agama = await this.$publicApi.religion()
        // await this.getData();
        await this.$store.dispatch('product/getWishlistProducts');
    },
    async created() {
        
        // await this.$store.dispatch('product/getProductByKeyword', {
        //     title_contains: this.keyword
        // });
        // const params = {
        //     _start: 1,
        //     _limit: 12
        // };
        // const collectionsParams = [
        //     'shop_best_sale_items',
        //     'shop-recommend-items'
        // ];
        // const collections = await this.$store.dispatch(
        //     'collection/getCollectionsBySlugs',
        //     collectionsParams
        // );
        // const products = await this.$store.dispatch(
        //     'product/getProducts',
        //     params
        // );
        // const brands = await this.$store.dispatch(
        //     'product/getProductBrands',
        //     params
        // );
        // const categories = await this.$store.dispatch(
        //     'product/getProductCategories',
        //     params
        // );
    }
};
</script>

<style lang="scss" scoped></style>
