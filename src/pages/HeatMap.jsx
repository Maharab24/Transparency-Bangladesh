import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Dhaka',
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Khulna',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Barisal',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Chittagong',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Rajshahi',
    uv: 1590,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Rangpur',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sylhet',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Mymensingh',
    uv: 2490,
    pv: 4300,
    amt: 2100,
  },
];


const HeatMap = () => {
    return (
         <ResponsiveContainer width="100%"  height={400}>
        <AreaChart
           width={1200}
            height={700}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
};
  

export default HeatMap;