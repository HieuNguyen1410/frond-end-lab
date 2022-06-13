import React from "react";
import { Button } from "reactstrap";
import "./css/staffDetail.css";
import { Redirect } from "react-router";
import ModalMessage from "./ModalMessage";
import "./css/dialog.css";
import { motion } from "framer-motion";

let dialogStyles = {
  width: "500px",
  maxWidth: "100%",
  margin: "0 auto",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "999",
  backgroundColor: "#eee",
  padding: "10px 20px 40px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
};

let dialogCloseButtonStyles = {
  marginBottom: "15px",
  padding: "3px 8px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  width: "30px",
  height: "30px",
  fontWeight: "bold",
  alignSelf: "flex-end",
};
class DeleteStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      redirect: false,
      isOpen: false,
    };
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
    const staff = this.props.staffId;
    if (staff) {
      this.setState({
        id: staff.id,
      });
    }
  }

  onConfirm() {
    if (this.state.id !== "") {
      this.props.DeleteStaff(this.state.id);
      this.setState({
        redirect: true,
        isOpen: false,
      });
    }
  }
  render() {
    console.log();
    let dialog = (
      <div style={dialogStyles}>
        <button
          style={dialogCloseButtonStyles}
          onClick={() => {
            this.setState({ isOpen: false });
          }}
        >
          x
        </button>
        <motion.div
          initial={{ y: "50%", opacity: 0, scale: 0.5 }}
          animate={{ y: "0", opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Do you want to delete this item</h3>
          <div className="mt-10 text-center">
            <Button
              onClick={() => {
                this.setState({ isOpen: false });
              }}
            >
              No
            </Button>
            <Button color="danger" onClick={this.onConfirm}>
              Yes
            </Button>
          </div>
        </motion.div>
      </div>
    );
    if (!this.state.isOpen) {
      dialog = null;
    }
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/staff" />;
    }
    return (
      <>
        <Button
          className="primary ghost"
          onClick={(e) => this.setState({ isOpen: true })}
        >
          Delete
        </Button>
        <div>{dialog}</div>
      </>
    );
  }
}

export default DeleteStaff;
