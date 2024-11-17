const Todo = () => {
  return (
    <div className="px-[10px] md:px-[80px] lg:px-[160px] py-[50px] space-y-[35px]">
      <div className="flex items-center pl-[20px] py-[10px] border-[1px] border-gray-40 w-[350px] h-[50px] rounded-[10px] gap-[15px] active:border-blue-500 hover:border-blue-500">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search ..."
          className="border-none text-[18px] text-gray-500 outline-none"
        />
      </div>
      <table className="table">
        <tr>
          <th>priority</th>
          <th>timeline</th>
          <th>description</th>
          <th>completion</th>
        </tr>
      </table>
    </div>
    // <div></div>
  );
};

export default Todo;
