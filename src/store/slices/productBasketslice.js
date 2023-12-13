import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialStateValues = {
    card: [],
};
const productAddedNotification = () => toast("Mahsulot savatchaga qo'shildi!");
const productAvailabilityNotification = () => toast("Mahsulot allaqachon savatchaga qo'shilgan!");
const productRemovalNotification = () => toast("Mahsulot savatchadan olib tashlandi!");
export const cardSlice = createSlice({
    name: 'card',
    initialState: initialStateValues,
    reducers: {
        addCard: (state, action) => {
            const found = state.card.find(product => product.productId === action.payload.productId);
            if (!found) {
                let product = { ...action.payload };
                state.card.push(product);
                productAddedNotification();
            } else {
                productAvailabilityNotification();
            };
        },
        deleteCard: (state, action) => {
            const { id } = action.payload;
            state.card = state.card.filter(product => product.id !== id);
            productRemovalNotification()
        },
    },
});

export const { addCard, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;