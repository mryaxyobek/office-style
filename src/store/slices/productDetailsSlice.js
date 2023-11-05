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
                let product = { ...action.payload, count1: 1, count2: 1, count3: 1, count4: 1, count5: 1 }
                state.products.push(product)
            } else {
                alert("Bu mahsulot allaqachon savatga qo'shilgan yoxmayo")
            };
        },
        plusCount1: (state, action) => {
            state.products.forEach((i) => {
                if (i.id === action.payload) {
                    i.count1++
                }
            })
        },
        minusCount1: (state, action) => {
            state.products.forEach(i => {
                if (i.id === action.payload) {
                    i.count1--
                }
            })
        },
        plusCount2: (state, action) => {
            state.products.forEach((i) => {
                if (i.id === action.payload) {
                    i.count2++
                }
            })
        },
        minusCount2: (state, action) => {
            state.products.forEach(i => {
                if (i.id === action.payload) {
                    i.count2--
                }
            })
        },
        plusCount3: (state, action) => {
            state.products.forEach((i) => {
                if (i.id === action.payload) {
                    i.count3++
                }
            })
        },
        minusCount3: (state, action) => {
            state.products.forEach(i => {
                if (i.id === action.payload) {
                    i.count3--
                }
            })
        },
        plusCount4: (state, action) => {
            state.products.forEach((i) => {
                if (i.id === action.payload) {
                    i.count4++
                }
            })
        },
        minusCount4: (state, action) => {
            state.products.forEach(i => {
                if (i.id === action.payload) {
                    i.count4--
                }
            })
        },
        plusCount5: (state, action) => {
            state.products.forEach((i) => {
                if (i.id === action.payload) {
                    i.count5++
                }
            })
        },
        minusCount5: (state, action) => {
            state.products.forEach(i => {
                if (i.id === action.payload) {
                    i.count5--
                }
            })
        },
    },
});

export const { addProduct, minusCount1, plusCount1, minusCount2, plusCount2, minusCount3, plusCount3, minusCount4, plusCount4, minusCount5, plusCount5 } = productSlice.actions;
export default productSlice.reducer;