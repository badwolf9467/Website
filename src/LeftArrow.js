import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import row from './download.png'
class LeftArrow extends Component{

    render() {

        return(
            <div className="arrow">
                <Link to='/'>
                    <img src={row}/>
                </Link>
            </div>

        )
    }
}

export default LeftArrow;
