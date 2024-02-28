import { BsFillGridFill } from "react-icons/bs";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const Breadcumb = ({ options }) => {
  const optionLenght = options.length;
  return (
    <div className="bg-white h-[40px] px-5 md:px-12 gap-4 flex items-center">
      <div>
        <BsFillGridFill></BsFillGridFill>
      </div>
      <div className="flex items-center gap-3">
      {options.map((item,index) => (
        <div key={index} className="flex gap-2 items-center">
          <div className="text-sm font-semibold ">
            <Link to={`${item.path}`} ><h1>{item.name}</h1></Link>
          </div>
          {index !== optionLenght - 1 && ( 
              <div className="mt-1">
                <LiaGreaterThanSolid size={14} />
              </div>
            )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Breadcumb;
