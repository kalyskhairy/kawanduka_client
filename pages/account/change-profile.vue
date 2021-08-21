<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <!-- <user-information /> -->
        <!-- <my-order /> -->
        <section class="ps-my-account ps-page--account">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="ps-section__left">
                            <aside class="ps-widget--account-dashboard">
                                <div class="ps-widget__header">
                                    <img src="/img/users/3.jpg" />
                                    <figure>
                                        <figcaption>Hello</figcaption>
                                        <p>username@gmail.com</p>
                                    </figure>
                                </div>
                                <div class="ps-widget__content">
                                    <AccountLinks />
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="ps-page__content">
                            <div class="ps-section--account-setting">
                                <div class="ps-section__header">
                                    <h3>Profil Saya</h3>
                                    <!-- <v-btn color="success"> -->
                                        <nuxt-link to="/account/change-password"
                                        class="button ps-btn ps-btn--curve"
                                        >Ubah Password</nuxt-link>
                                    <!-- </v-btn> -->
                                </div>
                                <div class="ps-section__content">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row rem">
                                                <div class="col-lg-8 col-md-8 col-sm-8">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <label>Nama</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <v-text-field
                                                            v-model="name"
                                                            :counter="18"
                                                            label="Name"
                                                            outlined
                                                            required
                                                            ></v-text-field>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <label>Jenis Kelamin</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                           <v-select
                                                            :items="gender"
                                                            label="Jenis Kelamin"
                                                            outlined
                                                            ></v-select>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <label>Agama</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <v-select
                                                            :items="relegion"
                                                            label="Agama"
                                                            outlined
                                                            ></v-select>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <label>Email</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <v-text-field
                                                            v-model="email"
                                                            :counter="18"
                                                            label="Email"
                                                            outlined
                                                            required
                                                            ></v-text-field>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <label>No Telepon</label>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <v-text-field
                                                            v-model="phone"
                                                            :counter="18"
                                                            label="No Telepon"
                                                            outlined
                                                            required
                                                            ></v-text-field>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4">
                                                    <div class="text-center">
                                                        <img src="/img/users/3.jpg" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 text-right mb-2">
                                                <v-btn
                                                style="min-width:30%;"
                                                color="secondary"
                                                elevation="2"
                                                outlined
                                                >Batalkan</v-btn>
                                                <v-btn
                                                elevation="2"
                                                class="btn-modal"
                                                style="min-width:30%;"
                                                >Simpan</v-btn>
                                                </div>
                                                <!-- <div class="col-lg-12 col-md-12 text-right">
                                                </div> -->
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
    </section>
</template>
<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
// import UserInformation from '~/components/partials/account/UserInformation';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import MyOrder from '~/components/partials/account/MyOrder';
import AccountLinks from '~/components/partials/account/modules/AccountLinks';

export default {
    middleware: 'authentication',
    transition: 'zoom',
    components: {
        HeaderMobile,
        // UserInformation,
        BreadCrumb,
        MyOrder,
        AccountLinks
    },
    data: () => {
        return {
            name: '',
            phone: '',
            email: '',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'User Information'
                }
            ],
            gender: [
                'Laki - laki',
                'Perempuan'
            ],
            relegion: [
                'Islam',
                'Kristen',
                'Budha',
                'Katolik'
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.rem {
    margin: 1.25rem;
}

.btn-modal {
    background-color: #7aD47C !important;
    color: white;
}

.ps-section__header {
    display: flex;
    justify-content: space-between;
}

.btn {
    height: 36px;
    padding: 0 16px;
    min-width: 30%;
    align-items: center;
    border-radius: 4px;
    font-weight: 500;
    justify-content: center;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
}

</style>
