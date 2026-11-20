import { Link } from "react-router-dom";

function Button({ text, classname, href = "", onClickfunc = "" }) {
  return (
    <Link to={href} onClick={onClickfunc} className={`btn ${classname}`}>
      {text}
    </Link>
  );
}

export default Button;
