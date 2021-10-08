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
                            <div class="ps-section__header">
                                <h3>Pesanan Saya</h3>
                            </div>
                            <div class="ps-section__content">
                                <v-tabs>
                                    <v-tab :href="`#pembeli`">Pembeli</v-tab>
                                    <v-tab-item :value="`pembeli`">
                                        <card-notifications :data="dataPembeli"/>
                                    </v-tab-item>
                                    <v-tab :href="`#penjual`">Penjual</v-tab>
                                    <v-tab-item :value="`penjual`">
                                        <card-notifications :data="dataPenjual"/>
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
import CardNotifications from './modules/CardNotifications';
export default {
    name: 'InvoiceDetail',
    components: { CardNotifications, AccountLinks },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/account/user-information',
                    icon: 'icon-user'
                },
                {
                    text: 'Notifications',
                    url: '/account/notifications',
                    icon: 'icon-alarm-ringing',
                    active: true
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
                    icon: 'icon-store'
                },
                {
                    text: 'Wishlist',
                    url: '/account/wishlist',
                    icon: 'icon-heart'
                }
            ],
            dataPembeli: [
                {
                    title: 'Transaksi Peti Mayat Diterima',
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
                    date: 'April 30 2021'
                },
                {
                    title: 'Transaksi Prime Rose Diterima',
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
                    date: 'April 30 2021'
                },
            ],
            dataPenjual: [
                {
                    title: 'Transaksi Peti Mayat Diterima',
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
                    date: 'April 30 2021'
                },
                {
                    title: 'Transaksi Prime Rose Diterima',
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
                    date: 'April 30 2021'
                },
            ],
            notifications: {
                buyer: [],
                seller: []
            }
        };
    },
    async mounted () {
        let token = this.$auth.strategy.token.get();
        this.notifications.buyer = await this.$publicApi.notificationBuyer(token);
        this.notifications.seller = await this.$publicApi.notificationSeller(token);
    },
};
</script>

<style lang="scss" scoped></style>
