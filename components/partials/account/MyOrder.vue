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
                                <AccountLinks :links="tempLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="ps-page__content">
                        <div class="ps-section--account-setting">
                            <div class="ps-section__header">
                                <h3>Pesanan Saya</h3>
                            </div>
                            <div class="ps-section__content">
                                <div class="col-lg-12 col-md-12">
                                    <div class="row">
                                        <div class="col-8">
                                            <div class="form-group">
                                                <v-text-field
                                                    v-model="search"
                                                    class="ps-text-field"
                                                    placeholder="Cari Produk dan Servis"
                                                    height="50"
                                                    outlined
                                                />
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="form-group">
                                                <v-select
                                                :items="items"
                                                label="Outlined style"
                                                height="50"
                                                outlined
                                                dense
                                                ></v-select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <v-tabs>
                                    <v-tab :href="`#semua_pesanan`">Semua Pesanan</v-tab>
                                    <!-- Semua pesanan -->
                                    <v-tab-item :value="`semua_pesanan`">
                                        <tab-my-order />
                                    </v-tab-item>
                                    <v-tab :href="`#kemas`">Dikemas</v-tab>
                                    <v-tab-item :value="`kemas`">
                                        <tab-my-order />
                                    </v-tab-item>
                                    <v-tab :href="`#kirim`">Dikirim</v-tab>
                                    <v-tab-item :value="`kirim`">
                                        <tab-my-order />
                                    </v-tab-item>
                                    <v-tab :href="`#selesai`">Selesai</v-tab>
                                    <v-tab-item :value="`selesai`">
                                        <tab-my-order />
                                    </v-tab-item>
                                    <v-tab :href="`#batalkan`">Dibatalkan</v-tab>
                                    <v-tab-item :value="`batalkan`">
                                        <tab-my-order />
                                    </v-tab-item>
                                </v-tabs>
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
import TabMyOrder from './modules/TabMyOrder';
export default {
    name: 'UserInformation',
    components: { AccountLinks,TabMyOrder },
    data() {
        return {
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            search: '',
            tempLinks: [
                {
                    text: 'Pesanan Saya',
                    url: '/account/my-order',
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
                    icon: 'icon-map-marker'
                },
                {
                    text: 'Recent Viewed Product',
                    url: '/account/recent-viewed-product',
                    icon: 'icon-store',
                    // active: true
                },
                {
                    text: 'Wishlist',
                    url: '/account/wishlist',
                    icon: 'icon-heart'
                }
            ],
        };
    }
};
</script>

<style lang="scss" scoped></style>
