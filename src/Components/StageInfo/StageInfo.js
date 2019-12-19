import React from "react";
import Performances from '../Performances';
import { withRouter } from 'react-router-dom';


const StageInfo = ({ history }) => console.log(history)||(
    
    <div className="stageInfoBackground stageInfoBackgroundPosition">
        <Performances 
            titleStage={ false }
            className="stageInfoBackground stageInfoBackgroundPosition"
        />
    </div>
);

export default withRouter(StageInfo);

