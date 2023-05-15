import axios from "axios";
import React from "react";

import './App.css';

class App extends React.Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response.data.slip.advice);
        this.setState({
          advice: response.data.slip.advice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchData}>
            <span>
              GIVE ME ADVICE!
            </span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
