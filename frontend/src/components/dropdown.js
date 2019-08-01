import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const Dropdown = (props) => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        {props.children}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
      <img src={props.src}/>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default Dropdown;