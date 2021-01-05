import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'navigationbar' };
    }
    render() {
        console.log('navbar present');
        return (
            <div>

                <ul>
                    <Link className="link" to="/Home">
                        <li id="Home">Dashboard</li>
                    </Link>
                    <Link className="link" to="/Evelyn">
                        <li id="Evelyn">Evelyn</li>
                    </Link>
                    <Link className="link" to="/Aranka">
                        <li id="Aranka">Aranka</li>
                    </Link>
                    <Link className="link" to="/Floris">
                        <li id="Floris">Floris</li>
                    </Link>
                    <Link className="link" to="/Hector">
                        <li id="Hector">Hector</li>
                    </Link>
                    <Link className="link" to="/Martina">
                        <li id="Martina">Martina</li>
                    </Link>
                    <Link className="link" to="/Maurits">
                        <li id="Maurits">Maurits</li>
                    </Link>
                    <Link className="link" to="/Rahima">
                        <li id="Rahima">Rahima</li>
                    </Link>
                    <Link className="link" to="/Sandra">
                        <li id="Sandra">Sandra</li>
                    </Link>
                    <Link className="link" to="/Wietske">
                        <li id="Wietske">Wietske</li>
                    </Link>
                    <Link className="link" to="/Storm">
                        <li id="Storm">Storm</li>
                    </Link>
                </ul>

            </div>
        )
    }
};

export default Nav;