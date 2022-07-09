
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



function Piechart(props){


  const data = [
    { name: "disgust", value: props.disgust*100 },
    { name: "fear", value: props.fear*100 },
    { name: "joy", value: props.joy*100 },
    { name: "sadness", value: props.sadness*100}
  ];
  const COLORS = ["#C92416", "#009BF3", "#B54AF6", "#2FC5A1"];


const PieComponent  = () => (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

    </PieChart>
  
);

    return (
        <div>
            <PieComponent></PieComponent>
        </div>
    );
}

export default Piechart;