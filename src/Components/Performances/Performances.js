import React from "react";


export default class Performances extends React.Component {

    componentDidMount() {
        this.props.handleLoad();
    }

    render() {
        const {performances, stages, titleStage, artists } = this.props;
        return(
            <div>
                <ul>
                    {
                        performances.map((performance) => {
        
                            let stageName = stages.find((stage)=> {
                                return stage.id === performance.stage_id;
                            })
                            
                            let artistName = artists.find((artist)=> {
                                return artist.id === performance.artist_id;
                            })
        
                            return (
        
                                <li key={ performance.id }>
                                    <div>
                                        <p>Start: { performance.starttime } </p>
                                        <p>End: { performance.endtime } </p>
                                    </div>
                                    <div>
                                        {/* <p>{ titleStage ? "Stage: " + stageName.name : "Artist: " + artistName.name }</p> */}
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


