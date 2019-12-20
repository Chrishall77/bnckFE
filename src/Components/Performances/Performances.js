import React from "react";



export default class Performances extends React.Component {


    componentDidMount() {
        this.props.handleLoad();
    }


    render() {
        const {performances, stages, titleStage, artists } = this.props;
        return(
            <div>
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
                            

                            return (
        
                                <li className="artist" key={ performance.id }>
                                    <div className="buttonStyleFour timeButtonTime">
                                        <p>Start: { formatDate(starttime) } </p>
                                        <p>End: { formatDate(endtime) } </p>
                                    </div>
                                    <div className="buttonStyleFive timeButtonArtist">
                                        <p>{ titleStage ? "Stage: " + stageName.name : "Artist: " + artistName.name }</p>
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



