<template lang="html">
    <div class="header__actions">
        <mini-cart v-if="isLoggedIn" />
        <!-- <mini-cart /> -->
        <nuxt-link to="/account/wishlist" class="header__extra">
            <!-- <i class="icon-heart" style="color:red;"></i> -->
            <i class="icon-heart"></i>
            <span>
                <i>{{ wishlistTotal }}</i>
            </span>
            
        </nuxt-link>
        <nuxt-link to="/account/notifications" class="header__extra">
            <i class="icon-alarm"></i>
            <span>
                <i>0</i>
            </span>
            
        </nuxt-link>
        
        <div class="ps-block--user-header">
            <div class="ps-block__left">
                <!-- <i class="icon-user" v-if="!isLoggedIn"><a @click.prevent="handleLogin"></a></i> -->
                <nuxt-link to="/account/login">
                    <i class="icon-user" v-if="!isLoggedIn">
                    </i>
                </nuxt-link>
                <div class="text-center" v-if="isLoggedIn">
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
                                <a href="http://localhost:3000/seller" target="_blank" rel="noopener">Akun Seller</a>
                            </v-list-item>

                            <v-list-item>
                                <a @click.prevent="handleLogout">
                                    Logout
                                </a>
                            </v-list-item>
                            </v-list>

                        </v-card>
                    </v-menu>
                </div>
            </div>
            <div class="ps-block__right" v-if="!$store.state.authen.isLoggedIn">
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
import { mapMutations, mapState } from 'vuex';

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
        handleLogout() {
            this.$store.dispatch('authen/setAuthStatus', false);
            this.$cookies.remove('auth');
            this.$auth.logout();
            // window.location.href = '/'
        }
    },
    computed: {
        // isLogin() {
        //     return this.$store.state.isLogin 
        // }
        // ...mapState({'authen', ['isLoggedIn']})
        ...mapState({
            isLoggedIn : state => state.authen.isLoggedIn,
            wishlistTotal: state => state.product.wishlistTotal
        })
    },
};
</script>

<style lang="scss" scoped>

</style>
