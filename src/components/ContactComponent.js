import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstName: false,
        lastName: false,
        telNum: false,
        email: false,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleBlur(field) {
    return (evt) => {
      this.setState({
        touched: { ...this.state.touched, [field]: true },
      });
    };
  }
  validate(firstName, lastName, telNum, email) {
    const errors = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
    };
    if (this.state.touched.firstName && firstName.length < 3)
      errors.firstName = "First Name should be >= 3 characters";
    else if (this.state.touched.firstName && firstName.length > 10)
      errors.firstName = "First Name should be <= 10 characters";

    if (this.state.touched.lastName && lastName.length < 3)
      errors.lastName = "Last Name should be >= 3 characters";
    else if (this.state.touched.lastName && lastName.length > 10)
      errors.lastName = "Last Name should be <= 10 characters";

    const reg = /^\d+$/;
    if (this.state.touched.telNum && !reg.test(telNum))
      errors.telNum = "Tel. Number should contain only numbers";
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.touched.email && !regex.test(email))
      errors.email = "Email should contain a @";
    return errors;
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }
  render() {
    const errors = this.validate(this.state.firstName, this.state.lastName, this.state.telNum, this.state.email);
    return (
      <div className="container">
        <div className="row  row-content">
          <div className="col-12">
            <h3>Send Us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    valid={errors.firstName ===''}
                    invalid={errors.firstName !==''}
                    value={this.state.firstName}
                    onBlur={this.handleBlur("firstName")}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <FormFeedback>{errors.firstName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    valid={errors.lastName ===''}
                    invalid={errors.lastName !==''}
                    value={this.state.lastName}
                    onBlur={this.handleBlur("lastName")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.lastName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telNum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telNum"
                    name="telNum"
                    placeholder="Tel. number"
                    valid={errors.telNum ===''}
                    invalid={errors.telNum !==''}
                    value={this.state.telNum}
                    onBlur={this.handleBlur("telNum")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.telNum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    valid={errors.email ===''}
                    invalid={errors.email !==''}
                    value={this.state.email}
                    onBlur={this.handleBlur("email")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    value={this.state.message}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button
                    type="submit"
                    color="success"
                    onClick={this.handleSubmit}
                  >
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
