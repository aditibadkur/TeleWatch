import { CategoryScale } from 'chart.js';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { Flex, Text, Switch, Grid, useColorModeValue, Input, Button } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";

Chart.register(
  CategoryScale
)   

const Chart123 = () => {

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

  const stackedBarChartData1 = {
    labels: ['Month-Month', 'One Year', 'Two Year'],
    datasets: [
      {
        label: 'No',
        backgroundColor: 'rgba(255, 99, 132)',
        data: [1500, 700, 300],
        stack: 'stack0',
      },
      {
        label: 'Yes',
        backgroundColor: 'rgba(54, 162, 235)',
        data: [3700, 1700, 1200],
        stack: 'stack0',
      },
    ],
  };

  const stackedBarChartData2 = {
    labels: ['Yes', 'No', 'N/A'],
    datasets: [
      {
        label: 'No',
        backgroundColor: 'rgba(255, 99, 132)',
        data: [850, 850, 200],
        stack: 'stack0',
      },
      {
        label: 'Yes',
        backgroundColor: 'rgba(54, 162, 235)',
        data: [3400, 2800, 700],
        stack: 'stack0',
      },
    ],
  };

  const stackedBarChartData3 = {
    labels: ['Fibre Optics', 'DSL', 'No'],
    datasets: [
      {
        label: 'No',
        backgroundColor: 'rgba(255, 99, 132)',
        data: [1350, 400, 100],
        stack: 'stack0',
      },
      {
        label: 'Yes',
        backgroundColor: 'rgba(54, 162, 235)',
        data: [3100, 2300, 1500],
        stack: 'stack0',
      },
    ],
  };
  

  const lineChartData = {
    labels: [0, 20, 40, 60, 80, 100],
    datasets: [
      {
        label: 'Tenure',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0.0029, 0.024, 0.0013, 0.009, 0.0011, 0.001],
      },
    ],
  };

  const lineChartData1 = {
    labels: [0, 20, 40, 60, 80, 100, 120, 140],
    datasets: [
      {
        label: 'Monthly Charges',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0.00, 0.015, 0.005, 0.08, 0.013, 0.011, 0.1, 0.00],
      },
    ],
  };


  return (
    <Flex p='15px' mt='40px'>
        <Card>
        <Grid templateColumns={{ sm: "1fr", lg: "repeat(2, 1fr)" }}>
        <CardBody> Online Security
            <Flex align='center' mt='5px' mb='5px'>
                <Flex align='center'>
                <Bar data={stackedBarChartData} />
                </Flex>
            </Flex>
        </CardBody>

        <CardBody> Contract Type
            <Flex align='center' mt='5px' mb='5px'>
                <Flex align='center'>
                <Bar data={stackedBarChartData1} />
                </Flex>
            </Flex>
        </CardBody>

        <CardBody > Multiple Lines
            <Flex align='center' mt='5px' mb='5px'>
                <Flex align='center'>
                <Bar data={stackedBarChartData2} />
                </Flex>
            </Flex>
        </CardBody>

        <CardBody> Internet Service
            <Flex align='center' mt='5px' mb='5px'>
                <Flex align='center'>
                <Bar data={stackedBarChartData3} />
                </Flex>
            </Flex>
        </CardBody>
            {/* <div className="w-full md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Stacked Bar Chart</h2>
                <Bar data={stackedBarChartData} />
            </div> */}

        <CardBody>
            <Flex align='center' mt='5px' mb='5px'>
                <Flex align='center'>
                <Line data={lineChartData} />
                </Flex>
            </Flex>
        </CardBody>

        <CardBody>
            <Flex align='center' mt='5px' mb='5px'>
                <Flex align='center'>
                <Line data={lineChartData1} />
                </Flex>
            </Flex>
        </CardBody>


        {/* <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Line Chart</h2>
            <Line data={lineChartData} />
        </div> */}
        </Grid>
        </Card>
    </Flex>
    
  );
};

export default Chart123;
