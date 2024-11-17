import Diagram from "./chart";
import Todos from "./todos";

const Dashboard = () => {
  return (
    <div className="px-[160px] py-10 flex gap-10">
      <Diagram />
      <div className="grow">
        <Todos />
      </div>
    </div>
  );
};

export default Dashboard;
