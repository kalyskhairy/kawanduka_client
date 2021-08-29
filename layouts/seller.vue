<template>
  <client-only>
        <v-app>
            <v-navigation-drawer
            permanent
            app
            >
                <v-list-item class="list-item">
                <v-list-item-content class="list-content">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <p>Hello!</p>
                            <h4>Pablo Escobar</h4>
                        </div>
                        </div>
                        <div class="row">
                        <br>
                        </div>
                        <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <p>Saldo</p>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <h5>Rp.20.000.000</h5>
                                <button class="btn btn-success">Tarik saldo</button>
                            </div>
                            <!-- <div class="col-lg-5 col-md-5 col-sm-5">
                                <button class="btn btn-success">Tarik saldo</button>
                            </div> -->
                            </div>
                        </div>
                        </div>
                    </div>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list
                dense
                nav
                >

                <v-list-item
                link
                color="indigo"
                >
                    <v-list-item-icon>
                    <v-icon>mdi-format-list-bulleted</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                    <nuxt-link to="/seller/penjualan">
                        <v-list-item-title>Penjualan</v-list-item-title>
                    </nuxt-link>
                    </v-list-item-content>
                </v-list-item>

            <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action
            >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                </template>

                <v-list-item
                v-for="child in item.items"
                :key="child.title"
                >
                <v-list-item-content>
                    <nuxt-link :to="child.router">{{child.title}}</nuxt-link>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
            </v-list>
            </v-navigation-drawer>

            <v-main class="main-seller">
                <nuxt></nuxt>
            </v-main>
        </v-app>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            items: [
            {
                action: 'mdi-silverware-fork-knife',
                active: false,
                items: [
                { title: 'Tambah Produk', router: '/seller/produk/tambah-produk' },
                { title: 'Daftar Produk', router: '/seller/produk/daftar-produk' },
                ],
                title: 'Product',
            },
            {
                action: 'mdi-store',
                active: false,
                items: [
                { title: 'Alamat Toko', router: '/seller/toko/alamat-toko' },
                { title: 'Pengiriman', router: '/seller/toko/pengiriman' },
                { title: 'Lihat Toko', router: '/seller/toko/lihat-toko' },
                ],
                title: 'Toko',
            },
            {
                action: 'mdi-credit-card-outline',
                active: false,
                items: [
                { title: 'Mutasi Saldo', router: '/seller/saldo/mutasi-saldo' },
                { title: 'Akun Bank', router: '/seller/saldo/akun-bank' },
                ],
                title: 'Saldo',
            },
            ],
            right: null,
        }
    },
}
</script>

<style>
.main-seller {
    margin: 25px;
}
</style>