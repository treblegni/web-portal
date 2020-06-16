import React from 'react';
import Menu from '../components/menu/menu';
import NavBar from '../components/navbar/navbar';

class Test extends React.Component {
    navbar = {
        justifyContent: 'center'
    }

    render() {
        return (
            <div className='candidate-editor'>
                {/* <div>
                    <Menu/>
                </div>
                <NavBar style={this.navbar}>
                    <div className='nav-button-container'>
                        fsa
                    </div>
                </NavBar> */}
            </div>
        )
    }
}

export default Test;