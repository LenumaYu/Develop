import '../../styles/WordCard.scss'



function WordCard(props) {

    const { tags, english, transcription, russian } = props;

    return (
        <div className='container'>
            <div className="card">
                <div className='tag'>{tags}</div>
                <div className='word'>{english}</div>
                <div className='transcription'>{transcription}</div>
                <div className='translate'>{russian}</div>
            </div>
        </div>
    );
}

export default WordCard;