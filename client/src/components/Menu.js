import React, { Component } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    width: 35px;
    height: 5px;
    background-color: #ff9800;
    margin: 6px 0;
    transition: .4s;
`;

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        const { active } = this.state;
        this.setState({
            active: !active
        });
    }

    render() {
        const { active } = this.state;
        const { toggleMenu } = this;

        return (
            <div onClick={ toggleMenu }>
                <Bar className={ active ? 'top open' : '' } />
                <Bar className={ active ? 'middle open' : '' } />
                <Bar className={ active ? 'bottom open' : '' } />
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Menu;