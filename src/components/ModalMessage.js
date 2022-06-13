import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/dialog.css";
import { motion } from "framer-motion";
let dialogStyles = {
  width: "300px",
  maxWidth: "100%",
  margin: "0 auto",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "999",
  backgroundColor: "#00BFFF",
  padding: "10px 20px 40px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  color: "white",
};

let dialogCloseButtonStyles = {
  backgroundColor: "#00BFFF",
  marginBottom: "15px",
  padding: "3px 8px",
  cursor: "pointer",
  border: "none",
  width: "30px",
  height: "30px",
  fontWeight: "bold",
  alignSelf: "flex-end",
  color: "white",
};
class ModalMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let dialog = (
      <div style={dialogStyles}>
        <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>
          x
        </button>
        <motion.div
          initial={{ y: "50%", opacity: 0, scale: 0.5 }}
          animate={{ y: "0", opacity: 1, scale: 1 }}
          exit={{ y: "50%", opacity: 0, transition: { duration: 0.5 } }}
          transition={{ duration: 0.5 }}
        >
          <div>{this.props.children}</div>
        </motion.div>
      </div>
    );

    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div>{dialog}</div>;
  }
}

export default ModalMessage;
