import React from 'react';
import Artists from '../Artists';
import Stages from '../Stages';
import Landing from '../Landing/Landing';
import Performances from '../Performances';

import ArtistBio from '../ArtistBio'; 
import StageInfo from '../StageInfo/StageInfo';
import Header from '../Header/Header';

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
          <Landing />
          <Route exact path="/artists" component={ Artists } />
          <Route exact path="/stages" component={ Stages }/>
          <Route exact path="/stages/:id" component={ StageInfo } />
          {/* <Performances titleStage = { false } /> */}
        </div>
      </Router>
    );
  }
}

export default App;
