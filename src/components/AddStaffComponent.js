import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Label,
  Form,
  FormGroup,
  ModalFooter,
  FormFeedback,
} from "reactstrap";

class AddStaff extends React.Component {
  render() {
    return (
      <>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Thêm Nhân Viên</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.props.onSubmit}>
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
                    valid={this.props.errors.name === ""}
                    invalid={this.props.errors.name !== ""}
                    value={this.props.value.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.handleBlur("name")}
                  />
                  <FormFeedback>{this.props.errors.name}</FormFeedback>
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
                    valid={this.props.errors.doB === ""}
                    invalid={this.props.errors.doB !== ""}
                    value={this.props.value.doB}
                    onChange={this.props.onChange}
                    onBlur={this.props.handleBlur("doB")}
                  />
                  <FormFeedback>{this.props.errors.doB}</FormFeedback>
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
                    valid={this.props.errors.startDate === ""}
                    invalid={this.props.errors.startDate !== ""}
                    value={this.props.value.startDate}
                    onChange={this.props.onChange}
                    onBlur={this.props.handleBlur("startDate")}
                  />
                  <FormFeedback>{this.props.errors.startDate}</FormFeedback>
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
                    value={this.props.value.department}
                    onChange={this.props.onChange}
                    className="form-control"
                  >
                    {this.props.value.departments.map((value) => (
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
                    value={this.props.value.salaryScale}
                    onChange={this.props.onChange}
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
                    value={this.props.value.annualLeave}
                    onChange={this.props.onChange}
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
                    value={this.props.value.overTime}
                    onChange={this.props.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>{" "}
                  <Button color="secondary" onClick={this.props.toggleModal}>
                    Hủy
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </>
    );
  }
}

export default AddStaff;
