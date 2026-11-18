import { Link } from "react-router-dom";

function Button({ text, classname, href = "" }) {
  return (
    <Link to={href} className={`btn ${classname}`}>
      {text}
    </Link>
  );
}

export default Button;
