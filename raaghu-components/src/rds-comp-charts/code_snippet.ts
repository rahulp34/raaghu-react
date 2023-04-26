const code_snippet = [
  {
    line: ` <RdsLineChart
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
  />`,
    name:'Line Chart'
  },
  {
    pie: `<RdsPieChart
    id="piechartpa"
    height={300}
    width={200}
    labels={['red', 'Orange', 'Yellow', 'Green', 'Blue']}
    options={{
      circumference: 360,
      radius: 100,
      maintainAspectRatio:false,
      animation: {
        animateRotate: false,
        animateScale: true
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          pointStyle: "line",
    
          labels: {
    
            usePointStyle: true
          }
        },
        title: {
          display: true,
          text: 'Pie Chart'
        }
      }
    }}
    dataSets={[
      {
        label: 'Dataset1',
        data: [20, 10, 20, 40, 10],
        backgroundColor: [
          '#ff6384',
          '#ff9f40',
          '#ffcd56',
          '#4bc0c0',
          '#059bff',
        ],
        borderColor: [
          '#fff',
        ],
        borderWidth: 1
      }
    ]}
  />`,
    name:'Pie Chart'
  },
  {
    bar: `<RdsBarChart
    id="barchartpa"
    height={250}
    width={650}
    labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Vertical Bar Chart'
        }
      }
    }}
    dataSets={[
      {
        label: 'Dataset 1',
        data: [20, 30, 50, 80, 98, 95, 55],
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)'
      },
      {
        label: 'Dataset 2',
        data: [15, 67, 34, 78, 45, 87, 76],
        backgroundColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Dataset 3',
        data: [31, 52, 43, 91, 74, 93, 76],
        backgroundColor: 'rgba(255, 159, 64, 1)',
      }
    ]}`,
    name:'Bar Chart'
  },
];
export default code_snippet;
