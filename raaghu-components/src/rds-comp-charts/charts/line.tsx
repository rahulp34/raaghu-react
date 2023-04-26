import React from "react";
import { RdsLineChart } from "../../rds-elements";

export const code_actual = () => {
  return (
    <RdsLineChart
      id="linechartpa"
      height={250}
      width={650}
      labels={["January", "February", "March", "April", "May", "Jun", "July"]}
      options={{
        pointStyle: "star",
        radius: 7,
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: "top",
            align: "center",
            pointStyle: "bottom",
            labels: {
              usePointStyle: true,
            },
          },
          tooltip: {
            usePointStyle: true,
          },
          filler: {
            propagate: false,
          },
          title: {
            display: true,
            text: "Area Chart with boundries",
          },
        },
        interaction: {
          intersect: false,
        },
      }}
      dataSets={[
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
          backgroundColor: "red",
        },
      ]}
    />
  );
};

export default code_actual;
