import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = ({ pieChart }) => {
    console.log({pieChart})
  const data = {
    labels: pieChart.keys,
    datasets: [
      {
        data: pieChart.vals,
        backgroundColor: pieChart.colors,
        hoverBackgroundColor: pieChart.colors,
      },
    ],
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
