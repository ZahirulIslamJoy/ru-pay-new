export const Select = ({label,register,errors,field}) => {
    return (
        <div className="w-full max-w-lg lg:max-w-md">
          <label className=" font-medium text-sm" htmlFor="">{label}</label>
          <select
            className="text-xs"
            {...register}
            //onChange={handleTypeChange}
          >
            {
                field.map((item,index)=>(
                    <option key={index}  value={item?.options}>{item?.options}</option>
                ))
            }
           
          </select>
          {errors[label] && (<p className="text-xs text-red-600">{errors[label].message}</p>)}
        </div>
    );
};