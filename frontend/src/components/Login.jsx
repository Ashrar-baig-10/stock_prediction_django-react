import { useState } from "react";
import Form from "./Form";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  return (
    <Form heading={"Login to your account"} submitFunction={handleLogin}>
      {" "}
      <label htmlFor="username">username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form>
  );
}

export default Login;
