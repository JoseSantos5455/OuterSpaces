import { useState } from "react";

const Read = () => {
  const [todo, setTodo] = useState({
    priority: "",
    progress: "",
    start_date: "",
    end_date: "",
    description: "",
  });
  const addItem = () => {
    console.log(todo);
  };

  const handleClick = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  return (
    <div className="py-[50px] px-[20px] md:w-[100%] flex flex-col justify-center items-center gap-[40px]">
      <div className="w-[100%] md:w-[760px] block md:grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-[20px]">
          <p className="text-[24px] pl-5">Priority</p>
          <input
            type="text"
            name="priority"
            value={todo.priority}
            onChange={handleClick}
            className="w-[100%] h-[60px] border-[#d0d0d2] border-[2px] rounded-[16px] py-4 px-6"
            placeholder="e.g. 5.0"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <p className="text-[24px] pl-5">Completion</p>
          <input
            type="text"
            name="progress"
            value={todo.progress}
            onChange={handleClick}
            className="w-[100%] h-[60px] border-[#d0d0d2] border-[2px] rounded-[16px] py-4 px-6"
            placeholder="0"
          />
        </div>
      </div>
      <div className="w-[100%] md:w-[760px] grid grid-cols-2 gap-5 items-center">
        <div className="flex flex-col gap-[20px]">
          <p className="text-[24px] pl-5">
            Timeline
            <span className="text-[#d0d0d2] text-[20px] pl-5">from</span>
          </p>
          <input
            type="date"
            name="start_date"
            value={todo.start_date}
            onChange={handleClick}
            className="w-[100%] h-[60px] border-[#d0d0d2] border-[2px] rounded-[16px] py-4 px-6"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <p className="text-[#d0d0d2] text-[20px] pl-5">to</p>
          <input
            type="date"
            name="end_date"
            value={todo.end_date}
            onChange={handleClick}
            className="w-[100%] h-[60px] border-[#d0d0d2] border-[2px] rounded-[16px] py-4 px-6"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] w-[100%] md:w-[760px]">
        <p className="text-[24px] pl-5">Description</p>
        <textarea
          name="description"
          value={todo.description}
          onChange={handleClick}
          className="w-[100%] h-[200px] border-[#d0d0d2] border-[2px] rounded-[16px] py-4 px-6"
          placeholder="type your description here."
        ></textarea>
      </div>
      <div>
        <button className="header-btn h-[40px] bg-blue-100" onClick={addItem}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Read;
