import React from 'react'
import chartdata from './json file/marketchart.json'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS  ,   CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, } from 'chart.js'
import { Container , Box } from '@chakra-ui/react';

ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

const Chartview = ({ arr=[] , days }) => {
    let xvalues = [] // time
    let yvalues = [] //price

    for(let i = 0 ; i< arr.length ; i=i+3){
       ( days === '24h') ? xvalues.push(new Date(arr[i][0]).toLocaleTimeString()) : xvalues.push(new Date(arr[i][0]).toLocaleDateString())
        yvalues.push(arr[i][1])
    }

    const data = {
        labels : xvalues ,
        datasets : [
            {
                fill : false,
                data : yvalues,
                backgroundcolor : 'green',
                borderColor : 'green'
            }
        ]
    }


  return (
    <Box 
    display={'flex'}
    alignItems={'center'}
    justifyContent={'center'}
    w={['full']}
    h={'auto'}
    // p={'50px'}
    >
    <Line
      options={{
        responsive: true,
         legend: {display : false},
      }}
      data={data}
    />
    </Box>
  )
}

export default Chartview
