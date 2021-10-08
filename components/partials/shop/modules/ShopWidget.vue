<template lang="html">
    <div id="shop-widgets">
        <aside class="widget widget_shop">
            <h4 class="widget-title">
                <!-- {{ $t('shop.widget.categories') }} -->
                Kategori
            </h4>
            <ul v-if="categories !== undefined" class="ps-list--categories">
                <li>
                    <a href="#" @click.prevent="handleGotoCategory(null)">
                        Semua Kategori
                    </a>
                </li>
                <li v-for="category in categories" :key="category.id">
                    <a
                        href="#"
                        @click.prevent="handleGotoCategory(category.slug)"
                    >
                        {{ category.name }}
                    </a>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_shop">
            <!-- <h4 class="widget-title">
                {{ $t('shop.widget.byBrands') }}
            </h4>
            <figure>
                <v-checkbox
                    v-for="brand in brands"
                    v-model="selectedBrands"
                    :value="brand.slug"
                    :label="brand.name"
                    :key="brand.id"
                    @click="handleFilterByBrand"
                />
            </figure> -->
            <figure>
                <div class="row">
                    <div class="col-lg-12">
                        <h4 class="widget-title">
                            <!-- {{ $t('shop.widget.byBrands') }} -->
                            Harga
                        </h4>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <!-- <div class="form-group"> -->
                                    <v-text-field
                                        v-model="priceRange[0]"
                                        placeholder="Min"
                                        class="ps-text-field"
                                        outlined
                                    />
                                <!-- </div> -->
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <!-- <div class="form-group"> -->
                                    <v-text-field
                                        v-model="priceRange[1]"
                                        placeholder="Min"
                                        class="ps-text-field"
                                        outlined
                                    />
                                <!-- </div> -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <v-range-slider
                                    v-model="priceRange"
                                    color="warning"
                                    min="10000"
                                    max="999999"
                                    track-color="#dddddd"
                                    @end="handleFilterByPriceRagne"
                                />
                            </div>
                            <div class="col-6 text-left">
                                <span>Min</span>
                            </div>
                            <div class="col-6 text-right">
                                <span>Max</span>
                            </div>
                            <div class="col-12">
                                <p>
                                    Price: {{ $helper.convertCurrency(priceRange[0]) }} - {{
                                       $helper.convertCurrency(priceRange[1])
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>
        </aside>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { getColletionBySlug } from '~/utilities/product-helper';
import { serializeQuery } from '~/repositories/Repository';

export default {
    name: 'ShopWidget',
    computed: {
        ...mapState({
            categories: state => state.product.categories,
            brands: state => state.product.brands,
            products: state => state.product.products
        }),
        categorySlug() {
            return this.$route;
        }
    },
    data() {
        return {
            priceRange: [100, 1000],
            selectedBrands: []
        };
    },
    methods: {
        async handleGotoCategory(slug) {
            if (slug) {
                const url = `/shop?category=${slug}`;
                const products = getColletionBySlug(this.categories, slug);
                this.$store.commit('product/setProducts', products);
                this.$store.commit('product/setProducts', products);
                this.$store.commit('product/setTotal', products.length);
                this.$store.commit('collection/setQueries', [slug]);
                this.$router.push(url);
            } else {
                const params = {
                    _start: 1,
                    _limit: 12
                };
                await this.$store.commit('collection/setQueries', null);
                await this.$store.dispatch('product/getTotalRecords', params);
                await this.$store.dispatch('product/getProducts', params);
            }
        },

        async handleFilterByBrand() {
            if (this.selectedBrands) {
                await this.$store.commit(
                    'collection/setQueries',
                    this.selectedBrands
                );

                await this.$store.dispatch(
                    'product/getProductsByBrands',
                    this.selectedBrands
                );
            } else {
                const params = {
                    _start: 1,
                    _limit: 12
                };
                await this.$store.commit('collection/setQueries', null);
                await this.$store.dispatch('product/getTotalRecords', params);
                await this.$store.dispatch('product/getProducts', params);
            }
        },

        async handleFilterByPriceRagne() {
            const params = {
                price_gt: this.priceRange[0],
                price_lt: this.priceRange[1],
                _start: 1,
                _limit: 999
            };
            console.log(this.priceRange);
            await this.$store.dispatch(
                'product/getProductsByPriceRange',
                params
            );
            await this.$router.push(`/search?${serializeQuery(params)}`);
        }
    }
};
</script>

<style lang="scss" scoped></style>
