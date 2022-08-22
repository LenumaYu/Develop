
import './WordTable.scss'
import deleteButton from '../assets/images/deleteButton.png'
import editButton from '../assets/images/editButton.png'
import saveButton from '../assets/images/saveButton.png'



function WordTable(props) {
    return (
        <div className="table">
            <div className='tableId'>{props.id}</div>
            <div className='tableTag'>{props.tags}</div>
            <div className='tableWord'>{props.english}</div>
            <div className='tableTranscription'>{props.transcription}</div>
            <div className='tableTranslate'>{props.russian}</div>
            <div className='tableChanges'>
                <button><img src={saveButton} alt="" /></button>
                <button><img src={editButton} alt="" /></button>
                <button>
                    <img src={deleteButton} alt="" />
                </button>
            </div>
        </div>

    );
}

export default WordTable;