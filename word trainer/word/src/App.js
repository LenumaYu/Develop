import WordCard from './components/WordCard/WordCard';
import WordList from './components/WordList/WordList';
import './styles/App.css';

const words = [{"id":"13206","english":"new","transcription":"[njuː]","russian":"новый","tags":"слова","tags_json":"[\"u0441u043bu043eu0432u0430\"]"},{"id":"13228","english":"dog","transcription":"[dog]","russian":"собака","tags":"животные", "isEdit":"true","tags_json":"[\"u0436u0438u0432u043eu0442u043du044bu0435\"]"},{"id":"13229","english":"mouse","transcription":"[mʌuːs]","russian":"мышь","tags":"животные","tags_json":"[\"u0436u0438u0432u043eu0442u043du044bu0435\"]"},{"id":"13230","english":"sun","transcription":"[ sʌn ] ","russian":"солнце","tags":"космос","tags_json":"[\"u043au043eu0441u043cu043eu0441\"]"},{"id":"13231","english":"green","transcription":"[ griːn ]","russian":"зелёный","tags":"цвета","tags_json":"[\"u0446u0432u0435u0442u0430\"]"},{"id":"13233","english":"apple","transcription":"[ ˈæpl ]","russian":"яблоко","tags":"фрукты","tags_json":"[\"u0444u0440u0443u043au0442u044b\"]"},{"id":"13237","english":"home","transcription":" [həʊm]","russian":"дом","tags":"дом","tags_json":"[\"u0434u043eu043c\"]"},{"id":"13251","english":"carrot","transcription":" [ˈkærət]","russian":"морковь","tags":"овощ","tags_json":"[\"u043eu0432u043eu0449\"]"},{"id":"13262","english":"purple","transcription":"[pɜːpl]","russian":"фиолетовый","tags":"цвета","tags_json":"[\"u0446u0432u0435u0442u0430\"]"},{"id":"13265","english":"little","transcription":"[ˈlɪt.əl] ","russian":"немного","tags":"количество","tags_json":"[\"u043au043eu043bu0438u0447u0435u0441u0442u0432u043e\"]"},{"id":"13269","english":"universe","transcription":"[ˈjuːnɪvɜːs]","russian":"вселенная","tags":"космос","tags_json":"[\"u043au043eu0441u043cu043eu0441\"]"},{"id":"13271","english":"cornflower","transcription":"[ˈkɔːnflaʊə]","russian":"василек","tags":"растения","tags_json":"[\"u0440u0430u0441u0442u0435u043du0438u044f\"]"},{"id":"13272","english":"bee","transcription":"[biː]","russian":"пчела","tags":"насекомые","tags_json":"[\"u043du0430u0441u0435u043au043eu043cu044bu0435\"]"},{"id":"13289","english":"lilac","transcription":"[ˈlaɪlək]","russian":"сирень","tags":"растения","tags_json":"[\"u0440u0430u0441u0442u0435u043du0438u044f\"]"},{"id":"13316","english":"orange","transcription":"[ˈɔːrɪndʒ]","russian":"апельсин","tags":"","tags_json":"[\"\"]"},{"id":"13334","english":"stop","transcription":"stv:p","russian":"остановка","tags":"","tags_json":"[\"\"]"}]

function App() {
  return (
    <div className="App">
      {words.map((word) =>
                <WordList
                    key={word.id} {...word}
                />
            )}
      {words.map((word) =>
                <WordCard
                    key={word.id} {...word}
                />
            )}
    </div>
  );
}

export default App;
