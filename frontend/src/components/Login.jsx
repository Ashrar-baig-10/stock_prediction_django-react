import { useContext, useState } from "react";
import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  //   const [empField, setEmpField] = useState(false);
  const [error, setError] = useState({});
  const [loading_status, setLoading_status] = useState(false);
  const [success, setSuccess] = useState(false);
  // console.log(error);
  const navigate = useNavigate();
  const { setIsLoggedin } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading_status(true);
    const userData = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        userData,
      );
      setError({});
      // console.log(response.data);
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      console.log("login successful");

      if (response) {
        navigate("/");
        setIsLoggedin(true);
        setSuccess(true);
      }
    } catch (error) {
      setError(error.response.data);
      console.error("logging in error: ", error.response.data);
    } finally {
      setLoading_status(false);
    }
  };

  return (
    <Form
      loading_status={loading_status}
      loader_text={"Logging in "}
      heading={"Login to your account"}
      submitFunction={handleLogin}
      success={success}
    >
      <label htmlFor="username">username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      {error.username && (
        <small className="px-0 fg-danger">* {error.username}</small>
      )}

      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {error.password && (
        <small className="px-0 fg-danger">* {error.password}</small>
      )}
      {error.detail && (
        <small className="px-0 fg-danger">* {error.detail}</small>
      )}
    </Form>
  );
}

export default Login;
