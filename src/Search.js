import React, {Component} from 'react';


class Search extends Component{



    render() {

        return(
            <form>
                <input
                    className="search"
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.props.handleInputChange}
                    />
            </form>
        )
    }
}

export default Search;
