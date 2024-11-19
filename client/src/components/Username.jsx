import { useState } from "react";

const Username = ({ state, name, placeholder }) => {
  let [user, setUser] = [...state];
  const [val, setVal] = useState("");

  const changeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setVal(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={val}
      onChange={changeInput}
      className="py-[15px] px-[10px] border-[1px] border-gray-400 border-solid rounded-[5px] font-[15px] w-full outline-blue-500 hover:border-blue-500"
    />
  );
};

export default Username;
