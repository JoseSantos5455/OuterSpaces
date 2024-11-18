import { useState } from "react";
import { HideeyeIcon, ShoweyeIcon } from "./Icons";
const Password = ({ state, name }) => {
  let [user, setUser] = [...state];
  let [val, setVal] = useState("");
  const [showed, setShowed] = useState(true);

  const handleClick = () => {
    setShowed(!showed);
  };

  const changeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setVal(e.target.value);
  };
  return (
    <div className="flex items-center ">
      <input
        type={showed ? "password" : "text"}
        placeholder="Enter your password"
        className="py-[15px] px-[10px] border-[1px] border-solid border-gray-400 rounded-[5px] font-[15px] w-full outline-blue-500 hover:border-blue-500"
        value={val}
        name={name}
        onChange={changeInput}
      />
      <div
        className="ml-[-40px] bg-white flex items-center pl-[10px] py-[5px]"
        onClick={handleClick}
      >
        {showed ? <HideeyeIcon /> : <ShoweyeIcon />}
      </div>
    </div>
  );
};

export default Password;
