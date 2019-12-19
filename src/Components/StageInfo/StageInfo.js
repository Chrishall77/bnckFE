import React from "react";
import Performances from '../Performances';
import { withRouter } from 'react-router-dom';


const StageInfo = ({ history }) => console.log(history)||(
    
    <div className="stageBackground stageBackgroundPosition">
        <Performances 
            titleStage={ false }
        />
    </div>
);

export default withRouter(StageInfo);

