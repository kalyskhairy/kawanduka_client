<template lang="html">
    <table class="table ps-table--responsive ps-table--shopping-cart">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in cartProducts" :key="product.id">
                <td data-label="Product">
                    <product-shopping-cart :product="product" />
                </td>
                <td data-label="Price" class="price">{{ $helper.convertCurrency(product.price) }}</td>
                <td data-label="Quantity">
                    <div class="form-group--number">
                        <!-- <button class="up">+</button>
                        <button class="down">-</button> -->
                        <!-- <input
                            class="form-control"
                            type="text"
                            placeholder="1"
                            :value="product.qty"
                        /> -->
                        {{ product.qty }}
                    </div>
                </td>
                <td data-label="Total">
                    {{
                        $helper.convertCurrency((product.qty * product.price).toFixed(2))
                    }}
                </td>
                <td data-label="Action">
                    <a
                        href="#"
                        @click.prevent="handleRemoveProductFromCart(product)"
                    >
                        <i class="icon-cross"></i>
                    </a>
                </td>
            </tr>
            <tr v-if="cartProducts.length === 0">
                <td colspan="5">
                    <h4 class="text-center">Keranjang Belanja kosong</h4>
                </td>
            </tr>   
        </tbody>
    </table>
</template>


<script>
import { mapState } from 'vuex';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';

export default {
    name: 'TableShoppingCart',
    components: { ProductShoppingCart },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            cartProducts: state => state.cart.cartProducts
        })
    },
    methods: {
        async loadCartProducts() {
            // const cookieCart = this.$cookies.get('cart', { parseJSON: true });
            if (this.cartItems.length > 0) {
                await this.$store.dispatch('cart/getCartProducts');
            } else {
                this.$store.commit('cart/setCartProducts', null);
            }
        },
        async handleRemoveProductFromCart(product) {
            await this.$store.dispatch('cart/removeProductFromCart', product.id)
            this.loadCartProducts();
            // let response = await this.$buyerApi.deleteProductCart(product.id)
            // console.log('response --> ', response);
            // if (response) {
            //     this.loadCartProducts();
            // }
            // const cartItem = this.cartItems.find(
            //     item => item.id === product.id
            // );
            // this.$store.dispatch('cart/removeProductFromCart', cartItem);
            // this.loadCartProducts();
        }
    },
    mounted () {
        // this.loadCartProducts();
    },
};
</script>

<style lang="scss" scoped></style>
