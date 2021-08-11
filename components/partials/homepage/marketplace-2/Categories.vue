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
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="row">
                            <div class="col" v-for="(data, index) in dataKategori" :key="index">
                                {{ data.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <carousel-arrows type="simple" />
                <div class="ps-carousel" v-swiper:mySwiper="carouselSetting">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="product in products">
                            <product-default :product="product" />
                        </div>
                    </div> -->
                    <!--Carousel controls-->
                <!-- </div> -->
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
        collectionSlug: {
            type: String,
            default: ''
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
            dataKategori: [
                {
                    name: 'Transportasi'
                },
                {
                    name: 'Bunga'
                },
                {
                    name: 'Peralatan Ibadah'
                },
                {
                    name: 'Jasa Printing'
                },
                {
                    name: 'Perizinan'
                },
                {
                    name: 'Peti Mayat'
                },
                {
                    name: 'Kain Kafan'
                },
                {
                    name: 'Nisan'
                },
            ]
        };
    }
};
</script>
<style lang="scss" scoped></style>
