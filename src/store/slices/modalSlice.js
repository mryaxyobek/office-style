import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
    callModalValue: false,
    sketchModalValue: false,
    questionModalValue: false,
    addReviewModalValue: false,
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

        // add review modal
        openAddReviewModal: (state) => {
            state.addReviewModalValue = true;
        },
        closeAddReviewModal: (state) => {
            state.addReviewModalValue = false;
        }
    },
});

export const { openCallModal, closeCallModal, openSketchModal, closeSketchModal, openQuestionModal, closeQuestionModal, openAddReviewModal, closeAddReviewModal } = modalSlice.actions;

export default modalSlice.reducer;