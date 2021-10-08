import createRepository from '../api/public-service.js'

export default (ctx, inject) => {

  const api = ctx.$axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  })
  const repoAxios = createRepository(api)
  inject('publicApi', repoAxios);
}
