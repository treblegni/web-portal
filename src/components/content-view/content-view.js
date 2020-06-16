import React from 'react';
import CandidateEditor from '../candidate-editor/candidate-editor';
import './content-view.css';

const ContentView = () => {
    return (
        <div className='content-container'>
            <CandidateEditor/>
        </div>
    );
}

export default ContentView;