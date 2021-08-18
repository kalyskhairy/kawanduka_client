<template lang="html">
    <ul>
        <template v-for="link in tempLinks">
            <li :key="link.text" :class="link.active ? 'active' : ''">
                <nuxt-link :to="link.url">
                    <i :class="link.icon"></i>
                    {{ link.text }}
                </nuxt-link>
            </li>
        </template>
        <li>
            <nuxt-link to="/account/my-account">
                <a>
                    <i class="icon-power-switch"></i>
                    Logout
                </a>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'AccountLinks',
    props: {
        links: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            tempLinks: [
                {
                    text: 'Pesanan Saya',
                    url: '/account/user-information',
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
        }
    },
};
</script>

<style lang="scss" scoped></style>
