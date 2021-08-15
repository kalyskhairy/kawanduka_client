<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <!-- <user-information /> -->
        <my-order />
    </section>
</template>
<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
// import UserInformation from '~/components/partials/account/UserInformation';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import MyOrder from '~/components/partials/account/MyOrder';

export default {
    middleware: 'authentication',
    transition: 'zoom',
    components: {
        HeaderMobile,
        // UserInformation,
        BreadCrumb,
        MyOrder
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'User Information'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
