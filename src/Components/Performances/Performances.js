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

                            let formatDate = (date) => {

                                let hours = date.getHours();
                                let minutes = date.getMinutes();
                                let minuteFormat = minutes < 10 ? "0" + minutes : minutes;
                                let hourFormat = hours < 10 ? "0" + hours : hours;

                                return `${hourFormat} : ${minuteFormat}`

                            }

                            let starttime = new Date(performance.starttime);
                            let endtime = new Date(performance.endtime);
                            

                            return (

        
                                <li className="artist" key={ performance.id }>
                                    <div className="buttonStyleFour timeButtonTime">
                                        <p>{ formatDate(starttime) }
                                        <br/>
                                        { formatDate(endtime) }</p>
                                    </div>
                                    <div className="buttonStyleFive timeButtonArtist">
                                        <p>{ titleStage ? stageName.name : artistName.name }</p>
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



