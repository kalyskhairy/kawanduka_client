import createRequestOption from "./request-param-util";

export default $axios => ({
    getBuyerAddress() {
        console.log('masuk sini guys');
        return $axios.$get('/v1/buyer/address');
    },
    notificationBuyer(){
        console.log('masuk notif buyer');
        return $axios.$get('/v1/notification?type=buyer');
    },
    getDataAddress(){
     return $axios.$get('/v1/buyer/address')   
    },
    addProductToCart(payload){
        return $axios.$post('/v1/buyer/cart', payload);
    },
    getProductCart(){
        return $axios.$get('/v1/buyer/cart');
    },
    deleteProductCart(payload){
        return $axios.$delete(`/v1/buyer/cart?id=${payload}`);
    },
    addWishlist(payload) {
        return $axios.$post(`/v1/buyer/wishlist`, payload);
    },
    getWishlists() {
        return $axios.$get('/v1/buyer/wishlists');
    },
    deleteWishlist(id) {
        return $axios.$delete(`/v1/buyer/wishlist?productId=${id}`)
    },
    getProducts(query) {
        return $axios.$get(`/v1/products?${query}`);
    }
});