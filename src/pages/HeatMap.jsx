import React, { useState , useEffect} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HeatMap = () => {
   useEffect(() => {
    // Initialize scroll position
    window.scrollTo(0, 0);
  }, []);
  const [activeRegion, setActiveRegion] = useState(null);

  const data = [
    { name: 'Dhaka', uv: 2000, pv: 2400, amt: 2400 },
    { name: 'Khulna', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Barisal', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Chittagong', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Rajshahi', uv: 1590, pv: 4800, amt: 2181 },
    { name: 'Rangpur', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Sylhet', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Mymensingh', uv: 2490, pv: 4300, amt: 2100 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-xl border border-gray-200">
          <p className="font-bold text-gray-800">{label}</p>
          <div className="mt-2 space-y-1">
            <p className="text-blue-600">Reported Cases: <span className="font-bold">{payload[0].value}</span></p>
            <p className="text-green-600">Resolved Cases: <span className="font-bold">{payload[1].value}</span></p>
            <p className="text-purple-600">Active Cases: <span className="font-bold">{payload[2].value}</span></p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-6 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Corruption Heatmap in Bangladesh</h2>
            <p className="text-gray-600 mt-2">Distribution of corruption cases across different regions</p>
          </div>
          <div className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm">
            Updated: Today
          </div>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
              onMouseMove={(state) => {
                if (state.activeTooltipIndex !== undefined) {
                  setActiveRegion(data[state.activeTooltipIndex]);
                }
              }}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ffc658" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: '#555' }}
                axisLine={false}
                tickLine={false}
                padding={{ left: 20, right: 20 }}
              />
              <YAxis
                tick={{ fill: '#555' }}
                axisLine={false}
                tickLine={false}
                domain={[0, 10000]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
                activeDot={{ r: 8, stroke: '#8884d8', strokeWidth: 2, fill: '#fff' }}
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
              <Area
                type="monotone"
                dataKey="amt"
                stroke="#ffc658"
                fillOpacity={1}
                fill="url(#colorAmt)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Region Information */}
      {activeRegion && (
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">{activeRegion.name} Region</h3>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {activeRegion.pv > 5000 ? "High Activity" : "Medium Activity"}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-600 font-medium">Reported Cases</p>
              <p className="text-2xl font-bold text-gray-800">{activeRegion.uv.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mt-1">Total corruption reports</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-600 font-medium">Resolved Cases</p>
              <p className="text-2xl font-bold text-gray-800">{activeRegion.pv.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mt-1">Cases successfully resolved</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-amber-600 font-medium">Active Cases</p>
              <p className="text-2xl font-bold text-gray-800">{activeRegion.amt.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mt-1">Currently under investigation</p>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#8884d8] rounded mr-2"></div>
          <span className="text-gray-700">Reported Cases</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#82ca9d] rounded mr-2"></div>
          <span className="text-gray-700">Resolved Cases</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#ffc658] rounded mr-2"></div>
          <span className="text-gray-700">Active Cases</span>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-indigo-700 mb-2">Highest Resolution Rate</h4>
            <p className="text-gray-700">
              <span className="font-bold">Barisal</span> region shows the highest case resolution rate at
              <span className="font-bold text-green-600"> {Math.round(9800/2000 * 100)}%</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-indigo-700 mb-2">Most Active Region</h4>
            <p className="text-gray-700">
              <span className="font-bold">Sylhet</span> has the highest number of active cases with
              <span className="font-bold text-amber-600"> 3,490</span> cases currently under investigation
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default HeatMap;