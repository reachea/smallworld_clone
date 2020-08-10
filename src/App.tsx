import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

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


const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.theme.mode === 'dark'? '#112a45' : 'white' };

    color: ${props => props.theme.mode === 'dark' ? '#f0f2f5' : '#212123' };

  }
`;

interface AppState {
  mode: any;
}

class App extends React.Component<WithTranslation, AppState> {

  protected themeMode: any

  constructor (props: any) {
    super(props);

    this.themeMode = localStorage.getItem('themeMode') === 'true';

    this.state = { mode: this.themeMode? 'dark' : 'light' };

    this.themeChange = this.themeChange.bind(this);
  }

  themeChange = (theme: any) => {
    this.setState((e) => ({ mode: theme? 'dark' : 'light'}));
    localStorage.setItem('themeMode', theme);
  }

  componentDidMount() {
    const themeMode = localStorage.getItem('themeMode') === 'true';
    this.themeMode = themeMode;
  }

  render() {

    return(
      <AppNode style={{ fontFamily: "Quicksand"  }} >
        <Router>
        <ThemeProvider theme={ this.state } >
          <>
          <GlobalStyle />
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
            <FootNav theme={this.themeMode} onThemeChange={this.themeChange} />
          </>
        </ThemeProvider>
        </Router>
    </AppNode>
    );
  }
}

export default withTranslation()(App);
