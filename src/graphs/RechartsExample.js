import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  
  const data = [
    { name: "2017", physicists: 32, engineers: 37, mathematcian: 60, dataAnalyst: 60 },
    { name: "2018", physicists: 37, engineers: 38, mathematcian: 54, dataAnalyst: 62 },
    { name: "2019", physicists: 38, engineers: 48, mathematcian: 56, dataAnalyst: 70 },
    { name: "2020", physicists: 38, engineers: 47, mathematcian: 48, dataAnalyst: 65 },
    { name: "2021", physicists: 39, engineers: 40, mathematcian: 47, dataAnalyst: 64 },
    { name: "2022", physicists: 38, engineers: 44, mathematcian: 44, dataAnalyst: 67 },
  ];
  //counselors, social workers, psychologists, or teachers
  
  const RechartsExample = () => {
    return (
        
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="physicists" stroke="#2196F3" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="engineers"
          stroke="#F44236"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="mathematcian" stroke="#FFCA29" strokeWidth={3} />
        <Line type="monotone" dataKey="dataAnalyst" stroke="#FFFA29" strokeWidth={3} />
        
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );
  };
  
  export default RechartsExample;