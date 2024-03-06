import { RiseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <RiseLoader size={15} color="#1e2a4a" />
    </div>
  );
};

export default Loader;
