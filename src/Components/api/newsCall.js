import React from "react";
import axios from "axios";

function newsCall() {
  axios
    .get("http://localhost:5000/router/")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default newsCall;
