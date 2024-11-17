const completed_items = [
  { description: "task1 completed", date: "2024.11.18" },
  { description: "task2 completed", date: "2024.11.18" },
  { description: "task3 completed", date: "2024.11.18" },
];

const todoy_items = [
  { description: "task1 completed", date: "2024.11.18" },
  { description: "task2 completed", date: "2024.11.18" },
  { description: "task3 completed", date: "2024.11.18" },
];

const failed_items = [
  { description: "task1 completed", date: "2024.11.18" },
  { description: "task2 completed", date: "2024.11.18" },
  { description: "task3 completed", date: "2024.11.18" },
];

const Todos = () => {
  return (
    <div className="space-y-4">
      <div className="border-gray-200 border border-solid p-4 rounded-lg">
        <div className="space-y-2">
          <p className="text-[24px]">Completed Items</p>
          <div className="space-y-2">
            {completed_items.map((item, idx) => (
              <div
                key={idx}
                className="text-[16px] bg-[#eeeeee] p-2 rounded-[10px]"
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
                className="text-[16px] bg-[#eeeeee] p-2 rounded-[10px]"
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
            {failed_items.map((item, idx) => (
              <div
                key={idx}
                className="text-[16px] bg-[#eeeeee] p-2 rounded-[10px]"
              >
                {item.date}. {item.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
