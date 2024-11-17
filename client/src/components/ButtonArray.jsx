const ButtonArray = () => {
  return (
    <div className="flex gap-[5px] justify-around">
      <button className="bg-blue-300 hover:bg-blue-100 active:bg-blue-200 text-white text-[20px] text-center rounded-[5px] px-[10px] py-[6px]">
        Read
      </button>
      <button className="bg-blue-100 hover:bg-blue-100 active:bg-blue-200 text-[#2ca1c2] text-[20px] text-center rounded-[5px] px-[10px] py-[6px]">
        Edit
      </button>
      <button className="bg-[#FAEAEA] text-[#C93333] hover:bg-[#FCF6F6] text-[20px] text-center rounded-[5px] px-[10px] py-[6px]">
        Delete
      </button>
    </div>
  );
};

export default ButtonArray;
