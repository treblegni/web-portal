import React from 'react';

import './menu.css'

class Menu extends React.Component {
    state = {
        dem: false,
        rep: false,
        gre: false,
        lib: false,
        con: false
    }

    handleButtonClick = (e) => {
        const button = e.currentTarget.id;

        if (button === 'rep') this.setState({rep: !this.state.rep});
        if (button === 'dem') this.setState({dem: !this.state.dem});
        if (button === 'gre') this.setState({gre: !this.state.gre});
        if (button === 'lib') this.setState({lib: !this.state.lib});
        if (button === 'con') this.setState({con: !this.state.con});
    }

    render() {
        return (
            <div className='menu'>
                <div id='dem' className='menu-button' onClick={this.handleButtonClick}>
                    <span>Democratic Candidates</span>
                </div>
                {this.state.dem &&
                    <div className='menu-list'>
                        <div className='list-item'>
                            <span>+ Add Candidate</span>
                        </div>                    
                    </div>
                }
                <div id='rep' className='menu-button' onClick={this.handleButtonClick}>
                    <span>Republican Candidates</span>
                </div>
                {this.state.rep &&
                    <div className='menu-list'>
                        <div className='list-item'>
                            <span>+ Add Candidate</span>
                        </div>                    
                    </div>
                }
                <div id='gre' className='menu-button' onClick={this.handleButtonClick}>
                    <span>Green Candidates</span>
                </div>
                {this.state.gre &&
                    <div className='menu-list'>
                        <div className='list-item'>
                            <span>+ Add Candidate</span>
                        </div>                    
                    </div>
                }
                <div id='lib' className='menu-button' onClick={this.handleButtonClick}>
                    <span>Libertarian Candidates</span>
                </div>
                {this.state.lib &&
                    <div className='menu-list'>
                        <div className='list-item'>
                            <span>+ Add Candidate</span>
                        </div>                    
                    </div>
                }
                <div id='con' className='menu-button' onClick={this.handleButtonClick}>
                    <span>Constitutional Candidates</span>
                </div>
                {this.state.con &&
                    <div className='menu-list'>
                        <div className='list-item'>
                            <span>+ Add Candidate</span>
                        </div>                    
                    </div>
                }
            </div>
        )
    }
}

export default Menu;