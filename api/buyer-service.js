import createRequestOption from "./request-param-util";

export default $axios => ({
    getBuyerAddress() {
        console.log('masuk sini guys');
        return $axios.$get('/v1/buyer/address');
    }
});