import Button from "./Button";

function Header() {
  return (
    <>
      <nav className="navbar  bg-1">
        <div className="container d-flex justify-content-between w-100">
          <a className="navbar-brand text-capitalize" href="">
            stock prediction
          </a>
          <div>
            <Button classname="btn-subtle theme-info me-2" text="Login" />
            <Button classname="btn-outline theme-info" text="Register" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
