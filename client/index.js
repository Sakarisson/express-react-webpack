import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './style/style.css';

import Home from './Components/Home';

class TestComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  async componentWillMount() {
    fetch('/api')
      .then(response => response.json())
      .then(data => this.setState({ value: data.greeting }));
  }

  render() {
    if (this.state.value === '') {
      return (<div>Loading...</div>);
    }
    return(
      <div>
        {this.state.value}
      </div>
    );
  }
}

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => (<Redirect to="/" />)} />
        </Switch>
      </div>
    </Router>
  )
}

render(
  <App />,
  document.querySelector('#root')
);
