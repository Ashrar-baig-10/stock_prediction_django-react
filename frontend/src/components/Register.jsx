import { useState } from "react";
import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //   const [empField, setEmpField] = useState(false);
  const [error, setError] = useState({});
  const [loading_status, setLoading_status] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegisteration = async (e) => {
    e.preventDefault();
    setLoading_status(true);

    const userData = {
      username: username,
      password: password,
      email: email,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData,
      );
      setError({});
      if (response) {
        setSuccess(true);
        navigate("/login");
      }
    } catch (err) {
      setError(err.response.data);
      console.error("unable to post reg", err.response.data);
    } finally {
      setLoading_status(false);
    }
  };
  // console.log(error.response.data);

  return (
    <Form
      loading_status={loading_status}
      loader_text={"creating"}
      heading={"Create an account"}
      submitFunction={handleRegisteration}
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
      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {error.email && <small className="px-0 fg-danger">* {error.email}</small>}
    </Form>
  );
}

export default Register;
