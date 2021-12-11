import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';

const getWishlist = _ => {
    let response = this.$buyerApi.getWishlishtProducts();
    return response;
} 

export const state = () => ({
    product: null,
    products: null,
    searchResults: null,
    wishlistItems: null,
    compareItems: null,
    brands: null,
    categories: null,
    total: 0,
    wishlistTotal: 0
});

export const mutations = {
    setProducts(state, payload) {
        state.products = payload;
    },

    setWishlistItems(state, payload) {
        state.wishlistItems = payload;
    },
    setCompareItems(state, payload) {
        state.compareItems = payload;
    },

    setProduct(state, payload) {
        state.product = payload;
    },

    setBrands(state, payload) {
        state.brands = payload;
    },

    setCategories(state, payload) {
        state.categories = payload;
    },

    setSearchResults(state, payload) {
        state.searchResults = payload;
    },

    setTotal(state, payload) {
        state.total = payload;
    },

    setWishlistTotal(state, payload) {
        state.wishlistTotal = payload
    }
};

export const actions = {
    async getProducts({ commit }, payload) {
        let query = '';
        console.log('collection get product payload -> ', payload);
        Object.keys(payload).forEach(x => {
            if (query === '') {
                query = `${x}=${payload[x]}`
            } else {
                query = query + `&${x}=${payload[x]}`
            }
        })
        if (this.$auth.strategy.token.get()) {
            console.log('masuk sini ada token');
            const reponse = await this.$buyerApi.getProducts(query)
                .then(response => {
                    console.log('response ==> ' , response);
                    commit('setProducts', response);
                    commit('setSearchResults', response);
                    return response.data;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        } else {
            console.log('masuk sini ga ada token');
            const reponse = await Repository.get(`${baseUrl}/v1/products?${query}`)
                .then(response => {
                    console.log('log response -> ', response);
                    commit('setProducts', response.data);
                    return response.data.data;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    },

    async getTotalRecords({ commit }, payload) {
        const reponse = await Repository.get(`${baseUrl}/products/count`)
            .then(response => {
                commit('setTotal', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsById({ commit }, payload) {
        const reponse = await Repository.get(`${baseUrl}/v1/product?id=${payload}`)
            .then(response => {
                commit('setProduct', response.data);
                console.log('response getProductID-> ', reseponse);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductByKeyword({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getWishlistProducts({ commit }, payload) {
        console.log('==== GET WISHLIST ====');
        const reponse = await this.$buyerApi.getWishlists()
                        .then(response => {
                            commit('setWishlistItems', response)
                            console.log('response get wishlist -> ', response);
                            commit('setWishlistTotal', response.length)
                            return response;
                        })
                        .catch(error => ({ error : JSON.stringify(error) }))
        return reponse;
    },
    async addWishlistProduct({ commit }, payload) {
        let reponse = await this.$buyerApi.addWishlist({
            productId : payload
        }).then(response => {
            console.log('addWishlist --> ', response)
        }).catch(error => ({ error: JSON.stringify(error) }))

    },
    async removeWishlistProduct({ commit }, payload) {
        let reponse = await this.$buyerApi.deleteWishlist(payload)
                    .then(response => {
                        console.log('remove wishlist -> ', response);
                    }).catch(error => ({ error: JSON.stringify(error) }))
    },
    async getCompareProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item}`;
            } else {
                query = query + `&id=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/products?${query}`)
            .then(response => {
                commit('setCompareItems', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductBrands({ commit }) {
        const reponse = await Repository.get(`${baseUrl}/brands`)
            .then(response => {
                commit('setBrands', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductCategories({ commit }) {
        const reponse = await Repository.get(`${baseUrl}/product-categories`)
            .then(response => {
                commit('setCategories', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsByBrands({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/brands?${query}`)
            .then(response => {
                if (response.data) {
                    const brands = response.data;
                    let products = [];
                    brands.forEach(brand => {
                        brand.products.forEach(product => {
                            products.push(product);
                        });
                    });
                    commit('setProducts', products);
                    commit('setTotal', products.length);
                    return products;
                } else {
                    return null;
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getProductsByPriceRange({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
