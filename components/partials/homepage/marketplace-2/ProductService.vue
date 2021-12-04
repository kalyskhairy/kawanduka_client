<template lang="html">
    <section
        class="ps-product-list ps-section--carousel-outside"
        id="market2-technology"
    >
        <div class="container">
            <div class="ps-section__header">
                <h3>{{ title }}</h3>
                <ul class="ps-section__links">
                    <li>
                        <nuxt-link to="/shop">
                            Lainnya
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="ps-section__content">
                <carousel-arrows type="simple" />
                <div class="ps-carousel" v-swiper:mySwiper="carouselSetting">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(product, index) in products" :key="index">
                            <product-default :product="product" />
                        </div>
                    </div>
                    <!-- Carousel controls -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductDefault from '~/components/elements/product/ProductDefault';
import { mapState } from 'vuex';
import { carouselStandard } from '~/utilities/carousel-helpers';
import { getColletionBySlug } from '~/utilities/product-helper';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';

export default {
    name: 'ProductService',
    components: { CarouselArrows, ProductDefault },
    props: {
        // collectionSlug: [Array, Object],
        title: {
            type: String,
            default: 'Title'
        },
        products: [Array]
    },
    computed: {
        // ...mapState({
        //     products: state => state.collection.products
        // }),
        // products() {
        //     return getColletionBySlug(this.products, this.collectionSlug);
        // }
    },
    data() {
        return {
            carouselSetting: {
                ...carouselStandard,
                navigation: {
                    nextEl: '#market2-technology .swiper-next',
                    prevEl: '#market2-technology .swiper-prev'
                }
            },
        };
    }
};
</script>
<style lang="scss" scoped></style>
