import Breadcumb from "../breadcumb/Breadcumb";

const Container = ({ children,options}) => {
  return (
    <div className="bg-neutral-300 min-h-screen">
      <div className="">
        <Breadcumb options={options} ></Breadcumb>
      </div>
      <div className="max-w-[1250px] mx-auto">{children}</div>
    </div>
  );
};

export default Container;
