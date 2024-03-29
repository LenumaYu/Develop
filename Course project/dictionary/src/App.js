import './App.css';
import CardSlider from './components/CardSlider';
import WordTable from './components/WordTable/WordTable';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from '../src/assets/images/logo.png'

export const words = [{"id":"1","english":"Turquoise","transcription":"[ ˈtɜːkwɔɪz ]","russian":"Бирюзовый","tags":"Цвета","tags_json":"null"},{"id":"2","english":"Olive","transcription":"[ ˈɒlɪv ]","russian":"Оливковый","tags":"Цвета","tags_json":"null"},{"id":"3","english":"Sky blue","transcription":"[ skaɪ bluː ]","russian":"Небесно-голубой","tags":"Цвета","tags_json":"[\"u0446u0432u0435u0442u0430\"]"},{"id":"4","english":"Honeydew","transcription":"[ ˈhʌnɪdjuː ]","russian":"Медовый","tags":"Цвета","tags_json":"[\"u0446u0432u0435u0442u0430\"]"},{"id":"5","english":"Lime green","transcription":"[ laɪm ɡriːn ]","russian":"Лимонно-зеленый","tags":"Цвета","tags_json":"null"},{"id":"6","english":"Bay","transcription":"[bei]","russian":"Лавр","tags":"Деревья","tags_json":"[\"u0434u0435u0440u0435u0432u044cu044f\"]"},{"id":"7","english":"Larch","transcription":"[la:t∫]","russian":"Лиственница","tags":"Деревья","tags_json":"[\"u0434u0435u0440u0435u0432u044cu044f\"]"},{"id":"8","english":"Abdomen","transcription":"[ ˈæbdəmən ]\t","russian":"Живот","tags":"Анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"9","english":"Ankle","transcription":"[ ˈæŋkl̩ ]","russian":"Голеностоп","tags":"Анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"10","english":"Appendix","transcription":"[ əˈpendɪks ]","russian":"Аппендикс","tags":"Анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"11","english":"Artery","transcription":"[ ˈɑːtəri ]","russian":"Артерия","tags":"Анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"12","english":"Backbone","transcription":"[ ˈbækbəʊn ]","russian":"Позвоночник","tags":"Анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"13","english":"Biceps","transcription":"[ ˈbaɪseps ]","russian":"Бицепс","tags":"Анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"14","english":"Bowels","transcription":"[ ˈbaʊəlz ]","russian":"Кишечник","tags":"Анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"15","english":"Brain","transcription":"[ breɪn ]","russian":"Мозг","tags":"Анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"}]


function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <button className='home'><img src={logo}/></button>         
          <ul>
            <li>
              <Link className='link' to="/">Главная</Link>
            </li>
            <li>
              <Link className='link' to="/game">Тренировка</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/game" element={<CardSlider words={words}></CardSlider>} />
          <Route path="/" element={
            <div>
              <table>
                <tbody>
                  <tr className='extraString'>
                    <td className='cellOne'>#</td>
                    <td className='cellTwo'>Тема</td>
                    <td className='cellThree'>Слово</td>
                    <td className='cellFour'>Транскрипция</td>
                    <td className='cellFive'>Перевод</td>
                    <td className='cellSix'>Редактирование</td>
                  </tr>
                </tbody>
              </table>
              { 
              words.map((word) =>
                <WordTable key = {word.id} {...word} />
              )
              }   
            </div>} />
        </Routes>
      </div>          
    </Router> 
  );
}

export default App;



