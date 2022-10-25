import './WordList.scss'
import deleteButton from '../../assets/images/deleteButton.png'
import editButton from '../../assets/images/editButton.png'
import saveButton from '../../assets/images/saveButton.png'



function WordList(props) {
    const { id, tags, english, transcription, russian } = props;


    return (
        <div className="table">
            <div className='tableId'>{id}</div>
            <div className='tableTag'>{tags}</div>
            <div className='tableWord'>{english}</div>
            <div className='tableTranscription'>{transcription}</div>
            <div className='tableTranslate'>{russian}</div>
            <div className='tableChanges'>
                <button className='saveButton'><img src={saveButton} alt="" /></button>
                <button className='editButton'><img src={editButton} alt="" /></button>
                <button className='deleteButton'>
                    <img src={deleteButton} alt="" />
                </button>
            </div>
        </div>
    );
}

export default WordList;