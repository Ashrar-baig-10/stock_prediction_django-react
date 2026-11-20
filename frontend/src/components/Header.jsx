import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const location = useLocation();
  const { isLoggedin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutFunc = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <nav className="navbar  bg-1">
        <div className="container d-flex justify-content-between w-100">
          <Link to={"/"} className="navbar-brand text-capitalize" href="">
            stock prediction
          </Link>
          {!isLoggedin ? (
            <div>
              {location.pathname == "/login" ? (
                ""
              ) : (
                <Button
                  classname="btn-subtle theme-info me-2"
                  text="Login"
                  href="/login"
                />
              )}
              {location.pathname == "/register" ? (
                ""
              ) : (
                <Button
                  classname="btn-outline theme-info"
                  text="Register"
                  href="/register"
                />
              )}
            </div>
          ) : (
            <div>
              <Button
                classname="btn-solid theme-danger"
                text="Logout"
                onClickfunc={logoutFunc}
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
