<template lang="html">
    <div id="shop-widgets">
        <aside class="widget widget_shop">
            <div class="row">
                <div class="col-12">
                    <h4 class="widget-title">
                        <!-- {{ $t('shop.widget.categories') }} -->
                        Lokasi
                    </h4>
                    <div class="row">
                        <div class="col-12" v-for="(value, index) in data" :key="index">
                            {{ value.nama }}
                        </div>
                    </div>
                </div>
            </div>
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
            data: [
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
            ]
        };
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped></style>
