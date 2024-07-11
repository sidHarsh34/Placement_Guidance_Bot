import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useSnackbar } from "notistack";
//import Footer from "../components/footer";
import "./login.css";

export const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //const { enqueueSnackbar } = useSnackbar();

  function handleHover(event) {
    event.target.classList.add("button-hover");
  }
  function handleMouseLeave(event) {
    // Reset the styles when mouse leaves
    event.target.classList.remove("button-hover");
  }
  function handlelogin() {
    const login = {
      username,
      password,
    };
    axios
      .post("http://localhost:5000/login", login)
      .then((response) => {
        if (response.data.success) {
          //enqueueSnackbar("Logged in successfully", { variant: "success" });
          alert("Logged in successfully.")
          localStorage.setItem("auth-token", response.data.accessToken)

          setIsLoggedIn(true); // Update login status
          navigate('/home')

        } else {
          //enqueueSnackbar(response.data.error, { variant: "error" });
          alert(response.data.error); // Show the response data in an alert if status is not 200
        }
      })
      .catch((error) => {
        console.log(error);
        //enqueueSnackbar("Coundnt login", { variant: "success" });
        alert("Couldn't login");
      });
  }
  return (
    <>
      {/* <div className="login"></div> */}
      <div className="cont text-center m-4">
        <div className=" ">
          <label>Username:</label><br />
          <input className="m-2" type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className=" m-5 ">
          <label>Password:</label><br />
          <input className="m-2" type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button
          type="submit"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          onClick={handlelogin}
          className="m-4 p-6 submitbut"
        >
          Submit
        </button>
      </div>
      {/* <Footer/> */}
    </>
  );
}
