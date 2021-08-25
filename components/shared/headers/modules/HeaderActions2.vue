<template lang="html">
    <div class="header__actions">
        <nuxt-link to="/account/wishlist" class="header__extra">
            <i class="icon-heart"></i>
            <span>
                <i>0</i>
            </span>
            
        </nuxt-link>
        <mini-cart />
        <div class="ps-block--user-header">
            <div class="ps-block__left">
                <div class="text-center">
                    <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    offset-x
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <i class="icon-user"
                        v-bind="attrs"
                        v-on="on"
                        ></i>
                    </template>

                    <v-card>
                        <v-list>
                        <v-list-item>
                            <nuxt-link to="/account/change-profile">
                                Ubah Profil
                            </nuxt-link>
                        </v-list-item>

                        <v-list-item>
                            <nuxt-link to="/account/register">
                                Akun Seller
                            </nuxt-link>
                        </v-list-item>

                        <v-list-item>
                            <nuxt-link to="/account/register">
                                Logout
                            </nuxt-link>
                        </v-list-item>
                        </v-list>

                        <!-- <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            text
                            @click="menu = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            color="primary"
                            text
                            @click="menu = false"
                        >
                            Save
                        </v-btn>
                        </v-card-actions> -->
                    </v-card>
                    </v-menu>
                </div>
            </div>
            <div class="ps-block__right" v-if="$store.state.auth.isLoggedIn">
                <nuxt-link to="/account/login">
                    Login
                </nuxt-link>
                <nuxt-link to="/account/register">
                    Register
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import MiniCart from '~/components/shared/headers/modules/MiniCart';
import AccountLinks from '~/components/partials/account/modules/AccountLinks';
import { mapMutations } from 'vuex';

export default {
    name: 'HeaderActions2',
    components: { AccountLinks, MiniCart },
    data() {
        return {
            menu: false,
            fav: true,
            message: false,
            hints: true
        }
    },
    methods: {
    },
};
</script>

<style lang="scss" scoped>

</style>
