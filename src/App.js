import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { models: [] };
  }

  updateSelection = event => {
    const value = data.find(details => details.name === event.target.value);
    //console.log("updateselection :value",value)
    this.setState({
      value
    });
  };

  addbutton = () => {
    //   const a = {
    //     b: this.state.value

    // }
    this.props.dispatch({
      type: "ADD_MODEL",
      payload: this.state.value
    });
  };

  render() {
    //console.log("this.state.value is --",this.state.value)
    return (
      <div className="App">
        <main>
          <select value={this.state.x} onChange={this.updateSelection}>
            <option value="">-- Pick a model --</option>
            {Object.keys(data).map(details => (
              <option key={details} value={data[details].name}>
                {`${data[details].name} (${data[details].year})`}
              </option>
            ))}
          </select>
          <button onClick={() => this.addbutton()}>Add</button>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    x: state
  };
};

export default connect(mapStateToProps)(App);
