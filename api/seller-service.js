import createRequestOption from "./request-param-util";

export default $axios => ({
    getProducts(params) {
        console.log('masuk sini guys');
        return $axios.$get(`/v1/seller/products?${params}`);
    }
});