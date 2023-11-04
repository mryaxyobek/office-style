import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
    products: [],
};
export const productSlice = createSlice({
    name: 'products',
    initialState: initialStateValues,
    reducers: {
        addProduct: (state, action) => {
            const { id } = action.payload;
            const found = state.products.find(product => product.id === id);
            if (!found) {
                let product = { ...action.payload, count: 1 }
                state.products.push(product)
                console.log(initialStateValues.products);
            } else {
                alert("Bu mahsulot allaqachon savatga qo'shilgan yoxmayo")
            };
        }
    },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;