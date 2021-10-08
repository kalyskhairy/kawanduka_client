export default function createRequestOption(params) {
    var options = new URLSearchParams();
    if( params ) {
        Object.keys(params).forEach(key => {
          options.set(key, params[key]);
        });
    }
    var request = {
        params: options
    }
    console.log('request -> ', request);
    return request;
  }
  