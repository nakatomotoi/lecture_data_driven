import React from "react";
import logo from "./images/logo.svg";
import before from "./images/onepiece_before.png";
import "./App.css";
import Button from "@material-ui/core/Button";
import history from "./history";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: false,
    };
  }

  handleClick = (e) => {
    console.debug("叩いた");
    this.setState({ loading: true });
    setInterval(() => {
      this.setState({ loading: false, success: true });
      history.push("/edit");
    }, 1000);
  };

  render() {
    const img = before;
    let { loading } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {loading ? <CircularProgress /> : null}
          <img src={img} className="App-logo" alt="logo" />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            カラーリングを開始
          </Button>
        </header>
      </div>
    );
  }
}
