import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const BASE_URL = `https://dropshop.demka.online/api/`;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    headers.set('sHost', 'paw.shop');
    const access_token = getState().auth.access_token;
    const token = Cookies.get('access_token');
    if (access_token) {
      headers.set('Authorization', `Bearer ${access_token}`);
    } else if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
