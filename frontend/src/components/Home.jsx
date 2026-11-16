import Button from "./Button";

function Home() {
  return (
    <>
      <div className="m-auto  bg-secondary bg-30 d-flex flex-column align-items-center justify-content-center gap-2 w-fit p-10">
        <h3 className="text-capitalize text-center">stock prediciton app</h3>
        <span>This stock prediction portal utilises ml techniques.</span>
        <Button classname="btn-outline theme-info" text="Login Now" />
      </div>
    </>
  );
}

export default Home;
