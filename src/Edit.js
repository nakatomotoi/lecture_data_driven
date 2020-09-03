import React from "react";
import logo from "./images/logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import color from "./images/onepiece_color.png";
import before from "./images/onepiece_before.png";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = (e) => {
    console.debug("叩いた2");
    this.setState({ open: true });
  };

  handleClose = (e) => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <DialogContent style={{ paddingTop: 8 }}>
              販売が完了しました
            </DialogContent>
          </Dialog>
          <Grid>
            <img src={before} className="App-logo" alt="logo" />
            <img src={color} className="App-logo" alt="logo" />
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleClick}
          >
            販売する
          </Button>
        </header>
      </div>
    );
  }
}

const Grid = styled.div`
  display: flex;
`;

// const StyledModal = styled(Modal)`
//   top: 50%;
//   left: 50%;
//   position: absolute;
//   transform: translate(-50%, -50%);
// `;
