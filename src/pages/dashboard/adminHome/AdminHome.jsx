import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Legend,
} from "recharts";
import useAuth from "../../../hooks/useAuth";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];

const AdminHome = () => {

  const {user} = useAuth()
  // TODO: remove after connect database
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const PyData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 250 },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="p-2 min-h-[calc(100vh-80px)] flex flex-col items-stretch justify-center">
      <h2 className="text-4xl mb-10 font-semibold">Hi {user?.displayName}, Welcome Back!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        <div className="flex items-center justify-center gap-4 p-6 md:p-[56px] bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white rounded-xl">
          <IoWalletSharp size={52} />
          <div>
            <h3 className="font-extrabold text-5xl">10000</h3>
            <h5 className="text-2xl">Revenue</h5>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 p-6 md:p-[56px] bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white rounded-xl">
          <FaUsers size={52} />
          <div>
            <h3 className="font-extrabold text-5xl">10000</h3>
            <h5 className="text-2xl">Customers</h5>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 p-6 md:p-[56px] bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white rounded-xl">
          <MdProductionQuantityLimits size={52} />
          <div>
            <h3 className="font-extrabold text-5xl">10000</h3>
            <h5 className="text-2xl">Products</h5>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 p-6 md:p-[56px] bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white rounded-xl">
          <TbTruckDelivery size={52} />
          <div>
            <h3 className="font-extrabold text-5xl">10000</h3>
            <h5 className="text-2xl">Orders</h5>
          </div>
        </div>
      </div>

      <div className="w-full lg:flex items-center justify-between">
        <div className="w-full">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="uv"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={PyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={160}
                fill="#8884d8"
                dataKey="value"
              >
                {PyData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
