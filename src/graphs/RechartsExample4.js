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
    { name: "2017", athletes: 32, coaches: 37, sportstrainers: 60, professionalgamers: 64 },
    { name: "2018", athletes: 50, coaches: 47, sportstrainers: 66, professionalgamers: 62 },
    { name: "2019", athletes: 58, coaches: 50, sportstrainers: 88, professionalgamers: 70 },
    { name: "2020", athletes: 67, coaches: 66, sportstrainers: 89, professionalgamers: 68},
    { name: "2021", athletes: 77, coaches: 88, sportstrainers: 96, professionalgamers: 66},
    { name: "2022", athletes: 88, coaches: 85, sportstrainers: 97, professionalgamers: 64 },
  ];
  //athletes, coaches, sports trainers, or professional gamers
  
  const RechartsExample = () => {
    return (
        
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="athletes" stroke="#2196F3" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="coaches"
          stroke="#F44236"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="sportstrainers" stroke="#FFCA29" strokeWidth={3} />
        <Line type="monotone" dataKey="professionalgamers" stroke="#FFFA29" strokeWidth={3} />
        
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );
  };
  
  export default RechartsExample;