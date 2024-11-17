const ButtonArray = () => {
  return (
    <div className="flex gap-[5px] justify-around">
      <button className="bg-[#1D9887] hover:bg-[#44C9B7] text-white text-[20px] text-center rounded-[5px] px-[10px] py-[6px]">
        Read
      </button>
      <button className="bg-[#EAFAF0] text-[#1F7E43] hover:bg-[#F8FEFA] text-[20px] text-center rounded-[5px] px-[10px] py-[6px]">
        Edit
      </button>
      <button className="bg-[#FAEAEA] text-[#C93333] hover:bg-[#FCF6F6] text-[20px] text-center rounded-[5px] px-[10px] py-[6px]">
        Delete
      </button>
    </div>
  );
};

export default ButtonArray;
