<template lang="html">
    <section class="ps-home-banner">
        <div class="container">
            <div class="ps-section__left">
                <div class="ps-carousel" v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <nuxt-link to="/shop">
                                <img
                                    src="https://sweeneyfuneraldirectorsboyle.files.wordpress.com/2018/10/coffin-27.png"
                                    alt="martfury"
                                />
                            </nuxt-link>
                        </div>
                        <div class="swiper-slide">
                            <nuxt-link to="/shop">
                                <img
                                    src="https://images.unsplash.com/photo-1512056495345-913a0c261dc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym91cXVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                    alt="martfury"
                                />
                            </nuxt-link>
                        </div>
                        <div class="swiper-slide">
                            <nuxt-link to="/shop">
                                <img
                                    src="https://awsimages.detik.net.id/community/media/visual/2021/06/26/ilustrasi-virus-corona-covid-19-3_169.jpeg?w=700&q=90"
                                    alt="martfury"
                                />
                            </nuxt-link>
                        </div>
                    </div>
                    <!--Carousel controls-->
                    <div class="swiper-nav">
                        <span class="swiper-arrow swiper-prev"
                            ><i class="icon-chevron-left"></i
                        ></span>
                        <div class="swiper-arrow swiper-next">
                            <i class="icon-chevron-right"></i>
                        </div>
                    </div>
                    <div
                        class="swiper-pagination swiper-pagination-bullets"
                    ></div>
                </div>
            </div>
            <div class="ps-section__right">
                <nuxt-link to="/shop">
                    <a class="ps-collection">
                        <img
                            src="~/static/img/banner-kanan.jpg"
                            alt="martfury"
                        />
                        <img
                            src="~/static/img/banner-kanan-1.jpg"
                            alt="martfury"
                        />
                    </a>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MarketPlace2Banner',
    data() {
        return {
            swiperOption: {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 1,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped></style>
