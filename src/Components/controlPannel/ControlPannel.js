import React, { useState } from "react";
import axios from "axios";

function ControlPannel(props) {
  const [inputs, setInputs] = useState({
    title: "",
    post: "",
  });

  const handleOnSave = () => {
    axios.post("http://localhost:5000/router/", inputs).then((res) => {
      console.log(res);
    });
  };
}

export default ControlPannel;
