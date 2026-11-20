import { useContext } from "react";
import Button from "./Button";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { isLoggedin } = useContext(AuthContext);
  return (
    <>
      <div className="m-auto  bg-secondary bg-30 d-flex flex-column align-items-center justify-content-center gap-2 w-fit p-10">
        <h3 className="text-capitalize text-center">stock prediciton app</h3>
        <span>This stock prediction portal utilises ml techniques.</span>
        {!isLoggedin && (
          <Button
            classname="btn-outline theme-info"
            text="Login Now"
            href="/login"
          />
        )}
      </div>
    </>
  );
}

export default Home;
