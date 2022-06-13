import React from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  Label,
  Form,
  FormGroup,
  ModalFooter,
  FormFeedback,
} from "reactstrap";
import ModalMessage from "./ModalMessage";
import { motion } from "framer-motion";

class AddStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      doB: "",
      salaryScale: 1,
      startDate: "",
      department: "Sale",
      annualLeave: 1,
      overTime: 1,
      salary: 1000,
      image: "/assets/images/alberto.png",
      touched: {
        startDate: false,
        doB: false,
        name: false,
        search: false,
      },
      isOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  checkvalidateInput() {
    let isvalid = true;
    let arrInput = [
      "name",
      "doB",
      "startDate",
      "department",
      "salaryScale",
      "annualLeave",
      "overTime",
      "salary",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isvalid = false;
        alert("Không được để trống");
        break;
      }
    }
    return isvalid;
  }
  onClose() {}
  handleSubmit(event) {
    const state = this.state;
    let isvalid = this.checkvalidateInput();
    const [departmentId] = this.props.departments
      .filter((value) => value.name === this.state.department)
      .map((val) => val.id);
    if (departmentId) {
      this.setState({
        department: "Sale",
      });
    }
    if (isvalid) {
      event.preventDefault();
      this.props.postStaff(
      state.name,
      state.doB,
      state.salaryScale,
      state.startDate,
      departmentId,
      state.annualLeave,
      state.overTime,
      state.salary,
      state.image
      );
      this.props.toggle();
      this.setState({
        isOpen: true,
      });
    } else {
      event.preventDefault();
    }
  }
  validate(name, startDate, doB) {
    const errors = {
      name: "",
      startDate: "",
      doB: "",
    };
    if (this.state.touched.name && name === "") errors.name = "Yêu cầu nhập";
    else if (this.state.touched.name && name.length < 2)
      errors.name = "Yêu cầu nhập nhiều hơn 2 ký tự";
    else if (this.state.touched.name && name.length > 30)
      errors.name = "Yêu cầu nhập ít hơn 30 ký tự";

    if (this.state.touched.doB && doB === "") errors.doB = "Yêu cầu nhập";

    if (this.state.touched.startDate && startDate === "")
      errors.startDate = "Yêu cầu nhập";

    return errors;
  }
  render() {
    const errors = this.validate(
      this.state.name,
      this.state.startDate,
      this.state.doB
    );
    return (
      <>
        <motion.div
          initial={{ y: "50%", opacity: 0, scale: 0.5 }}
          animate={{ y: "0", opacity: 1, scale: 1 }}
        ></motion.div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <motion.div
            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
            animate={{ y: "0", opacity: 1, scale: 1 }}
            exit={{ y: "50%", opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
          >
            <ModalHeader toggle={this.props.toggle}>Thêm Nhân Viên</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="name" md={4}>
                    Tên
                  </Label>
                  <Col md={8}>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nhập Tên"
                      valid={errors.name === ""}
                      invalid={errors.name !== ""}
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      onBlur={this.handleBlur("name")}
                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="doB" md={4}>
                    Ngày sinh
                  </Label>
                  <Col md={8}>
                    <Input
                      type="date"
                      name="doB"
                      id="doB"
                      valid={errors.doB === ""}
                      invalid={errors.doB !== ""}
                      value={this.state.doB}
                      onChange={this.handleInputChange}
                      onBlur={this.handleBlur("doB")}
                    />
                    <FormFeedback>{errors.doB}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="startDate" md={4}>
                    Ngày vào công ty
                  </Label>
                  <Col md={8}>
                    <Input
                      type="date"
                      name="startDate"
                      id="startDate"
                      valid={errors.startDate === ""}
                      invalid={errors.startDate !== ""}
                      value={this.state.startDate}
                      onChange={this.handleInputChange}
                      onBlur={this.handleBlur("startDate")}
                    />
                    <FormFeedback>{errors.startDate}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="department" md={4}>
                    Phòng ban
                  </Label>
                  <Col md={8}>
                    <Input
                      type="select"
                      id="department"
                      name="department"
                      value={this.state.department}
                      onChange={this.handleInputChange}
                      className="form-control"
                    >
                      {!this.props.departmentsPending &&
                        this.props.departments.map((value) => (
                          <option key={value.id}>{value.name}</option>
                        ))}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="salaryScale" md={4}>
                    Hệ số luong
                  </Label>
                  <Col md={8}>
                    <Input
                      id="salaryScale"
                      name="salaryScale"
                      value={this.state.salaryScale}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="annualLeave" md={4}>
                    Số ngày nghỉ còn lại
                  </Label>
                  <Col md={8}>
                    <Input
                      type="text"
                      id="annualLeave"
                      name="annualLeave"
                      value={this.state.annualLeave}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="overTime" md={4}>
                    Số ngày đã làm thêm
                  </Label>
                  <Col md={8}>
                    <Input
                      type="text"
                      id="overTime"
                      name="overTime"
                      value={this.state.overTime}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="salary" md={4}>
                    Lương
                  </Label>
                  <Col md={8}>
                    <Input
                      type="text"
                      id="salary"
                      name="salary"
                      value={this.state.salary}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Button type="submit" color="primary">
                      Add
                    </Button>{" "}
                    <Button color="secondary" onClick={this.props.toggle}>
                      Close
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </motion.div>
        </Modal>
        <ModalMessage
          isOpen={this.state.isOpen}
          onClose={(e) => {
            this.setState({ isOpen: false });
            this.props.fetchStaffs();
          }}
        >
          Add Staff Success 🎉
        </ModalMessage>
      </>
    );
  }
}

export default AddStaff;
