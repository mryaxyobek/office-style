import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
    card: [],
    // notification: false,
};
export const cardSlice = createSlice({
    name: 'card',
    initialState: initialStateValues,
    reducers: {
        addCard: (state, action) => {
            const { id } = action.payload;
            const found = state.card.find(product => product.id === id);
            if (!found) {
                let product = { ...action.payload, count: 1 }
                state.card.push(product)
            } else {
                // state.notification = true;
                // setTimeout(function () {
                //     state.notification = false;
                // }, 1000)
                alert("Bu mahsulot allaqachon savatga qo'shilgan")
            }
            ;
        },
        deleteCard: (state, action) => {
            const { id } = action.payload;
            state.card = state.card.filter(product => product.id !== id);
        },
    },
});

export const { addCard, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;