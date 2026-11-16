function Button({ text, classname, href = "" }) {
  return (
    <a href={href} className={`btn ${classname}`}>
      {text}
    </a>
  );
}

export default Button;
