import Diagram from "./chart";
import Todos from "./todos";

const Dashboard = () => {
  return (
    <div className="md:px-[80px] lg:px-[160px] md:flex px-[20px] py-10 gap-10">
      <div className="flex justify-center">
        <Diagram />
      </div>
      <div className="grow">
        <Todos />
      </div>
    </div>
  );
};

export default Dashboard;
