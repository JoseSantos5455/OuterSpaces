import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server_url } from "../../util";

const Add = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    priority: "",
    progress: "",
    timeline: "",
    description: "",
  });

  const addItem = async () => {
    if (todo.priority && todo.progress && todo.timeline && todo.description) {
      try {
        let res = await axios.post(`${server_url}/api/todo/add`, todo);
        navigate("/todo");
        alert(res.data);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleChange = (e) => {
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
            onChange={handleChange}
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
            onChange={handleChange}
            className="w-[100%] h-[60px] border-[#d0d0d2] border-[2px] rounded-[16px] py-4 px-6"
            placeholder="0"
          />
        </div>
      </div>
      <div className="w-[100%] md:w-[760px] flex flex-col gap-[20px]">
        <p className="text-[24px] pl-5">
          Timeline
          <span className="text-[#d0d0d2] text-[20px] pl-5">from</span>
        </p>
        <input
          type="date"
          name="timeline"
          value={todo.timeline}
          onChange={handleChange}
          className="w-[100%] h-[60px] border-[#d0d0d2] border-[2px] rounded-[16px] py-4 px-6"
        />
      </div>
      <div className="flex flex-col gap-[20px] w-[100%] md:w-[760px]">
        <p className="text-[24px] pl-5">Description</p>
        <textarea
          name="description"
          value={todo.description}
          onChange={handleChange}
          className="w-[100%] h-[200px] border-[#d0d0d2] border-[2px] rounded-[16px] py-4 px-6"
          placeholder="type your description here."
        ></textarea>
      </div>
      <div>
        <button className="header-btn h-[40px] bg-blue-100" onClick={addItem}>
          Add item
        </button>
      </div>
    </div>
  );
};

export default Add;
