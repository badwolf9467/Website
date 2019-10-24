import React, {Component} from 'react';


class Formwrapper extends Component{
    constructor(props) {
        console.log(props);
        super(props);
    }


    render() {
        return(
            <div className='wrapper'>
                <div className='form-wrapper'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Formwrapper;
