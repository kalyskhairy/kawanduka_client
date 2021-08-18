<template lang="html">
<div class="ps-product__content">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h3>Ulasan</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-4" v-for="(stars, index) in rating" :key="index">
                <v-btn outlined
                :style="stars.background"
                >
                    <span :class="stars.icon" :style="stars.color"></span>
                    {{ stars.name }}
                </v-btn>
            </div>
        </div>
        <div class="row mt-10">
            <div class="col-lg-12 col-md-12">
                <div v-for="(data, index) in comments" :key="index">
                    <aside class="ps-widget--account-dashboard">
                        <div class="ps-widget__header">
                            <img src="/img/users/3.jpg" />
                            <figure>
                                <p>{{ data.email }}</p>
                                <rating />
                            </figure>
                        </div>
                        <div class="ps-widget__content">
                            <p>
                                {{ data.text }}
                            </p>
                            <img class="img-order" src="/img/products/home-2/recommend/3.jpg" />
                            <p>{{ data.date }}</p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</div>    
</template>

<script>
import Rating from '~/components/elements/commons/Rating';

export default {
    name: 'DetailReview',
    components: { Rating },
    data() {
        return {
            rating: [
                {
                    name: 'Semua Ulasan',
                    backgroundcolor: 'background:#F0FFDF;'
                },
                {
                    name: '1',
                    icon: 'fa fa-star',
                    color: 'color:#FFC833;'
                },
                {
                    name: '2',
                    icon: 'fa fa-star',
                    color: 'color:#FFC833;'
                },
                {
                    name: '3',
                    icon: 'fa fa-star',
                    color: 'color:#FFC833;'
                },
                {
                    name: '4',
                    icon: 'fa fa-star',
                    color: 'color:#FFC833;'
                },
                {
                    name: '5',
                    icon: 'fa fa-star',
                    color: 'color:#FFC833;'
                },
            ],
            comments: [
                {
                    email: 'username@gmail.com',
                    text: 'Wakacau nih bagus banget barangnya guys manteb!',
                    date: 'June, 20 2021'
                },
                {
                    email: 'username@gmail.com',
                    text: 'Wakacau nih bagus banget barangnya guys manteb gan!',
                    date: 'June, 20 2021'
                },
            ]
        }
    },
};
</script>

<style lang="scss" scoped>
.ps-product__content {
    padding: 50px;
}

.ps-widget__content {
    margin-left: 70px;
}

.img-order {
    width: 100px;
}
</style>
