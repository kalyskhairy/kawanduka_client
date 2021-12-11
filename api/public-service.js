import createRequestOption from './request-param-util';
export default $axios => ({
    register(payload) {
        return $axios.$post('/v1/register', payload);
    },
    login (payload, header) {
        console.log('header -> ', header);
        return $axios.$post('/v1/login', payload, {
            headers: {
                'Authorization': `Basic ${header}`
            }
        });
    },
    religion() {
        return $axios.$get('/v1/religion');
    },
    getProfile(header) {
        return $axios.$get('/v1/profile', {
            headers: {
                'Authorization': `${header}`
            }
        });
    },
    getBanner() {
        return $axios.$get('/v1/banner');
    },
    editProfile(payload, header) {
        console.log('header -> ', header);
        return $axios.$put('/v1/profile', payload, {
            headers: {
                'Authorization': `${header}`
            }
        })
    },
    forgetPassword(params){
        // const defaultConfigs = createRequestOption(params.email);
        return $axios.$post(`/v1/forgot-password?email=${params.email}`)
        // return $axios.$post(`/v1/forgot-password`, defaultConfigs)
    },
    
   
})