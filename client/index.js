import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';

class TestComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  componentWillMount() {
    fetch('/api')
      .then(response => response.json())
      .then(data => this.setState({ value: data.greeting }));
  }

  render() {
    if (this.state.value !== '') {
      return(
        <div>
          {this.state.value}
        </div>
      );
    } else {
      return (<div>Loading...</div>);
    }
  }
}

const App = () => {
  return (
    <div>
      <TestComponent />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
