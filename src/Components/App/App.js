import React from 'react';
import Artists from '../Artists';
import Stages from '../Stages';
import Landing from '../Landing/Landing';
import ArtistBio from '../ArtistBio'; 
import StageInfo from '../StageInfo';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


class App extends React.Component {

  componentDidMount() {
    this.props.getStages();
    this.props.getArtists();
    this.props.getPerformances();
  }


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/bnckFE" component = { Landing } />
          <Route exact path="/bnckFE/artists" component={ Artists } />
          <Route exact path="/bnckFE/stages" component={ Stages }/>
          <Route exact path="/bnckFE/stages/:id" component={ StageInfo } />
          <Route exact path="/bnckFE/artists/:id" component={ ArtistBio } />
          {/* <Performances titleStage = { false } /> */}
        </div>
      </Router>
    );
  }
}

export default App;
