import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Config from "../config.json";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": Config.REACT_APP_SDK,
  "x-rapidapi-host": Config.REACT_APP_CRYPTO_NEWS_RAPIDAPI_HOST,
  "x-rapidapi-key": Config.REACT_APP_NEWS_RAPIDAPI_KEY,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: Config.REACT_APP_CRYPTO_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
