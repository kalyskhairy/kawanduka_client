import axios from 'axios';

const baseDomain = 'https://beta.apinouthemes.com'; // Change your API here

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

// export const baseUrl = `${baseDomain}`;
export const baseUrl = `${process.env.BASE_URL}`;

export default axios.create({
    baseUrl,
    headers: customHeaders
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
};
