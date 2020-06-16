import React from 'react';
import Menu from '../menu/menu';
import NavBar from '../navbar/navbar';

import './candidate-editor.css'

class CandidateEditor extends React.Component {
    navbar = {
        backgroundColor: 'grey',
        justifyContent: 'center'
    }

    container = {
        position: 'static'
    }

    render() {
        return (
            <div className='candidate-editor'>
                <Menu/>
                <div className='content-container'>
                    <NavBar style={this.navbar}>
                        <div className='nav-button-container' style={this.container}>
                            <div className='nav-button'>
                                Profile
                            </div>
                            <div className='nav-button'>
                                Analytics
                            </div>
                        </div>
                    </NavBar>
                    <div className='content-view'>
                        Candidate Editor
                    </div>
                </div>
                
            </div>
        )
    }
}

export default CandidateEditor;