import React, { useState } from 'react';
import './WordTable.scss'
import deleteButton from '../assets/images/deleteButton.png'
import editButton from '../assets/images/editButton.png'
import saveButton from '../assets/images/saveButton.png'



function WordTable(props) {
    const { id, tags, english, transcription, russian } = props;
    const [isEdit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(!isEdit);
    }

    return (
        <div className="table">
            {
                isEdit ?
                    <>
                        <div className='tableId'>{props.id}</div>
                        <input type="text" defaultValue={tags} />
                        <input type="text" defaultValue={english} />
                        <input type="text" defaultValue={transcription} />
                        <input type="text" defaultValue={russian} />
                        <div className='tableChanges'>
                            <button className='saveButton' onClick={handleEdit}><img src={saveButton} alt="" /></button>
                            <button className='deleteButton' onClick={handleEdit}>
                                <img src={deleteButton} alt="" />
                            </button>
                        </div>
                    </> :
                    <>
                        <div className='tableId'>{id}</div>
                        <div className='tableTag'>{tags}</div>
                        <div className='tableWord'>{english}</div>
                        <div className='tableTranscription'>{transcription}</div>
                        <div className='tableTranslate'>{russian}</div>
                        <div className='tableChanges'>
                            <button className='saveButton'><img src={saveButton} alt="" /></button>
                            <button className='editButton' onClick={handleEdit}><img src={editButton} alt="" /></button>
                            <button className='deleteButton'>
                                <img src={deleteButton} alt="" />
                            </button>
                        </div>
                    </>
            }
        </div>
    );
}


export default WordTable;