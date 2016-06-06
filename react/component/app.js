import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="nav">
                    <IndexLink to="/react/" className="navItem">app</IndexLink>
                    <Link to="/react/Repos" className="navItem">Repos</Link>
                    <Link to="/react/About" className="navItem">About</Link>
                </div>
                
                {this.props.children}
            </div>
        )
    }
}