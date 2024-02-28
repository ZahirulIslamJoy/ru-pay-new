import { createContext } from "react";
export const FormContext = createContext();

export const Form = ({ children, onSubmit, double }) => {

  return (
    <FormContext.Provider value={{double}}>
      <form onSubmit={onSubmit} className={` w-[90%] md:w-[80%] mx-auto  border border-gray-400  shadow-sm ${
          double ? "max-w-5xl" : "max-w-md"
        } p-6 mx-auto`}>
        {children}
      </form>
    </FormContext.Provider>
  );
};