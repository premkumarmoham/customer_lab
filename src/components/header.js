import React from "react";
import {
    Nav
} from "react-bootstrap";

function Headers() {
  return (
    <div className="cl-header-pop-up">
      <Nav className="bg-info"
        activeKey="#"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="#" className="text-light"> &#60;	 Save Segment</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
export default Headers;
