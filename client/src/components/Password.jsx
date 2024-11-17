import { HideeyeIcon, ShoweyeIcon } from "./Icons";
const Password = () => {
  return (
    <div className="flex items-center ">
      <input
        type="text"
        placeholder="Enter your password"
        className="py-[15px] px-[10px] border-[1px] border-solid border-gray-400 rounded-[5px] font-[15px] w-full"
      />
      <div className="ml-[-40px] bg-white flex items-center pl-[10px] py-[5px]">
        <HideeyeIcon />
      </div>
    </div>
  );
};

export default Password;
