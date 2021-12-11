<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <notifications />
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Notifications from '~/components/partials/account/Notifications';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    transition: 'zoom',
    middleware: 'authentication',
    components: {
        HeaderMobile,
        Notifications,
        BreadCrumb
    },

    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Notifikasi'
                }
            ]
        };
    },
    // async asyncData({ app, redirect, error, params }) {
    //     try {
    //         let token = this.$auth.strategy.token.get();
    //         var notifBuyer  = await app.$publicApi.notificationBuyer(token);
    //         var notifSeller = await app.$publicApi.notificationSeller(token);
    //         return {
    //             notifBuyer,
    //             notifSeller,
    //             token
    //         };
    //     } catch (err) {
    //         error({ statusCode: 503, message: "Failed fetch data" });
    //     }
    // },
};
</script>

<style lang="scss" scoped></style>
