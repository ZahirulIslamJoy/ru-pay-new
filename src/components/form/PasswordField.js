import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const PasswordField = ({label,register,errors}) => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full max-w-lg lg:max-w-md">
      <label className=" font-medium text-sm">
        {label}*
      </label>
      <div className="relative">
        <input type={showPassword ? "text" : "password"}
          placeholder="Enter Your password"
          {...register}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center px-3 py-2  rounded-r-md focus:outline-none"
        >
          {showPassword ? (
            <BsFillEyeFill></BsFillEyeFill>
          ) : (
            <BsFillEyeSlashFill></BsFillEyeSlashFill>
          )}
        </button>
      </div>
      {errors[label] && (<p className="text-xs text-red-600">{errors[label].message}</p>)}
    </div>
  );
};

export default PasswordField;
