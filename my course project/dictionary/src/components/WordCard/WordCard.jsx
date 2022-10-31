import React, { useState } from 'react';
import './WordCard.scss'


function WordCard(props) {

    const { tags, english, transcription, russian } = props;
    const [pressed, setPressed] = useState(false);

    const handlePressed = () => {
        setPressed(!pressed);
    }

    return (
        <div className='container'>
            <div className="card">{
                pressed ?
                    <>
                        <div className='tag'>{tags}</div>
                        <div className='word'>{english}</div>
                        <div className='transcription'>{transcription}</div>
                        <div className='translate' onClick={handlePressed}>{russian}</div>
                    </> : <>
                        <div className='tag'>{tags}</div>
                        <div className='word'>{english}</div>
                        <div className='transcription'>{transcription}</div>
                        <button className='buttonCheck' onClick={handlePressed}>Проверить</button>
                    </>
            }
            </div>
        </div>
    );
}

export default WordCard;