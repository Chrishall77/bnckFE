import React from "react";



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
        
                            return (!stageName || !artistName) ? null : (
        
                                <li className="artist" key={ performance.id }>
                                    <div className="buttonStyleFour timeButtonTime">
                                        <p>Start: { performance.starttime } </p>
                                        <p>End: { performance.endtime } </p>
                                    </div>
                                    <div className="buttonStyleFive timeButtonArtist">
                                        <p className="performanceButton">{ titleStage ? "Stage: " + stageName.name : "Artist: " + artistName.name }</p>
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



