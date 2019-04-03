import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit*4,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FormRow(props) {
  const { classes, num } = props;
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Paper className={classes.paper} square>
          <div onClick={() => props.handleButtonKey(num)}>{num}</div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

class Home extends Component {
  state = {
    result: ""
  };

  handleChange = e => {
    this.setState({
      result: e.target.value
    });
  };

  handleClick = e => {
    const result = this.state.result;
    const numList = result.split(/[*/+-]+/).map(e => parseInt(e));
    console.log(numList);
    const operators = result.split(/[\d]+/);
    operators.pop();
    operators.shift();
    let result1 = numList[0];
    for (let i = 0; i < operators.length; i++) {
      // eslint-disable-next-line default-case
      switch (operators[i]) {
        case "+":
          result1 = result1 + numList[i + 1];
          break;
        case "*":
          result1 = result1 * numList[i + 1];
          break;
        case "/":
          result1 = result1 / numList[i + 1];
          break;
        case "-":
          result1 = result1 - numList[i + 1];
          break;
      }
    }
    this.setState({
      result: result1
    });
  };
  handleButtonKey = num => {
    this.setState(prevState => ({
      result: `${prevState.result}${num}`
    }));
  };

  render() {
    const { classes } = this.props;
    const { result } = this.state;
    return (
      <>
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              container
              xs={3}
              spacing={24}
              style={{ backgroundColor: "#ccc" }}
            >
              <Grid item xs={12} style={{ marginTop: "5px" }}>
                <TextField
                  className={classes.textField}
                  value={result}
                  margin="normal"
                  variant="standard"
                  fullWidth
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid
                justify="center"
                container
                xs={12}
                style={{ margin: "0px 2px 2px 2px" }}
              >
                <Grid container item xs={12}>
                  {[0, 1, 2, 3].map(e => (
                    <FormRow
                      classes={classes}
                      key={e}
                      num={e}
                      handleButtonKey={this.handleButtonKey}
                    />
                  ))}
                </Grid>

                <Grid container item xs={12}>
                  {[4, 5, 6, 7].map(e => (
                    <FormRow
                      classes={classes}
                      key={e}
                      handleButtonKey={this.handleButtonKey}
                      num={e}
                    />
                  ))}
                </Grid>
                <Grid container item xs={12}>
                  {[8, 9, "+", "-"].map(e => (
                    <FormRow
                      classes={classes}
                      key={e}
                      num={e}
                      handleButtonKey={this.handleButtonKey}
                    />
                  ))}
                </Grid>

                <Grid container item xs={12}>
                  {["*", "/"].map(e => (
                    <FormRow
                      classes={classes}
                      key={e}
                      num={e}
                      handleButtonKey={this.handleButtonKey}
                    />
                  ))}
                  <Grid item xs={6}>
                    <Paper className={classes.paper} square style={{backgroundColor:'gold'}}>
                      <div onClick={() => this.handleClick("=")}>{"="}</div>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}
export default withStyles(styles)(Home);
