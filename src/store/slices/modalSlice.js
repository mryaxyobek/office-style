import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
    callModalValue: false,
    sketchModalValue: false,
    questionModalValue: false,
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

        // question modal
        openQuestionModal: (state) => {
            state.questionModalValue = true;
        },
        closeQuestionModal: (state) => {
            state.questionModalValue = false;
        },
    },
});

export const { openCallModal, closeCallModal, openSketchModal, closeSketchModal, openQuestionModal, closeQuestionModal } = modalSlice.actions;

export default modalSlice.reducer;