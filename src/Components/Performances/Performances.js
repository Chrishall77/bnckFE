import React from "react";



export default class Performances extends React.Component {


    componentDidMount() {
        this.props.handleLoad();
    }


    render() {
        const { performances, stages, titleStage, artists } = this.props;
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
        
                                <ul className="artist" key={ performance.id }>
                                    <div className="buttonStyleFour timeButtonTime">
                                        <li>Start: { formatDate(starttime) } </li>
                                        <li>End: { formatDate(endtime) } </li>
                                    </div>
                                    <div className="buttonStyleFive timeButtonArtist">
                                        <li>{ titleStage ? stageName.name : artistName.name }</li>
                                    </div>
                                </ul>
                            )
                        }
                    )

                    }
                </ul>
            </div>
        );
    }
}



