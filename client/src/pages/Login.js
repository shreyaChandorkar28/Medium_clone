// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";
// import { NavLink } from "react-router-dom";
// import Cookies from "js-cookie";
// import './Login.css';
// function Login({ loggedin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const log = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await Axios.post(
//         `http://localhost:3001/login`, // use the selected user type to determine the login route
//         {
//           Username: username,
//           Password: password,
//         }
//       );
//       setIsLoading(false);
//       if (response.data.success) {
//         setSuccess(true);
//         localStorage.setItem("token", response.data.token);
//         Cookies.set("username", username);
//         Cookies.set("Id", response.data.Id);
//         // if(username=="admin"){
//         //   navigate("/admin");
//         // }else{
//         navigate(`/Home2`); 
//         // }
//       } else {
//         setError(response.data.error);
//       }
//     } catch (error) {
//       setIsLoading(false);
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="ma">
      
//     <div className="mn">
//       <div className="obx">
//         <div>
//           <center>
//             <h1 className="heading">Welcome Back!</h1>
//             <br/><br/>
//             <p>Enter the username and password associated with your account,<br/> and then you will be rediected to our website</p>
//             <br/><br/>
//           </center>
//           <center>
//             <input
//               type="text"
//               className="inpbox"
//               placeholder="Username"
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//             />{" "}
//             <br /> <br />
//             <input
//               type="password"
//               className="inpbox"
//               placeholder="Password"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />{" "}
//             <br />
//             {isLoading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             {success && <p>Success!</p>}
//             <br/><br/>
//             <button onClick={log} className="btn">
//               Log in
//             </button>
//             <br/><br/>
//           </center>
//         </div>
//         <div>
//           <center className="noacc">
//             {" "}
//             Don't have an account?{" "}
//             <NavLink className="link" exact to="/register">
//               Sign up
//             </NavLink>
//           </center>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import './Login.css';

function Login({ loggedin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const log = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await Axios.post(
        `http://localhost:3001/login`,
        {
          Username: username,
          Password: password,
        }
      );
      setIsLoading(false);
      if (response.data.success) {
        setSuccess(true);
        localStorage.setItem("token", response.data.token);
        Cookies.set("username", username);
        Cookies.set("Id", response.data.Id);
        navigate(`/Home2`);
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="heading">Welcome Back!</h1>
        <p>
          Enter the username and password associated with your account, and<br/>
          then you will be redirected to our website.
        </p>
        <input
          type="text"
          className="inpbox"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          className="inpbox"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {success && <p>Success!</p>}
        <br/><br/>
        <button onClick={log} className="btn">
          Log in
        </button>
        <div className="noacc">
          Don't have an account?{" "}
          <NavLink className="link" exact to="/register">
            Sign up
          </NavLink>
        </div>
        <div className="go-back">
        <NavLink exact to="/">
          Go Back
        </NavLink>
      </div>
      </div>
      {/* <div className="go-back">
        <NavLink exact to="/">
          Go Back
        </NavLink>
      </div> */}
    </div>
  );
}

export default Login;
