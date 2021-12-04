<template lang="html">
    <header
        class="header header--standard header--market-place-2"
        id="headerSticky"
    >
        <div class="header__content">
            <div class="container">
                <div class="header__content-left">
                    <nuxt-link to="/" class="ps-logo">
                        <img src="~/static/img/kawanduka_logo_2.png" alt="martfury" />
                    </nuxt-link>
                    <div class="menu--product-categories">
                        <div class="menu__toggle">
                            <i class="icon-menu"></i>
                            <span> Shop by Department</span>
                        </div>
                        <div class="menu__content">
                            <menu-categories />
                        </div>
                    </div>
                </div>
                <div class="header__content-center">
                    <search-header />
                </div>
                <div class="header__content-right">
                    <header-actions2 />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import CurrencyDropdown from '~/components/shared/headers/modules/CurrencyDropdown';
import LanguageSwicher from '~/components/shared/headers/modules/LanguageSwicher';
import MenuCategories from '~/components/shared/menu/MenuCategories';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import HeaderActions2 from '~/components/shared/headers/modules/HeaderActions2';
import { stickyHeader } from '~/utilities/common-helpers';
export default {
    name: 'HeaderMarketPlace2',
    components: {
        HeaderActions2,
        SearchHeader,
        MenuCategories,
        LanguageSwicher,
        CurrencyDropdown
    },
    data() {
        return {
            menuMarket2: [
                {
                    text: 'All Categories',
                    url: '/shop'
                },
                {
                    text: 'Today Deals',
                    url: '/shop'
                },
                {
                    text: 'Electronics',
                    url: '/shop'
                },
                {
                    text: 'Clothing',
                    url: '/shop'
                },
                {
                    text: 'Computers',
                    url: '/shop'
                },
                {
                    text: 'Furnitures',
                    url: '/shop'
                },
                {
                    text: 'Mom & baby',
                    url: '/shop'
                },
                {
                    text: 'Book & More',
                    url: '/shop'
                }
            ]
        };
    },
    mounted() {
        window.addEventListener('scroll', stickyHeader);
    }
};
</script>

<style lang="scss" scoped></style>
