import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';

class TestComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
    setInterval(() => {
      let value = this.state.value;
      value++;
      this.setState({ value });
    }, 1000);
  }

  render() {
    return(
      <div>
        <p>This is a test component</p>
        {this.state.value}
      </div>
    );
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
