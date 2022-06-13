import React from "react";
import {Input ,Button} from 'reactstrap'

class Search extends React.Component {

  render() {
    return (
      <>
        <div className="col-lg-5 col-md-5 col-10">
          <Input
            type="text"
            id="name"
            name="name"
            innerRef={this.props.innerRef}
          />
        </div>
        <div className="col-lg-1 col-md-1 col-2">
          <Button color="primary" onClick={this.props.onClick}>
            Tìm
          </Button>
        </div>
      </>
    );
  }
}

export default Search;
