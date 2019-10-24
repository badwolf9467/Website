import React, {Component} from 'react';
import DetailSlider from "./DetailSlider";
import PostData from './data_m'
import PlaceTile from "./PlaceTile";
import {Link} from "react-router-dom";
import { Slide } from 'react-slideshow-image';


class Detail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };
    }

    componentDidMount() {
        this.setState({
            filtered: PostData
        });
    }

    getPostById (id){
        for (let i  = 0; i<PostData.length; i++ ){
            if(id === PostData[i].id){
                return PostData[i];
            }
        }

        return false;
    }

    getClosestMatches(num, arr){
        var curr = arr[0];
        var lst = [];
        var del = 0;
        var diff = Math.abs (num - curr.height);
        for (var i = 0; i<3; i++){
            for (var val = 0; val < arr.length; val++) {
                var newdiff = Math.abs (num - arr[val].height);
                if (newdiff < diff && newdiff !== 0) {
                    diff = newdiff;
                    curr = arr[val];
                    lst[i] = curr;
                    del = val;
                }
            }
            diff = 3000;
            arr.splice(del, 1);
        }

        return lst;
        }

    distance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p))/2;

        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }


    render() {
        let id = this.props.match.params.id;
        if (typeof this.props.location.detail !== 'undefined') {
            var object = this.props.location.detail;
        }else {
            var object = this.getPostById(id)
        }
        var name = object.name;
        var image = object.picture;
        var description = object.description;
        var country = object.country;
        var latitude = object.latitude;
        var longitude = object.longitude;
        var height = object.height;
        var array = PostData.slice(0);
        var similarList =  this.getClosestMatches(height, array);

        return(
            <div>
                <div className="slider">
                    <DetailSlider/>
                <div className="detailImage">
                    <img className="detailImage" src={image}/>
                    <p className="detailTitle">{name}</p>
                    <p className="detailDescription">{description}</p>
                    <h4>Country:</h4>
                    <p className="detailDescription">{country}</p>
                    <h4>latitude:</h4>
                    <p className="detailDescription">{latitude}</p>
                    <h4>longitude:</h4>
                    <p className="detailDescription">{longitude}</p>
                    <h4>height:</h4>
                    <p className="detailDescription">{height}</p>
                    <h2>Similar places:</h2>
                    <div className="row">
                        {similarList.map((similarList, index) =>{
                            return( <Link className="post" to={{
                                    pathname: "/post/" + similarList.id, detail:  similarList
                                }}>
                                    <PlaceTile image={similarList.picture} name={similarList.name}/>
                                </Link>
                            )
                        })
                        }
                    </div>
                    <h2>Nearby places:</h2>
                    <div className="ptaq123">
                        {PostData.map((Data, index) =>{
                            if (this.distance(latitude, longitude, Data.latitude, Data.longitude) < 7000){
                                return( <Link className="post" to={{
                                        pathname: "/post/" + Data.id, detail:  Data
                                    }}>
                                        <PlaceTile image={Data.picture} name={Data.name}/>
                                    </Link>
                                )
                            }
                        })
                        }
                    </div>
                </div>
                </div>
            </div>

        )
    }
}

export default Detail;
