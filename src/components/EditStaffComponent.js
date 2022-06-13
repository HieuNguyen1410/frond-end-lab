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
} from "reactstrap";
import ModalMessage from "./ModalMessage";
import {motion} from "framer-motion"

class EditStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      departmentName: "",
      departmentId: "Dept01",
      annualLeave: "",
      overTime: "",
      salary: "",
      image: "/assets/images/alberto.png",
      isOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    let user = this.props.staffsId;
    const departmentsPending = this.props.departmentsPending;
    if (user && !departmentsPending) {
      let [department] = this.props.departments.filter((value) => {
        return value.id === user.departmentId;
      });
      if (user) {
        this.setState({
          id: user.id,
          name: user.name,
          doB: user.doB.slice(0, 10),
          salaryScale: user.salaryScale,
          startDate: user.startDate.slice(0, 10),
          annualLeave: user.annualLeave,
          overTime: user.overTime,
          salary: user.salary,
          departmentName: department.name,
          departmentId: user.departmentId,
        });
      }
    }
  }
  checkvalidateInput() {
    let isvalid = true;
    let arrInput = [
      "name",
      "doB",
      "startDate",
      "departmentName",
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
  handleSubmit(event) {
    const isvalid = this.checkvalidateInput();
    if (isvalid) {
      event.preventDefault();
      const state = this.state;
      this.props.putStaffs(
        state.id,
        state.name,
        state.doB,
        state.salaryScale,
        state.startDate,
        state.departmentId,
        state.annualLeave,
        state.overTime,
        state.image,
        state.salary
      );
      this.props.toggle();
      this.setState({ isOpen: true });
    } else event.preventDefault();
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleOptionChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let [department] = this.props.departments.filter((value) => {
      return value.name === event.target.value;
    });

    this.setState({
      [name]: value,
      departmentId: department.id,
    });
  }
  render() {
    console.log();
    return (
      <>
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
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
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
                    value={this.state.doB}
                    onChange={this.handleInputChange}
                  />
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
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Input
                    type="select"
                    id="departmentName"
                    name="departmentName"
                    className="form-control"
                    value={this.state.departmentName}
                    onChange={this.handleOptionChange}
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
                    Save
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
          Edit Staff Success 🎉
        </ModalMessage>
      </>
    );
  }
}

export default EditStaff;
