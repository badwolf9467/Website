import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{
    render() {

        return(
            <nav>
                <ul className="navLinks">
                    <Link className='navStyle' to='/login'>
                        <li>Login</li>
                    </Link>
                    <Link className='navStyle' to='/register'>
                        <li>Register</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Nav;
