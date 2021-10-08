<template lang="html">
    <div class="col-lg-12 col-md-12 mt-5">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <aside class="ps-widget--account-dashboard">
                    <div class="ps-widget__header">
                        <img class="img-users" src="/img/users/3.jpg" />
                        <figure class="text-right">
                            <p>24 Mei 2021, 18:26 WIB</p>
                        </figure>
                    </div>
                </aside>
            </div>
            <div class="col-md-6 col-12">
                <figure class="ps-block--address">
                    <div class="ps-block__content">
                        <div class="col-lg-12 col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <img class="img-order" src="/img/products/home-2/recommend/3.jpg" />
                                </div>
                                <div class="col-md-6">
                                    <h4>Lampu</h4>
                                    <p>1bks/light</p>
                                    <h5>Total Pesanan : <span>Rp 1.000.000</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </figure>
            </div>
            <v-divider 
            vertical
            />
            <div class="col-md-6 col-12">
                <figure class="ps-block--address">
                    <div class="ps-block__content">
                        <div class="col-md-12">
                            <h5>Alamat Pengiriman</h5>
                            <p>Jalan Sudirman</p>
                            <p>No 90 DKI Jakarta</p>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableInvoices',
    data() {
        return {
        };
    }
};
</script>

<style lang="scss" scoped>
.img-order {
    width: 100%;
    height: 100%;
}
h5 {
    color:#223263 ;
    span {
        color: #7AD47C;
    }
}
.border {
    border: 1px solid black;
}


</style>
