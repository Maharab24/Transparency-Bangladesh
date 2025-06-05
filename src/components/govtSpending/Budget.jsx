import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    expenditure: 4000,
    budget: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    expenditure: 3000,
    budget: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    expenditure: 2000,
    budget: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    expenditure: 2780,
    budget: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    expenditure: 1890,
    budget: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    expenditure: 2390,
    budget: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    expenditure: 3490,
    budget: 4300,
    amt: 2100,
  },
];

const Budget = () => {
    return (
          <ResponsiveContainer width="100%" height={400}>
               <BarChart
                     width={1200}
                   height={700}
                 data={data}
                 margin={{
                   top: 5,
                   right: 30,
                   left: 20,
                   bottom: 5,
                 }}
               >
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip />
                 <Legend />
                 <Bar dataKey="budget" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                 <Bar dataKey="expenditure" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
               </BarChart>
             </ResponsiveContainer>
    );
};

export default Budget;