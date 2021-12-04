<template lang="html">
    <section
        class="ps-product-list ps-section--carousel-outside"
        id="market2-technology"
    >
        <div class="container">
            <div class="ps-section__header">
                <h3>Kategori</h3>
            </div>
            <div class="ps-section__content">
                <carousel-arrows type="simple" />
                <div class="ps-carousel" v-swiper:mySwiper="carouselSetting">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="data in categories">
                            <div class="text-center">
                                <nuxt-link :to="`/kategori/${data.id}`">
                                    <img class="logo-regulator" :src="data.image" alt="Card image cap">
                                    <div class="card-body">
                                        <p class="card-text">{{ data.name }}</p>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <!--Carousel controls-->
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
    name: 'Categories',
    components: { CarouselArrows, ProductDefault },
    props: {
        data: {
            type: [Array, Object],
        }
    },
    computed: {
        ...mapState({
            categories: state => state.collection.categories
        }),
        products() {
            return getColletionBySlug(this.categories, this.collectionSlug);
        }
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
<style lang="scss" scoped>
.logo-regulator {
    max-height: 65px;
}
</style>
