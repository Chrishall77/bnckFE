import React from "react";
import { Link } from "react-router-dom";



export default class Performances extends React.Component {


    componentDidMount() {
        this.props.handleLoad();
    }


    render() {

        const {performances, stages, titleStage, referrer, artists, id } = this.props;

        return(
            <div className="performanceBackground">
                <ul className="performanceWrapper">
                    {
                        performances.map((performance) => {
        
                            let stageName = stages.find((stage)=> {
                                return stage.id === performance.stage_id;
                            })
                            
                            let artistName = artists.find((artist)=> {
                                return artist.id === performance.artist_id;
                            })

                            let formatDate = (date) => {

                                return date.toLocaleTimeString();

                            }

                            let starttime = new Date(performance.starttime);
                            let endtime = new Date(performance.endtime);
                            

                            return (

        
                                <li className="artist" key={ performance.id }>
                                    <div className="buttonStyleFour timeButtonTime">
                                        <p>Start: { formatDate(starttime) } </p>
                                        <p>End: { formatDate(endtime) } </p>
                                    </div>
                                    <div className="buttonStyleFive timeButtonArtist">
                                    <Link to = { `../artists/${ performance.artist_id }` } > 
                                         <p>{ referrer === "artists" ? stageName.name : artistName.name }</p>
                                    </Link>
                                    </div>
                                </li>
                            )
                        }
                    )

                    }
                </ul>
            </div>
        );
    }
}



