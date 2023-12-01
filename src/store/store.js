import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './slices/productBasketslice';
import modalSlice from './slices/modalSlice';

export const store = configureStore({
    reducer: {
        card: cardSlice,
        callModalValue: modalSlice,
        sketchModalValue: modalSlice,
        questionModalValue: modalSlice,
        addReviewModalValue: modalSlice,
    },
});