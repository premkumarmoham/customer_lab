import React from "react";
import {
    Nav
} from "react-bootstrap";
class MainHeader extends React.Component{

    constructor(props){
super(props);
this.state={

}
    }
    render(){
        return(
            <Nav className="bg-info"
            activeKey="#"
          >
            <Nav.Item>
              <Nav.Link href="#" className="text-light"> &#60;	 New Segment</Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }

}
export default MainHeader;