import { useEffect, useState } from "react";
import axios from "axios";
import { server_url } from "../../util";

const todoy_items = [
  // { description: "task1 completed", date: "2024.11.18" },
  // { description: "task2 completed", date: "2024.11.18" },
  // { description: "task3 completed", date: "2024.11.18" },
];

const Todos = () => {
  const [completedItems, setCompletedItems] = useState([]);
  const [failedItems, setFailedItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      try {
        let res = await axios.get(`${server_url}/api/todo/getListByCategory`);
        setCompletedItems(res.data.completed_items);
        setFailedItems(res.data.failed_items);
      } catch (e) {
        console.log(e);
      }
    };
    getList();
  }, []);
  return (
    <div className="space-y-4">
      <div className="border-gray-200 border border-solid p-4 rounded-lg">
        <div className="space-y-2">
          <p className="text-[24px]">Completed Items</p>
          <div className="space-y-2">
            {completedItems.map((item, idx) => (
              <div
                key={idx}
                className="text-[16px]  bg-blue-100 bg-opacity-30 p-2 rounded-[10px]"
              >
                {item.date}. {item.description}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-gray-200 border border-solid p-4 rounded-lg">
        <div className="space-y-2">
          <p className="text-[24px]">Today's Items</p>
          <div className="space-y-2">
            {todoy_items.map((item, idx) => (
              <div
                key={idx}
                className="text-[16px] bg-blue-100 bg-opacity-30 p-2 rounded-[10px]"
              >
                {item.date}. {item.description}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-gray-200 border border-solid p-4 rounded-lg">
        <div className="space-y-2">
          <p className="text-[24px]">Failed Items</p>
          <div className="space-y-2">
            {failedItems.map((item, idx) => (
              <div
                key={idx}
                className="text-[16px] bg-blue-100 bg-opacity-30 p-2 rounded-[10px]"
              >
                {item.description}({item.progress}% completed.)
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
