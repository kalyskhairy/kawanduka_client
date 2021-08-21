<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <!-- <user-information /> -->
        <div class="ps-page__content">
            <div class="row mt-10 mr-10 ml-10">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <div class="mt-10 mb-10">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 text-center">
                                                <h3>Mohon berikan rating produk atau jasa sesuai tingkat kepuasan Anda.</h3>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 text-center">
                                                <rating />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                                <label>Tulis Ulasan Anda</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 text-center">
                                                <v-textarea
                                                filled
                                                name="input-7-4"
                                                label="Filled textarea"
                                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                                ></v-textarea>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                                <label>Tambahkan Foto</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 text-center">
                                                <v-file-input
                                                ></v-file-input>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 text-center mb-2">
                                                <v-btn
                                                elevation="2"
                                                class="btn-modal"
                                                style="min-width:30%;"
                                                >Kirim</v-btn>
                                            </div>
                                            <div class="col-lg-12 col-md-12 text-center">
                                                <v-btn
                                                style="min-width:30%;"
                                                color="secondary"
                                                elevation="2"
                                                outlined
                                                >Batalkan</v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
// import UserInformation from '~/components/partials/account/UserInformation';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import MyOrder from '~/components/partials/account/MyOrder';
import Rating from '~/components/elements/Rating';

export default {
    middleware: 'authentication',
    transition: 'zoom',
    components: {
        HeaderMobile,
        // UserInformation,
        BreadCrumb,
        MyOrder,
        Rating
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Rating'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.rem {
    margin: 10rem;
}
.btn-modal {
    background-color: #7aD47C !important;
    color: white;
}
.btn-block {
    height: 40px;
}
</style>
