import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Home extends Component {
  state = {
    numArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "*"],
    result: "",
    inputArray: []
  };

  handleChange = e => {
    this.setState({
      result: e.target.value
    });
  };

  handleClick = e => {
    const result = this.state.result;
    const numList = result.split(/[*/+-]+/).map(e=>parseInt(e));
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
    const { input, result, numArray } = this.state;
    return (
      <>
        <div style={{ width: "250px", marginLeft: "80px", marginTop: "100px" }}>
          <Card style={{ backgroundColor: "#ccc", height: "350px" }}>
            <Card.Body>
              <Row>
                <input
                  type="text"
                  onChange={this.handleChange}
                  value={result}
                  style={{ width: "100%", height: "100px" }}
                />
              </Row>
              <Row>&nbsp;</Row>
              <Row>
                <Col lg={6}>
                  <tr>
                    {[0, 1, 2, 3].map(e => (
                      <td>
                        <div
                          style={{
                            border: "1px solid",
                            padding: "2px 4px",
                            margin: "2px 4px"
                          }}
                          onClick={() => this.handleButtonKey(e)}
                        >
                          {e}
                        </div>
                      </td>
                    ))}
                  </tr>

                  <tr>
                    {[4, 5, 6, 7].map(e => (
                      <td>
                        <div
                          style={{
                            border: "1px solid",
                            padding: "2px 4px",
                            margin: "2px 4px"
                          }}
                          onClick={() => this.handleButtonKey(e)}
                        >
                          {e}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {[8, 9, "+", "-"].map(e => (
                      <td>
                        <div
                          style={{
                            border: "1px solid",
                            padding: "2px 4px",
                            margin: "2px 4px"
                          }}
                          onClick={() => this.handleButtonKey(e)}
                        >
                          {e}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {["*", "/"].map(e => (
                      <td>
                        <div
                          style={{
                            border: "1px solid",
                            padding: "2px 4px",
                            margin: "2px 4px"
                          }}
                          onClick={() => this.handleButtonKey(e)}
                        >
                          {e}
                        </div>
                      </td>
                    ))}
                  </tr>
                </Col>
                <Col>
                  <button
                    onClick={this.handleClick}
                    style={{ width: "100%", height: "150px" }}
                  >
                    =
                  </button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
export default Home;
