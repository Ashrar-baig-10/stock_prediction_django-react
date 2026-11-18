function Form({
  heading,
  children,
  submitFunction,
  loader_text,
  loading_status,
  success,
}) {
  // console.log(error);

  return (
    <div className="container m-auto bg-secondary bg-30 p-3">
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">{heading}</h3>
          <form
            action=""
            className="rg-form row align-items-center justify-content-center px-10 py-2 gap-3 flex-column"
            onSubmit={submitFunction}
          >
            {children}
            {/* <label htmlFor="password">password</label>
            <input type="text" id="password" />
            <label htmlFor="email">email</label>
            <input type="text" id="email" /> */}

            {loading_status ? (
              <div className="badge theme-primary w-fit">
                <span className="spinner-border" aria-hidden="true"></span>
                <span role="status">{loader_text}</span>
              </div>
            ) : (
              <input type="submit" className="w-fit btn-solid theme-info " />
            )}
            {success && (
              <span className="badge w-fit px-3 theme-success">Success</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
