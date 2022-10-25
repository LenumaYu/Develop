import './App.css';
import TariffCard from './components/TariffCard'


const rates = [{
  id: 1,
  name: "Безлимитный 300",
  price: "300 руб/мес",
  speed: "до 10 Мбит/сек",
  backgroundColorPrice: "#1FC2D0",
  backgroundColorHead: "#2D929E",
  info: "Объем включенного трафика не ограничен"
}, {
  id: 2,
  name: "Безлимитный 450",
  price: "450 руб/мес",
  speed: "до 50 Мбит/сек",
  backgroundColorPrice: "#23AE8D",
  backgroundColorHead: "#24AA8B",
  info: "Объем включенного трафика не ограничен"
}, {
  id: 3,
  name: "Безлимитный 550",
  price: "550 руб/мес",
  speed: "до 100 Мбит/сек",
  backgroundColorPrice: "#F46A5F",
  backgroundColorHead: "#EE6C5D",
  isSelected: true,
  info: "Объем включенного трафика не ограничен"
}, {
  id: 4,
  name: "Безлимитный 1000",
  price: "1000 руб/мес",
  speed: "до 200 Мбит/сек",
  backgroundColorPrice: "#333A44",
  backgroundColorHead: "#333A44",
  info: "Объем включенного трафика не ограничен"
}];

function App() {
  return ( <div className = "App"> {
      rates.map((rate) =>
        <TariffCard 
        key = {rate.id} 
        name = {rate.name} 
        price = {rate.price} 
        speed = {rate.speed} 
        backgroundColorPrice = {rate.backgroundColorPrice} 
        backgroundColorHead = {rate.backgroundColorHead} 
        info = {rate.info} 
        isSelected = {rate.isSelected}
        />
      )
    }
    </div>
    )}


export default App;
