export default $axios => ({
    register(payload) {
        console.log('masuk sini');
        return $axios.$post('/v1/register', payload)
    }
})