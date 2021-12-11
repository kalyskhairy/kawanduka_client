import Repository, {
    serializeQuery,
    baseUrl
} from '~/repositories/Repository.js';

export const state = () => ({
    collections: null,
    categories: null,
    queries: null,
    products: null
});

export const mutations = {
    setCollections(state, payload) {
        state.collections = payload;
    },

    setCategories(state, payload) {
        state.categories = payload;
    },
    setQueries(state, payload) {
        state.queries = payload;
    },
    setProducts(state, payload) {
        state.products = payload;
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
                    console.log('log response -> ', response);
                    commit('setProducts', response);
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
    async getCategories({ commit }, payload) {
        const reponse = await Repository.get(
            // `${baseUrl}/product-categories?${query}`
            `${baseUrl}/v1/buyer/categories`
        )
            .then(response => {
                console.log('getCategories -> ', response);
                commit('setCategories', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
