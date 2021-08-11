<template>
   <div class="ps-top-categories">
        <div class="ps-container">
            <!-- <h3>{{ $t('autopart.topCategories') }}</h3> -->
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h2>Product dan Servis Teratas</h2>
                </div>
            </div>
            <div class="row">
                <div class="ps-block__content">
                    <div class="ps-carousel" v-swiper:mySwiper="carouselSetting">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(product, index) in products" :key="index">
                                <product-default :product="product" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductDefault from '~/components/elements/product/ProductDefault';
import { mapState } from 'vuex';
import { getColletionBySlug } from '~/utilities/product-helper';
export default {
    name: 'NewProductService',
    data() {
        return {
            carouselSetting: {
                loop: true,
                slidesPerView: 5,
                spaceBetween: 1,
                navigation: {
                    nextEl: '.ps-carousel__next',
                    prevEl: '.ps-carousel__prev'
                },
                breakpoints: {
                    1680: {
                        slidesPerView: 5
                    },
                    1366: {
                        slidesPerView: 5,
                        pagination: {
                            el: '.swiper-pagination',
                            dynamicBullets: true
                        }
                    },
                    1024: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            }
        }
    },
    components: { ProductDefault },
    props: {
        collectionSlug: {
            type: [Array, Object, String]
        },
    },
    computed: {
        products: {
            get() {
                return this.collectionSlug[0].products
            }
        }
    },
}
</script>

<style>

</style>