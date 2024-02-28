import { useContext } from "react";
import { FormContext } from ".";

export const FormSubmit = () => {
  const { double } = useContext(FormContext);
  return (
    <div
      className={` grid grid-cols-1 mt-6 justify-items-center  gap-5 ${
        double ? "md:grid-cols-2" : "grid-cols-1"
      }`}
    >
      <div
        className={`w-full max-w-md col-start-1 ${
          double ? "md:col-start-2 flex  md:justify-end" : ""
        }`}
      >
        <button  className="px-3 py-1 bg-violet-600 hover:bg-violet-700  rounded-lg text-white" type="submit"  >
          Submit
        </button>
      </div>
    </div>
  );
};