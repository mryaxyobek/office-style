import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
    callModalValue: false,
    sketchModalValue: false,
};
export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialStateValues,
    reducers: {
        openCallModal: (state) => {
            state.callModalValue = true;
        },
        closeCallModal: (state) => {
            state.callModalValue = false;
        },

        // sketch
        openSketchModal: (state) => {
            state.sketchModalValue = true;
        },
        closeSketchModal: (state) => {
            state.sketchModalValue = false;
        },
    },
});

export const { openCallModal, closeCallModal, openSketchModal, closeSketchModal } = modalSlice.actions;

export default modalSlice.reducer;