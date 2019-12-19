import React from 'react';
import Artists from '../Artists';
import Stages from '../Stages';
import Performances from '../Performances';
import ArtistBio from '../ArtistBio'; 
import StageInfo from '../StageInfo/StageInfo';
import Header from '../Header/Header';

class App extends React.Component {

  componentDidMount() {
    this.props.getStages();
    this.props.getArtists();
    this.props.getPerformances();
  }


  render() {
    return (
      <div>
        <Header> TITLE </Header>
        <Artists />
        <Stages />
        {/* <Performances titleStage = { false } /> */}
        <ArtistBio />
        <StageInfo />
      </div>
    );
  }
}

export default App;
