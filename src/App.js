import React from 'react';
import NavBar from './components/navbar/navbar';
import Menu from './components/menu/menu'
import ContentBox from './components/contentbox/contentbox';

import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <div className='editor-view'>
                <Menu/>
                <div className='content-grid'>
                    <div className='grid-item'>
                        <ContentBox/>
                    </div>
                    <div className='grid-item'>
                        <ContentBox/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
