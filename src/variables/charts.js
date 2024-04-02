export const barChartData = [
  {
    label: "Dataset1",
    name: "No",
    backgroundColor: 'rgba(255, 255, 255)',
    data: [1400, 1400, 1300, 1300],
  },
  {
    label: "Dataset2",
    name: "Yes",
    backgroundColor: 'rgba(2, 9, 1)',
    data: [1100, 300,  200, 150],
  },
];

export const barChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    categories: ['Electronic Check', 'Mailed Check', 'Bank Tranfer', 'Credit Card'],
    labels: {
      style: {
        colors: "#A0AEC0",
        fontSize: "12px",
      },
    },
    show: true,
    axisBorder: {
      show: false,
    },
    
  },
  yaxis: {
    show: true,
    // color: "#A0AEC0",
    labels: {
      show: true,
      style: {
        colors: "#A0AEC0",
        fontSize: "14px",
      },
    },
  },
  fill: {
    // colors: "#3182CE",
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
      columnWidth: "15px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};

const stackedBarChartData = {
  labels: ['No', 'Yes', 'No Service'],
  datasets: [
    {
      label: 'No',
      backgroundColor: 'rgba(255, 99, 132)',
      data: [40, 15, 5],
      stack: 'stack0',
    },
    {
      label: 'Yes',
      backgroundColor: 'rgba(54, 162, 235)',
      data: [60, 85, 95],
      stack: 'stack0',
    },
  ],
};

export const lineChartData = [
  {
    name: "Churn",
    data: [0, 0.0055, 0.005, 0.0065, 0.018, 0.015, 0.0001],
  },
  {
    name: "No Churn",
    data: [0, 0.018, 0.004, 0.008, 0.0115, 0.0089, 0.001],
  },
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [0, 20, 40, 60, 80, 100, 120, 140],
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#fff", "#3182CE"],
  },
  colors: ["#fff", "#3182CE"],
};
