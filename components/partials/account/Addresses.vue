<template lang="html">
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
                                <AccountLinks :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="ps-page__content">
                        <div class="ps-section--account-setting">
                            <div class="ps-section__content">
                                <div class="ps-section__header">
                                    <h3>Alamat</h3>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12" v-if="data.length > 0">
                                            <div class="card" v-for="(value, index) in data" :key="index">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-8">
                                                            <h5>{{value.name}}</h5>
                                                            <p>{{value.alamat}}</p>
                                                            <p>{{value.alamat1}}</p>
                                                            <p>{{value.phone}}</p>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 center">
                                                            <button class="btn btn-modal btn-block">Ubah</button>
                                                            <button class="btn btn-outline-danger btn-block">Hapus</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12" v-if="data.length == 0">
                                            <div class="card">
                                                <div class="card-body" style="padding:10rem;">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <div class="row">
                                                                <div class="col-12 text-center">
                                                                    <!-- <span class="fas fa-home"></span> -->
                                                                    <i class="fas fa-home"></i>
                                                                </div>
                                                                <div class="col-12 text-center">
                                                                    <p>Toko Anda belum memiliki Alamat</p>
                                                                </div>
                                                                <div class="col-12 text-center">
                                                                    <v-dialog
                                                                    v-model="dialog"
                                                                    persistent
                                                                    max-width="600px"
                                                                    >
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-btn
                                                                        class="btn-modal"
                                                                        dark
                                                                        v-bind="attrs"
                                                                        v-on="on"
                                                                        >
                                                                        Tambahkan Alamat
                                                                        </v-btn>
                                                                    </template>
                                                                    <v-card>
                                                                        <v-card-title>
                                                                        <span class="text-h5">Tambahkan Alamat</span>
                                                                        </v-card-title>
                                                                        <v-card-text>
                                                                        <v-container>
                                                                            <v-row>
                                                                            <v-col cols="12">
                                                                                <v-text-field
                                                                                label="Label"
                                                                                required
                                                                                ></v-text-field>
                                                                            </v-col>
                                                                            <v-col cols="12">
                                                                                <v-text-field
                                                                                label="Alamat"
                                                                                required
                                                                                ></v-text-field>
                                                                            </v-col>
                                                                            <v-col cols="12">
                                                                                <v-text-field
                                                                                label="Provinsi"
                                                                                required
                                                                                ></v-text-field>
                                                                            </v-col>
                                                                            <v-col cols="12">
                                                                                <v-autocomplete
                                                                                    v-model="districtName"
                                                                                    :items="region"
                                                                                    chips
                                                                                    label="Kecamatan"
                                                                                    clearable
                                                                                    v-on:change="getRegion"
                                                                                ></v-autocomplete>
                                                                            </v-col>
                                                                            <v-col cols="12">
                                                                                <v-text-field
                                                                                label="Kode Pos"
                                                                                required
                                                                                ></v-text-field>
                                                                            </v-col>
                                                                            <v-col cols="12">
                                                                                <v-text-field
                                                                                label="No Telpon"
                                                                                required
                                                                                ></v-text-field>
                                                                            </v-col>
                                                                            </v-row>
                                                                        </v-container>
                                                                        <small>*indicates required field</small>
                                                                        </v-card-text>
                                                                        <v-card-actions>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn
                                                                            color="blue darken-1"
                                                                            text
                                                                            @click="dialog = false"
                                                                        >
                                                                            Close
                                                                        </v-btn>
                                                                        <v-btn
                                                                            color="blue darken-1"
                                                                            text
                                                                            @click="dialog = false"
                                                                        >
                                                                            Save
                                                                        </v-btn>
                                                                        </v-card-actions>
                                                                    </v-card>
                                                                    </v-dialog>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AccountLinks from './modules/AccountLinks';
export default {
    name: 'Addresses',
    components: { AccountLinks },

    data() {
        return {
            dialog: false,
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/account/user-information',
                    icon: 'icon-user'
                },
                {
                    text: 'Notifications',
                    url: '/account/notifications',
                    icon: 'icon-alarm-ringing'
                },
                {
                    text: 'Invoices',
                    url: '/account/invoices',
                    icon: 'icon-papers'
                },
                {
                    text: 'Address',
                    url: '/account/addresses',
                    icon: 'icon-map-marker',
                    active: true
                },
                {
                    text: 'Recent Viewed Product',
                    url: '/account/recent-viewed-product',
                    icon: 'icon-store'
                },
                {
                    text: 'Wishlist',
                    url: '/account/wishlist',
                    icon: 'icon-heart'
                }
            ],
            data: [
                // {
                //     name: 'wakacau',
                //     alamat: 'Jalan Sudirman no 666, Jakarta Selatan',
                //     alamat1: 'Jakarta, 20123, Indonesia',
                //     phone: '08193093939'
                // },
                // {
                //     name: 'wakacau',
                //     alamat: 'Jalan Sudirman no 666, Jakarta Selatan',
                //     alamat1: 'Jakarta, 20123, Indonesia',
                //     phone: '08193093939'
                // },
            ],
            descriptionLimit: 60,
            entries: [],
            isLoading: false,
            model: null,
            search: null,
            districtName: null,
            region: [
                'testing'
            ]
        };
    },
    methods: {
        getRegion() {
            console.log(
                'ddistrictName ', this.districtName
            );
        },
        async getDataAddress() {
            this.$blockUi();
            try {
                this.data = await this.$buyerApi.getDataAddress();
                
            } catch (error) {
                console.log('ERROR ---> ', error);
            } finally {
                this.$unBlockUi();
            }

        }
    },
    mounted () {
        // this.getDataAddress();
    },
};
</script>

<style lang="scss" scoped>

.btn-modal {
    background-color: #7aD47C !important;
    color: white;
}
.btn-block {
    height: 40px;
}
.card-body {
    padding: 2.25rem;
}

.center {
    margin: auto;
    width: 60%;
    padding: 10px;
}
</style>
