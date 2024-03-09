import Breadcumb from "../breadcumb/Breadcumb";

const Container = ({ children,options,end}) => {
  return (
    <div className="bg-neutral-200 min-h-screen">
      <div className="">
        <Breadcumb options={options} end={end} ></Breadcumb>
      </div>
      <div className="max-w-[1250px]  mx-auto">{children}</div>
    </div>
  );
};

export default Container;
