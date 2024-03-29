import React, { useState } from 'react';
import './WordCard.scss'


function WordCard(props, { handleCount }) {

    const { tags, english, transcription, russian } = props;
    const [pressed, setPressed] = useState(false);


    const handlePressed = () => {
        setPressed(!pressed);
    }

    return (
        <div className='container'>
            <div className="card">
                <div className='tag'>{tags}</div>
                <div className='word'>{english}</div>
                <div className='transcription'>{transcription}</div>
                {
                    pressed ?
                        <>
                            <div className='translate' onClick={handlePressed}>{russian}</div>
                        </> : <>
                            <button className='buttonCheck' onChange={handleCount} onClick={handlePressed}>Проверить</button>
                        </>
                }
            </div>
        </div>
    );
}

export default WordCard;

