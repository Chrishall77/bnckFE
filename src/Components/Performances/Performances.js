import React from "react";
import { Link } from "react-router-dom";



export default class Performances extends React.Component {


    componentDidMount() {
        this.props.handleLoad();
    }


    render() {

        const {performances, stages, titleStage, artists, id } = this.props;

        return(
            <div className={`performanceBackground stage${id}`}>
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
                            let endtime = new Date(performance.starttime);
                            console.log(starttime);
                            console.log(endtime);
                            

                            return (

        
                                <li className="artist" key={ performance.id }>
                                    <div className="buttonStyleFour timeButtonTime">
                                        <p>Start: { formatDate(starttime) } </p>
                                        <p>End: { formatDate(endtime) } </p>
                                    </div>
                                    <div className="buttonStyleFive timeButtonArtist">
<<<<<<< HEAD
                                    <Link to = { `../artists/${ performance.artist_id }` } > 
                                        <p>{ titleStage ? "Stage: " + stageName.name : "Artist: " + artistName.name }</p>
                                    </Link>
=======
                                        <p>{ titleStage ? stageName.name : artistName.name }</p>
>>>>>>> master
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



