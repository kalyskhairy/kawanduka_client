<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <!-- <user-information /> -->
        <div class="row rem">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <h3>Mohon berikan rating produk atau jasa sesuai tingkat kepuasan Anda.</h3>
                                <rating />
                                <v-textarea
                                filled
                                name="input-7-4"
                                label="Filled textarea"
                                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                ></v-textarea>
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
</style>
