import './App.css';
import WordCard from './components/WordCard';

const words = [{"id":"12074","english":"turquoise","transcription":"[ ˈtɜːkwɔɪz ]","russian":"бирюзовый","tags":"Array","tags_json":"null"},{"id":"12080","english":"olive","transcription":"[ ˈɒlɪv ]","russian":"оливковый","tags":"Array","tags_json":"null"},{"id":"12081","english":"sky blue","transcription":"[ skaɪ bluː ]","russian":"небесно-голубой","tags":"цвета","tags_json":"[\"u0446u0432u0435u0442u0430\"]"},{"id":"12082","english":"honeydew","transcription":"[ ˈhʌnɪdjuː ]","russian":"медовый","tags":"цвета","tags_json":"[\"u0446u0432u0435u0442u0430\"]"},{"id":"12083","english":"lime green","transcription":"[ laɪm ɡriːn ]","russian":"лимонно-зеленый","tags":"Array","tags_json":"null"},{"id":"12085","english":"bay","transcription":"[bei]","russian":"лавр","tags":"деревья","tags_json":"[\"u0434u0435u0440u0435u0432u044cu044f\"]"},{"id":"12086","english":"larch","transcription":"[la:t∫]","russian":"лиственница","tags":"деревья","tags_json":"[\"u0434u0435u0440u0435u0432u044cu044f\"]"},{"id":"12087","english":"abdomen","transcription":"[ ˈæbdəmən ]\t","russian":"живот","tags":"анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"12088","english":"ankle","transcription":"[ ˈæŋkl̩ ]","russian":"голеностоп","tags":"анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"12089","english":"appendix","transcription":"[ əˈpendɪks ]","russian":"аппендикс","tags":"анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"12091","english":"artery","transcription":"[ ˈɑːtəri ]","russian":"артерия","tags":"анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"12092","english":"backbone","transcription":"[ ˈbækbəʊn ]","russian":"позвоночник","tags":"анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"12093","english":"biceps","transcription":"[ ˈbaɪseps ]","russian":"бицепс","tags":"анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"12094","english":"bowels","transcription":"[ ˈbaʊəlz ]","russian":"кишечник","tags":"анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"},{"id":"12095","english":"brain","transcription":"[ breɪn ]","russian":"мозг","tags":"анатомия","tags_json":"[\"u0430u043du0430u0442u043eu043cu0438u044f\"]"}]



function App() {
  return (
    <div className="App"> {
      words.map((word) =>
        <WordCard key = {word.id} english = {word.english} russian = {word.russian} transcription = {word.transcription}
        tags = {word.tags}></WordCard>
      )
    }  
    </div>
  );
}

export default App;
