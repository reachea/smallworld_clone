import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { withTranslation, WithTranslation } from 'react-i18next';

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

const AppNode = styled.div`
  font-family: sans-serif;
`;


class App extends React.Component<WithTranslation> {

  render() {

    return(
      <AppNode style={{ fontFamily: "Quicksand"  }} >
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
    </AppNode>
    );
  }
}

export default withTranslation()(App);
