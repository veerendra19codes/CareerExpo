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
    { name: "2017", writers: 32, artists: 37, musician: 60, graphicdesigner: 60 },
    { name: "2018", writers: 38, artists: 38, musician: 66, graphicdesigner: 74 },
    { name: "2019", writers: 44, artists: 38, musician: 77, graphicdesigner: 70 },
    { name: "2020", writers: 50, artists: 48, musician: 88, graphicdesigner: 65 },
    { name: "2021", writers: 49, artists: 47, musician: 99, graphicdesigner: 60 },
    { name: "2022", writers: 47, artists: 40, musician: 98, graphicdesigner: 55 },
  ];
  //writers, artists, musicians, or graphic designers
  
  const RechartsExample2 = () => {
    return (
        
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="writers" stroke="#2196F3" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="artists"
          stroke="#F44236"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="musician" stroke="#FFCA29" strokeWidth={3} />
        <Line type="monotone" dataKey="graphicdesigner" stroke="#FFFA29" strokeWidth={3} />
        
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );
  };
  
  export default RechartsExample2;