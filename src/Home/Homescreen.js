<<<<<<< HEAD
import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Row,
} from "react-bootstrap";
import Header from "../components/header";

class Homescreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: [
        { Label: "First Name", value: "First Name" },
        { Label: "Last Name", value: "Last Name" },
        { Label: "Gender", value: "Gender" },
        { Label: "Age", value: "Age" },
        { Label: "Account No", value: "Account No" },
        { Label: "City", value: "City" },
        { Label: "State", value: "State" },
      ],
      option2: [   
        { Label: "First Name", value: "First Name" },
        { Label: "Last Name", value: "Last Name" },
        { Label: "Gender", value: "Gender" },
        { Label: "Age", value: "Age" },
        { Label: "Account No", value: "Account No" },
        { Label: "City", value: "City" },
        { Label: "State", value: "State" },   
      ],
      option1copy: [ { Label: "First Name", value: "First Name" },
      { Label: "Last Name", value: "Last Name" },
      { Label: "Gender", value: "Gender" },
      { Label: "Age", value: "Age" },
      { Label: "Account No", value: "Account No" },
      { Label: "City", value: "City" },
      { Label: "State", value: "State" },  ],
      suboption: [
        "First Name",
        "Last Name",
        "Gender",
        "Age",
        "Account No",
        "City",
        "State",
      ],
      selectdmenu: [{}],
      optionvalue: [],
      optionstates: "",
      modelshow: false,
    };
  }
  addList = () => {
    this.setState({
    });
  };
  removeList = (index) => {
    this.state.selectdmenu.splice(index, 1);
    this.setState({});
  };
  handelChange = (event) => {
    const { value } = event.target;
    let mainoption = [ { Label: "First Name", value: "First Name" },
    { Label: "Last Name", value: "Last Name" },
    { Label: "Gender", value: "Gender" },
    { Label: "Age", value: "Age" },
    { Label: "Account No", value: "Account No" },
    { Label: "City", value: "City" },
    { Label: "State", value: "State" },  ];
    //  mainoption.push(value);
    for (let i = 0; i < this.state.suboption.length; i++) {
      if (this.state.suboption[i] === value) {
        mainoption.splice(i, 1);

        this.setState({
          option1copy: mainoption,
          selectdmenu: [...this.state.selectdmenu, {}],

        });
      }
    }
    this.setState({
      optionstates: value,
    });
    console.log("mainoption", mainoption);
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

  openmenu() {
    document.getElementById("mySidenav").style.width = "750px";
    document.getElementById("rm_blur").style.filter = "blur(8px)";
  }
  closemenu() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("rm_blur").style.filter = "none";
  }
  componentDidUpdate() {
     console.log("optionstates`",this.state.option1copy);
  }
  render() {
    const { option1,option2, selectdmenu, optionstates, modelshow,option1copy } = this.state;
    return (
      <div>
        <div id="rm_blur">
          <Header />
          
        </div>
        <Modal show={modelshow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Selected Schema</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card className="shadow">
              {option1copy.map((item, i) => {
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
        <div className="container t-20">
          <button className="btn" onClick={this.openmenu}>
            {" "}
            &#60; Saving segment
          </button>
        </div>

        <div id="mySidenav" className="sidenav">
          <div className="cl-header-pop-up">
            <Nav className="bg-info" activeKey="#">
              <Nav.Item>
                <Nav.Link
                  href="#"
                  className="text-light"
                  onClick={this.closemenu}
                >
                  {" "}
                  &times; Save Segment
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Container id="removeblure">
            <div className="p-3">
              <Row>
                <Col md={6} >
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Enter the Name of the Segment</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name of the Segment"
                      />
                      <Form.Text>
                        To save Your Segment, You need to add the schemas to
                        build th Query
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
                        {option2.map((item, i) => {
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
                <br />
              </div>
              <br />
            </div>
            <div className="row">
              <div className="col-md-6">
                <select
                  type="dropdown"
                  className="form-control"
                  onChange={this.handelChange}
                >
                  <option value="">Add Schema to segment</option>
                  <option value="First Name"> First Name</option>
                  <option value="Last Name"> Last Name</option>
                  <option value="Gender">Gender</option>
                  <option value="Age"> Age</option>
                  <option value="Account No">Account No</option>
                  <option value="City">City</option>
                  <option value="State">State</option>
                </select>
              </div>
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
        </div>
      </div>
    );
  }
}
export default Homescreen;
=======
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  Modal,
  ProgressBar,
  Card,
  CardDeck,
} from "react-bootstrap";
import Header from "../components/header";

class Homescreen extends React.Component {
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
export default Homescreen;
>>>>>>> 5ba64f5db11065f133067ed9ce5e04a009cdbf92
