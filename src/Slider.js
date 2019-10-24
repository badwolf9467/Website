import React, {Component} from 'react';
import Search from "./Search";


class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stickySearch: false,

        }
        this.handleScroll = this.handleScroll.bind(this);

    }


    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll (event) {
        let scrollTop = window.pageYOffset;

        let navBarHeight =window.innerHeight * 0.10;
        this.setState({stickySearch: scrollTop > navBarHeight });


    }
    render() {
        let stickySearch = {
            position: 'sticky',
            top: '0',
            height: '400px',
        };
        return(
            <div className="left-bar" style={this.state.stickySearch ? stickySearch : {}}>
                <Search handleInputChange = {this.props.handleInputChange}/>
            </div>
        )
    }
}

export default Slider;
