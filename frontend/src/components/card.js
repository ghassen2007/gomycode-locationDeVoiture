import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Card = (props) => {
  return (
      
      <div style={{ display:"inline-block", margin:20, textAlign:"center" }}>
    <MDBCol >
      <MDBCard style={{ width: props.big ? "60rem" : "22rem" }}>
        <MDBCardImage className="img-fluid" 
        
        src={props.img} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>
            {props.desc}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
  )
}

export default Card;