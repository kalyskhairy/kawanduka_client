<template lang="html">
<div>
    <!-- <ul class="menu">
        <li v-for="item in menuItems" :key="item.text">
            <nuxt-link :to="item.url" class="menu__text">
                <i :class="item.icon"> </i>
                <span>{{ item.text }}</span>
            </nuxt-link>
        </li>
    </ul> -->
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
</div>
</template>

<script>
export default {
    name: 'MenuSidebar',
    data() {
        return {
            menuItems: [
                {
                    text: 'Dashboard',
                    url: '/seller',
                    icon: 'icon-home'
                },
                {
                    text: 'Products',
                    url: '/seller/produk/tambah-produk',
                    items: [
                        { title: 'Tambah Produk', router: '/seller/produk/tambah-produk' },
                        { title: 'Daftar Produk', router: '/seller/produk/daftar-produk' }
                    ],
                    icon: 'icon-database'
                },
                {
                    text: 'Orders',
                    url: '/orders',
                    icon: 'icon-bag2'
                },
                {
                    text: 'Customers',
                    url: '/customers',
                    icon: 'icon-users2'
                },
                {
                    text: 'Categories',
                    url: '/categories',
                    icon: 'icon-users2'
                },
                {
                    text: 'Settings',
                    url: '/settings',
                    icon: 'icon-cog'
                }
            ],
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
        };
    }
};
</script>

<style lang="scss" scoped></style>
