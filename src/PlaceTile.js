import React, {Component} from 'react';



class PlaceTile extends Component{

    render() {
        var sectionStyle = {
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: 'cover',
        };

        return( <div className="column" style={sectionStyle}>
                <div className="opacity">
                    <div className='title'>
                    {this.props.name}
                    </div>
                </div>
        </div>
        )
    }
}

export default PlaceTile;
