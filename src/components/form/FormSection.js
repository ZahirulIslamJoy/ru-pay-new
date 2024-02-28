import { useContext } from "react";
import { FormContext } from ".";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormContext);

  return (
    <div
      className={` grid grid-cols-1 justify-items-center  gap-5 ${
        double ? "md:grid-cols-2" : "grid-cols-1"
      }`}
    >
      {children}
    </div>
  );
};