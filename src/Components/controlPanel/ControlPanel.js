import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

function ControlPanel(props) {
  const [inputs, setInputs] = useState({
    title: "",
    post: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      post: e.target.post.value,
    };
    axios
      .post("http://localhost:5000/router/", data)
      .then((response) => {
        setInputs(response.data.frontPosts);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  console.log(inputs);

  return (
    <div className="panelBG">
      <h1>Control Panel</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="title" label="Title" margin="normal" />
        <br />
        <TextField
          id="post"
          label="Post"
          multiline
          rowsMax="4"
          margin="normal"
        />
        <br />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default ControlPanel;
