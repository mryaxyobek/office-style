import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './slices/productBasketslice';
import productDetailsSlice from './slices/productDetailsSlice';

export const store = configureStore({
    reducer: {
        card: cardSlice,
        products: productDetailsSlice,
    },
})