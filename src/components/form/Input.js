export const Input = ({label,register,type,errors}) => {
    return (
        <div className="w-full max-w-lg lg:max-w-md">
          <label className="font-medium text-sm" htmlFor="">{label}</label>
          <input type={type} id="name"  {...register} />
          {errors[label] && (<p className="text-xs text-red-600">{errors[label].message}</p>)}
        </div>
    );
};