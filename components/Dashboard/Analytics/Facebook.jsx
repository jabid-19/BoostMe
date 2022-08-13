import React from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  {
    month: 'Mar',
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: 'Apr',
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: 'May',
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: 'Jun',
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: 'Jul',
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: 'Aug',
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
]

const Facebook = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between mb-16">
          <h2 className="text-3xl font-bold">Overview</h2>
          <button className="btn btn-outline text-neutral normal-case max-w-xs">
            Add to Report
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="flex justify-between max-w-xs">
            <div>
              <div className="stat-title text-xl">Engaged Users</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-between max-w-xs">
            <div>
              <div className="stat-title text-xl">Post Impressions</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-between max-w-xs">
            <div>
              <div className="stat-title text-xl">Reactions</div>
              <div className="stat-value">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-between max-w-xs">
            <div>
              <div className="stat-title text-xl">Post Reach</div>
              <div className="stat-value">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-between max-w-xs">
            <div>
              <div className="stat-title text-xl">Page & Post Engagement</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-between max-w-xs">
            <div>
              <div className="stat-title text-xl">Link Clicks</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-between max-w-xs">
            <div>
              <div className="stat-title text-xl">New Fans</div>
              <div className="stat-value">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-between max-w-xs">
            <div>
              <div className="stat-title text-xl">Post</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-24" />
      <hr />
      <div className="mt-24">
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <h2 className="text-3xl font-bold">Average Performance</h2>
          <button className="btn btn-outline text-neutral normal-case max-w-xs mt-4 md:mt-0">
            Add to Report
          </button>
        </div>
        <div className="lg:grid grid-cols-1 md:grid-cols-2 md:gap-y-20 lg:grid-cols-3 ">
          <div>
            <h1 className="text-sky-400/100 font-bold">Month wise Sell</h1>
            <ResponsiveContainer width="80%" height={400}>
              <LineChart
                className="mx-auto"
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 50,
                  bottom: 50,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h1 className="text-sky-400/100 font-bold">Investment vs Revenue</h1>
            <ResponsiveContainer width="80%" height={400}>
              <AreaChart
                className="mx-auto"
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 50,
                  bottom: 50,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="investment"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h1 className="text-sky-400/100 font-bold">Investment vs Revenue</h1>
            <ResponsiveContainer width="80%" height={400}>
              <BarChart
                className="mx-auto"
                data={data}
                margin={{
                  top: 50,
                  bottom: 50,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* <div>
            <h1 className="text-sky-400/100 font-bold">Investment vs Revenue</h1>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <PieChart
              className="mx-auto"
              width={400}
              height={400}
              data={data}
              margin={{
                top: 0,
                bottom: 0,
              }}>
              <Pie
                data={data}
                dataKey="investment"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="revenue"
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={110}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Facebook
