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
    { name: "2017", counselors: 32, socialworkers: 99, psychologist: 60, Teachers: 60 },
    { name: "2018", counselors: 48, socialworkers: 88, psychologist: 61, Teachers: 59 },
    { name: "2019", counselors: 89, socialworkers: 87, psychologist: 55, Teachers: 58 },
    { name: "2020", counselors: 77, socialworkers: 66, psychologist: 56, Teachers: 77 },
    { name: "2021", counselors: 67, socialworkers: 55, psychologist: 66, Teachers: 88 },
    { name: "2022", counselors: 55, socialworkers: 56, psychologist: 67, Teachers: 86 },
  ];
  //counselors, social workers, psychologists, or teachers
  
  const RechartsExample = () => {
    return (
        
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="counselors" stroke="#2196F3" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="socialworkers"
          stroke="#F44236"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="psychologist" stroke="#FFCA29" strokeWidth={3} />
        <Line type="monotone" dataKey="Teachers" stroke="#FFFA29" strokeWidth={3} />
        
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );
  };
  
  export default RechartsExample;