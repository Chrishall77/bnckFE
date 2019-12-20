import React from "react";
import Performances from '../Performances';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';


const StageInfo = ({ location, stages }) => {
    const { pathname } = location;
    const [ ,,referrer, id ] = pathname.split("/")
    
   console.log(stages);

    const stageData = stages.find((stage)=> {
        return stage.id === +id
    })

    console.log(stageData)

    return (
        <>
            <Header>{ stageData ? stageData.name : "" }</Header>
            <div className={`stage${id}`}>
                <Performances 
                    referrer={ referrer }
                    id={ id }
                />
            </div>
        </>
    )
};

export default withRouter(StageInfo);

