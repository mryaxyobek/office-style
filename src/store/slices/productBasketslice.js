import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
    card: [],
};
export const cardSlice = createSlice({
    name: 'card',
    initialState: initialStateValues,
    reducers: {
        addCard: (state, action) => {
            const found = state.card.find(product => product.productId === action.payload.productId);
            if (!found) {
                let product = { ...action.payload };
                state.card.push(product);
            } else {
                alert("Bu mahsulot allaqachon savatga qo'shilgan")
            };
        },
        deleteCard: (state, action) => {
            const { id } = action.payload;
            state.card = state.card.filter(product => product.id !== id);
        },
    },
});

export const { addCard, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;