const calculateAmount = obj =>
    Object.values(obj)
        .reduce((acc, { qty, price }) => acc + qty * price, 0)
        .toFixed(2);

export const state = () => ({
    total: 0,
    amount: 0,
    cartItems: [],
    loading: false,
    cartProducts: [],
});

export const mutations = {
    initCart(state, payload) {
        state.cartItems = payload.cartItems;
        state.amount = payload.amount;
        state.total = payload.total;
    },

    setLoading(state, payload) {
        state.loading = payload;
    },

    addItem(state, payload) {
        console.log('payload addItem -> ', payload);
        console.log('state.cartItems -> ', state.cartItems);
        if (state.cartItems !== null) {
            let total = 0;
            let amount = 0;
            state.cartItems.map(item => {
                total += item.qty;
                amount += item.totalPrice; 
                console.log('item --> ', item);
                state.total = total;
                state.amount = amount;
            });
        }
        // state.amount = calculateAmount(state.cartItems);
    },

    setCartProducts(state, payload) {
        state.cartProducts = payload;
    },

    setCartItem(state, payload) {
        state.cartItems = payload
    },

    removeItem: (state, payload) => {
        const index = state.cartItems.findIndex(item => item.id === payload.id);
        state.total = state.total - payload.quantity;
        state.cartItems.splice(index, 1);
        state.amount = calculateAmount(state.cartItems);
        if (state.cartItems.length === 0) {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
        }
    },

    increaseItemQuantity(state, payload) {
        let selectedItem = state.cartItems.find(item => item.id === payload.id);
        if (selectedItem) {
            selectedItem.quantity++;
            state.total++;
            state.amount = calculateAmount(state.cartItems);
        }
    },

    decreaseItemQuantity(state, payload) {
        let selectedItem = state.cartItems.find(item => item.id === payload.id);
        if (selectedItem && selectedItem.quantity > 1) {
            selectedItem.quantity--;
            state.total--;
            state.amount = calculateAmount(state.cartItems);
        }
    },

    clearCart: state => {
        state.cartItems = [];
        state.amount = 0;
        state.total = 0;
    }
};

export const actions = {

    async getCartProducts({ commit }, payload) {
        const reponse = await this.$buyerApi.getProductCart()
            .then(response => {
                console.log('response getCartProduct -> ', response);
                commit('setCartProducts', response);
                commit('setCartItem', response);
                commit('addItem', response);
                return response;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async addProductToCart({ commit, state }, payload) {
        const reponse = await this.$buyerApi.addProductToCart(payload)
            .then(response => {
                if (response) {
                    console.log('response --> ', response);
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }))
        return reponse;
    },

    async removeProductFromCart({ commit, state }, payload) {
        const reponse = await this.$buyerApi.deleteProductCart(payload)
            .then(response => {
                if (response) {
                    console.log('response remove -> ', response);
                }
            })
            .catch(error => ({ error: JSON.stringify(error)}))
        return reponse;
        // commit('removeItem', payload);
        // const cookieParams = {
        //     total: state.total,
        //     amount: state.amount,
        //     cartItems: state.cartItems
        // };

        // this.$cookies.set('cart', cookieParams, {
        //     path: '/',
        //     maxAge: 60 * 60 * 24 * 7
        // });
    },

    increaseCartItemQuantity({ commit, state }, payload) {
        commit('increaseItemQuantity', payload);
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    decreaseCartItemQuantity({ commit, state }, payload) {
        commit('decreaseItemQuantity', payload);
        const cookieParams = {
            total: state.total,
            amount: state.amount,
            cartItems: state.cartItems
        };

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    clearCart({ commit }) {
        commit('clearCart');
        const cookieParams = {
            total: 0,
            amount: 0,
            cartItems: []
        };
        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};
