import React from "react";
import Performances from '../Performances';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';


const StageInfo = ({ location }) => {
    const { pathname } = location;
    const [ ,referrer, id ] = pathname.split("/")
    console.log(referrer)
    console.log(id)
    return (
        <>
            <Header>NAME</Header>
            <div className="stageInfoBackground stageInfoBackgroundPosition">
                <Performances 
                    referrer={ referrer }
                    id={ id }
                />
            </div>
        </>
    )
};

export default withRouter(StageInfo);

