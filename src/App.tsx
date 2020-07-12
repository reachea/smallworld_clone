import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FootNav from './FootNav';

// Component for Link
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import News from './components/News';
import Spaces from './components/Spaces';

const { Content } = Layout;

interface AppState {
  path: any;
}


class App<T> extends React.Component< T , AppState> {

  constructor(props: T) {
    super(props);
  }

  render() {
    return(
      <div className="App" >
        <Router>
          <Content >
            <div className="all-content">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/works" component={Works} />
                  <Route path="/news" component={News} />
                  <Route path="/spaces" component={Spaces} />
                  <Route path="/contact" component={Contact} />
                </Switch>
            </div>
          </Content>
          <FootNav />
        </Router>
    </div>
    );
  }
}

export default App;
