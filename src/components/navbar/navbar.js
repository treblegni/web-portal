import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';

const NavBar = (props) => {
    if (props.children) {
        return (
            <div className='navbar' style={props.style}>
                {props.children}
            </div>
        );
    }
    else {
        return (
            <div className='navbar'>
                <div className='nav-title-container'>
                    <span>
                        Candidate Matchmaker Portal
                    </span>
                </div>
                <div className='nav-button-container'>
                    <Link to='/candidates'>
                        <button type='button' className='nav-button'>
                            <span>Candidates</span>
                        </button>
                    </Link>
                    <Link to='/questions'>
                        <button type='button' className='nav-button'>
                            <span>Questions</span>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

// ReactDOM.render(element, document.getElementById('root'));

// class NavBar extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.children ? <div className='navbar'> {this.props.children} </div> :
                    
//                 }
//             </div>
//         )
//     }
// }

export default NavBar;