import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import Header from "../components/header";

class Segmentmenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: [
        { Label: "First Name", value: "First Name" },
        { Label: "Last Name", value: "Last Name" },
        { Label: "Grnder", value: "Grnder" },
        { Label: "Age", value: "Age" },
        { Label: "Account Name", value: "Account Name" },
        { Label: "City", value: "City" },
        { Label: "State", value: "State" },
      ],
      selectdmenu: [{}],
      optionvalue: [],
      optionstates: "",
      modelshow: false,
    };
  }
  addList = () => {
    this.setState({
      selectdmenu: [...this.state.selectdmenu, {}],
    });
  };
  removeList = (index) => {
    this.state.selectdmenu.splice(index, 1);
    this.setState({});
  };
  handelChange = (event) => {
    const value = event.target;
    this.setState({
      optionstates: value,
    });
  };
  handelOpen = () => {
    this.setState({
      modelshow: true,
    });
  };
  handleClose = () => {
    this.setState({
      modelshow: false,
    });
  };
  componentDidUpdate() {
    console.log(this.state.optionstates);
  }
  render() {
    const { option1, selectdmenu, optionstates, modelshow } = this.state;
    return (
      <div>
        <Header />
        <Container>
          <div className="pt-3">
            <Row>
              <Col md={4}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter the Name of the Segment</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name of the Segment"
                    />
                    <Form.Text>
                      To save Your Segment, You need to add the schemas to build
                      th Query
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <div className="row">
              <div className="col-md-4">
                <text>User Traits</text>
              </div>
              <div className="col-md-4">
                <text>Group Traits</text>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {selectdmenu.map(() => (
                <div className="row">
                  <br />
                  <div className="col-md-4">
                    <select
                      type="dropdown"
                      className="form-control"
                      onChange={this.handelChange}
                      value={optionstates}
                    >
                      {option1.map((item, i) => {
                        return (
                          <option key={i} value={item.value}>
                            {item.Label}
                          </option>
                        );
                      })}
                    </select>{" "}
                    <br />
                  </div>
                  <div className="col-md-4">
                    <button
                      className="btn btn-danger"
                      onClick={() => this.removeList()}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
<Row>
              <Col md={4}>
                <select
                  type="dropdown"
                  className="form-control"
                  onChange={this.handelChange}
                  value={optionstates}
                >
                  {option1.map((item, i) => {
                    return (
                      <option key={i} value={item.value}>
                        {item.Label}
                      </option>
                    );
                  })}
                </select>
              </Col>
            </Row>
            </div>

            
            <br />
          </div>

          <br />
          <text className="text-info" onClick={() => this.addList()}>
            + Add New Schema
          </text>
          <br />
          <button className="btn " onClick={this.handelOpen}>
            Save Segment
          </button>
        </Container>
        <Modal show={modelshow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Selected Schema</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card className="shadow">
              {option1.map((item, i) => {
                return (
                  <ul>
                    <li key={i} value={item.value}>
                      {item.Label}
                    </li>
                  </ul>
                );
              })}
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Segmentmenu;
