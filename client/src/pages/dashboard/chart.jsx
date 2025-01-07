import { useState } from "react";
import Chart from "react-apexcharts";

const Diagram = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: ["completed", "failed", "upc oming"],
      },
    },
    series: [
      {
        name: "%",
        data: [25, 40, 35],
      },
    ],
  });
  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width={300}
        height={400}
      />
    </div>
  );
};

export default Diagram;
