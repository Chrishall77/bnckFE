import React from 'react';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Artists from './Components/Artists';
import Stages from './Components/Stages';
import Performances from './Components/Performances';
import ArtistBio from './Components/ArtistBio/ArtistBio';
// import BigLogger from './Components/Stages/BigLogger';

function App() {
  return (
    <div>
      <Header />
      <br />
      <Landing />
      <Artists />
      <Stages />
      <Performances />
      <ArtistBio />
      {/* <BigLogger /> */}
    </div>
  );
}

export default App;
