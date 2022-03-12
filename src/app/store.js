// Store is on central state of throat
import { configureStore } from "@reduxjs/toolkit";

// Api
import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
