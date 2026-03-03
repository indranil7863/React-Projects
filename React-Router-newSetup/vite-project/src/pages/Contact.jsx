import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Contact Page</h1>
      <button onClick={() => navigate("info")}>contact-Info</button>
      <button onClick={() => navigate("/about")}>contact-form</button>

      {/* <Link to="/contact/info">info</Link> */}
    </div>
  );
};

export default Contact;
