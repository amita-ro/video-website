import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Thumbnail from './components/Thumbnail';
import Video from './components/Video';
import './style.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <h1>DooSi Web Content</h1>
            <div id="thumbnails">
              <Thumbnail thumbnail="https://pbs.twimg.com/media/FxG2dkpaEAElGkC?format=jpg&name=large" videoId="1" title="LE SSERAFIM - Eve, Psyche & The Bluebeard’s wife" />
              <Thumbnail thumbnail="https://pbs.twimg.com/media/FxG2dkracAMVx1a?format=jpg&name=large" videoId="2" title="LE SSERAFIM - UNFORGIVEN (feat. Nile Rodgers)" />
              <Thumbnail thumbnail="https://pbs.twimg.com/media/FfMkwtrWQAIGfxK.jpg" videoId="3" title="LE SSERAFIM - ANTIFRAGILE " />
              <Thumbnail thumbnail="https://pbs.twimg.com/media/FnSehoFagAAGnE8?format=jpg&name=large" videoId="4" title="LE SSERAFIM - FEARLESS " />
            </div>
          </div>
        </Route>
        <Route path="/video/:videoId" render={(props) => <Video videoId={props.match.params.videoId} />} />
      </Switch>
    </Router>
  );
};

export default App;
