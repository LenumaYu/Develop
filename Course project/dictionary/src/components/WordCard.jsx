import './WordCard.scss'



function WordCard(props) {
    return (
        <div className="card">
            <div>{props.tags}</div>
            <div>{props.english}</div>
            <div>{props.transcription}</div>
            <div>{props.russian}</div>
        </div>
    );
}

export default WordCard;