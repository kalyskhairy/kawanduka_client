export const state = () => ({
    appDrawer: false,
    currentDrawerContent: null,
    currency: '$',
    isDrawer: false,
    isSearch: false
});

export const mutations = {
    setAppDrawer(state, payload) {
        state.appDrawer = payload;
    },

    setCurrentDrawerContent(state, payload) {
        state.currentDrawerContent = payload;
    },

    setCurrency(state, payload) {
        state.currency = payload;
    },

    toggleDrawer(state, payload) {
        state.isDrawer = payload;
    },

    toggleSearch(state, payload) {
        state.isSearch = payload;
    }
};

export const actions = {
    changeCurrency({ commit, state }, payload) {
        commit('setCurrency', payload);
        const cookieParams = {
            data: state.currency
        };

        this.$cookies.set('currency', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};
