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
                                                <h3>Ubah Password</h3>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 text-center">
                                                <h6>Untuk keamanan akun Anda, mohon untuk tidak menyebarkan password Anda ke orang lain</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                                <label>Password Lama</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 text-center">
                                                <v-text-field
                                                v-model="oldPassword"
                                                :counter="18"
                                                label="Password Lama"
                                                outlined
                                                required
                                                ></v-text-field>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                                <label>Password Baru</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 text-center">
                                                <v-text-field
                                                v-model="newPassword"
                                                :counter="18"
                                                label="Password Baru"
                                                outlined
                                                required
                                                ></v-text-field>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                                <label>Konfirmasi Password Baru</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 text-center">
                                                <v-text-field
                                                v-model="newPasswordConfirmation"
                                                :counter="18"
                                                label="Konfirmasi Password Baru"
                                                outlined
                                                required
                                                ></v-text-field>
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
            oldPassword: '',
            newPasswordConfirmation: '',
            newPassword: '',
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
