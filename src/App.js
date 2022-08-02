import React from 'react';
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  return ( 
      <Chart
  chartType="PieChart"
  data={[
    ["Pet", "%"],
    ["Собаки", 39],
    ["Кошки", 46],
    ["Кролики", 7],
    ["Рыбки", 6],
    ["Другие питомцы", 2],
  ]}
  width={'700px'}
  height={'700px'}
  options={{
    title: "Каких домашних питомцев заводят в России",
    slices: {
      0: { color: "#d6cbd3" },
      1: { color: "#eca1a6" },
      2: { color: "#bdcebe" },
      3: { color: "#ada397" },
      4: { color: "#92a8d1" },
    },
  }}
/>
  );
}

export default App;
