import React from 'react';
import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';

// components
import Header from '../components/Header';
import Top from '../components/Top';
import Footer from '../components/Footer';

// modals
import CallModal from '../components/CallModal';
import SketchModal from '../components/SketchModal';
import QuestionModal from '../components/QuestionModal';
import AddReviewModal from '../components/AddReviewModal';

const MainRoot = () => {
    const { callModalValue } = useSelector((store) => store.callModalValue);
    const { sketchModalValue } = useSelector((store) => store.sketchModalValue);
    const { questionModalValue } = useSelector((store) => store.questionModalValue);
    const { addReviewModalValue } = useSelector((store) => store.questionModalValue);
    return (
        <div className='flex flex-col min-h-screen'>
            <Top />
            <Header />
            <main className='grow'>
                <Outlet />
                {
                    callModalValue && <CallModal />
                }
                {
                    sketchModalValue && <SketchModal />
                }
                {
                    questionModalValue && <QuestionModal />
                }
                {
                    addReviewModalValue && <AddReviewModal />
                }
            </main>
            <Footer />
        </div>
    )
};

export default MainRoot;