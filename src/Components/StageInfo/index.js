import { connect } from 'react-redux';
import StageInfo from './StageInfo';

const mapStateToProps = ({ stages }) => {
    console.log("Stages: " + stages)
    return {
        stages: stages,
    }
}

export default connect(mapStateToProps)(StageInfo);