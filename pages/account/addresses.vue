<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <addresses />
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Addresses from '~/components/partials/account/Addresses';

export default {
    components: {
        Addresses,
        BreadCrumb
    },
    transition: 'zoom',
    middleware: 'authentication',
    async asyncData({ app, redirect, error }) {
        try {
        var buyerAddres = await app.$buyerApi.getBuyerAddress();

        return {
            buyerAddres
        };
        } catch (err) {
            console.log('error nih -> ', err);
        error({ statusCode: 503, message: "Failed fetch data" });
        }
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Addresses'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
