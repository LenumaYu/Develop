import { Chart } from "react-google-charts";

export const data = [
  ["Pet", "How many"],
  ["Кошки", 51],
  ["Собаки", 31],
  ["Попугаи", 2],
  ["Рыбки", 2],
  ["Другие", 14],
];

export const options = {
  title: "Каких домашних питомцев заводят в России?",
  slices: {
    0: { color: "#8594e4" },
    1: { color: "#c3195d" },
    2: { color: "#9fd3c7" },
    3: { color: "#ffb5b5" },
    4: { color: "#680747" }, 
  },
};



function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
/>
    </div>
  );
}

export default App;
