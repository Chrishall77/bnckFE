import React from 'react';
import Artists from '../Artists';
import Stages from '../Stages';
import Performances from '../Performances';

class App extends React.Component {

  componentDidMount() {
    this.props.getStages();
    this.props.getArtists();
    this.props.getPerformances();
  }


  render() {
    return (
      <div>
        <Artists />
        <Stages />
        <Performances titleStage = { false } />
      </div>
    );
  }
}

export default App;
