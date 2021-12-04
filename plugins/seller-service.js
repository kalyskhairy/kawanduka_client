import createRepository from '../api/seller-service.js'


export default (ctx, inject) => {

  const api = ctx.$axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
  api.interceptors.request.use(request => {
    request.headers['Authorization'] = ctx.$auth.strategy.token.get();
    return request;
  });
  const repoAxios = createRepository(api)

  // const repositories = {
  //   faq: repoAxios,
  // }

  inject('sellerApi', repoAxios);
}
