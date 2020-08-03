import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FootNav from './FootNav';

// Component for Link
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import News from './components/News';
import Spaces from './components/Spaces';

// Styled Components
import {ContentNode, AllContent} from './styled-components/Style';

class App<T> extends React.Component<T> {

  render() {
    return(
      <div className="App" >
        <Router>
          <ContentNode >
            <AllContent>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/works" component={Works} />
                  <Route path="/news" component={News} />
                  <Route path="/spaces" component={Spaces} />
                  <Route path="/contact" component={Contact} />
                </Switch>
            </AllContent>
          </ContentNode>
          <FootNav />
        </Router>
    </div>
    );
  }
}

export default App;
