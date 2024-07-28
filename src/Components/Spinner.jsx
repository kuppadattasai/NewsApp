import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={spinner}
        style={{ width: "50px", height: "50px" }}
        alt="loading"
      />
    </div>
  );
};

export default Spinner;
