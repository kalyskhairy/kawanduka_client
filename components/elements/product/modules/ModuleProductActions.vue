<template lang="html">
    <ul class="ps-product__actions">
        <li>
            <a
                to="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Add to cart"
                @click.prevent="handleAddToCart"
            >
                <i class="icon-bag2"></i>
            </a>
        </li>
        <li>
            <a
                to="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Quick View"
                @click.prevent="handleOpenQuickviewDialog"
            >
                <i class="icon-eye"></i>
            </a>
        </li>
        <li>
            <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Add to wishlist"
                @click.prevent="handleAddItemToWishlist"
            >
                <i class="icon-heart" :style="isWishlist ? 'color:red;' : ''"></i>
            </a>
        </li>
        <li>
            <a
                to="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Compare"
                @click.prevent="handleAddItemToCompare"
            >
                <i class="icon-chart-bars"></i>
            </a>
        </li>
    </ul>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'ModuleProductActions',
    props: {
        product: {
            type: Object,
            default: () => {
            }
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            currency: state => state.app.currency
        }),
        isWishlist() {
            if (this.product.isWishlist) {
                return true;
            }
            return false;
        }
    },
    methods: {
        async handleAddToCart() {
            let item = {
                productId: this.product.id,
                qty: 1,
            };
            this.$store.dispatch('cart/addProductToCart', item);
            this.$store.dispatch('cart/getCartProducts')
            this.$notify({
                group: 'addCartSuccess',
                title: 'Success!',
                text: `${this.product.name} has been added to your cart!`
            });
        },

        async handleAddItemToWishlist() {
            if (this.product.isWishlist) {

                await this.$store.dispatch('product/removeWishlistProduct', this.product.id)

                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Remove to wishlist!',
                    text: `${this.product.name} has been remove to your wishlist !`
                });
            } else {

                await this.$store.dispatch('product/addWishlistProduct', this.product.id);
    
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Add to wishlist!',
                    text: `${this.product.name} has been added to your wishlist !`
                });
            }
            
            await this.$store.dispatch('product/getWishlistProducts');
            // await this.$store.dispatch('product/getProducts', {
            //     productName: '',
            //     religionId : '',
            //     areaId     : '',
            //     store_id   : '',
            //     sort       : 'asc',
            //     page       : 1,
            //     limit      : 10
            // });
        },

        handleAddItemToCompare() {
            let item = {
                id: this.product.id
            };
            this.$store.dispatch('compare/addItemToCompare', item);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Add to compare!',
                text: `${this.product.title} has been added to your compare !`
            });
        },

        async getCartProduct(products) {
            let listOfIds = [];
            products.forEach(item => {
                listOfIds.push(item.id);
            });
            const response = await this.$store.dispatch(
                'cart/getCartProducts',
                listOfIds
            );
            if (response) {
                this.$store.commit('cart/setLoading', false);
            }
        },

        handleOpenQuickviewDialog() {
            const payload = {
                isQuickview: true
            }
            this.$emit('toParent', payload)
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
