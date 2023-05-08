import 'App.css';
import Intro from 'components/Intro';
import Content from 'components/Content';
import Contact from 'components/Contact';
import Work from 'components/Work';
import { useState } from 'react';

function App() {



  return (
    <div className="App">
      <Intro />
      <Content />
    </div>
  );
}

export default App;
