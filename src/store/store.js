import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './slices/productBasketslice';

export const store = configureStore({
    reducer: {
        card: cardSlice
    },
})