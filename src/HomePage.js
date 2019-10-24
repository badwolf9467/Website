import React, {Component} from 'react';
import PostData from './data_m'
import PlaceTile from "./PlaceTile";
import Slider from "./Slider";
import {Link} from 'react-router-dom';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };
        this.sliderChange = this.sliderChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: PostData
        });
    }


    sliderChange(e)
    {
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
            currentList = PostData;
            newList = currentList.filter(item => {
                const lc = item.name.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = PostData;
        }
        this.setState({
            filtered: newList
        });
    }


    render() {

        return(

            <div>
            <div className="slider" >
                <Slider handleInputChange={this.sliderChange}/>
            <div className="row">


            {this.state.filtered.map((postDetail, index) =>{
                return( <Link className="post" to={{
                        pathname: "/post/" + postDetail.id, detail:  postDetail
                }}>
                        <PlaceTile image={postDetail.picture} name={postDetail.name}/>
                    </Link>
                    )
                })
            }
            </div>
            </div>
            </div>
        )
    }
}

export default Home;
