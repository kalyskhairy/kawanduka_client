<template lang="html">
    <div class="ps-page--shop" id="shop-sidebar">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="container">
            <div class="ps-layout--shop">
                <div class="ps-layout__left">
                    <shop-widget
                    />
                    <!-- <bar-shop
                    :title="'Lokasi'"
                    :data="lokasi"
                    /> -->
                    <div id="shop-widgets">
                        <aside class="widget widget_shop">
                            <div class="row">
                                <div class="col-12">
                                    <h4 class="widget-title">
                                        Agama
                                    </h4>
                                    <div class="row">
                                        <div class="col-12" v-for="(value, index) in agama" :key="index">
                                            {{ value.religionName }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>

                <div class="ps-layout__right">
                    <search-result />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
import LayoutShop from '~/components/partials/shop/LayoutShop';
import SearchResult from '~/components/partials/search/SearchResult';
import ShopWidget from '~/components/partials/shop/modules/ShopWidget';
import BarShop from '~/components/partials/shop/modules/BarShop';

export default {
    transition() {
        return 'fadeIn';
    },
    components: {
        BarShop,
        BreadCrumb,
        ShopWidget,
        SearchResult
    },
    computed: {
        keyword() {
            return this.$route.query.keyword;
        },
        ...mapState({
            products: state => state.product.products
        })
    },

    data() {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Kategori'
                }
            ],
            agama: [],
            params: {
                productName: '',
                religionId : '',
                areaId     : '',
                store_id   : '',
                sort       : 'asc',
                page       : 1,
                limit      : 10,
                categoryId : this.$route.params.id
            }
        };
    },
    async mounted () {
        this.agama = await this.$publicApi.religion()
    },
    async created() {
        await this.$store.dispatch(
            'product/getProducts',
            this.params
        );
    }
};
</script>

<style lang="scss" scoped></style>
