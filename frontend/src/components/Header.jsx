import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

function Header() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar  bg-1">
        <div className="container d-flex justify-content-between w-100">
          <Link to={"/"} className="navbar-brand text-capitalize" href="">
            stock prediction
          </Link>
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
        </div>
      </nav>
    </>
  );
}

export default Header;
