import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

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
            <div>
                <Hamburger toggle={toggleMenu} active={active} />
                <div className={active ? 'side-nav open' : 'side-nav'}>
                    <Link to='/'>Home</Link>
                    <Link to='/standings'>Standings</Link>
                </div>
            </div>
        )
    }
}

export default Menu;