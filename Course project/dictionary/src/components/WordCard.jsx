import './WordCard.scss'



function WordCard(props) {
    return (
        <div className='container'>
            <button className='leftArrow'>&#706;</button>
            <div className="card">
                <div className='tag'>{props.tags}</div>
                <div className='word'>{props.english}</div>
                <div className='transcription'>{props.transcription}</div>
                <div className='translate'>{props.russian}</div>
            </div>
            <button className='rightArrow'>&#707;</button>
        </div>
    );
}

export default WordCard;