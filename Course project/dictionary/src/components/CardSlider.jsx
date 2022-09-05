import React, { useState } from 'react';
import WordCard from './WordCard/WordCard';

function CardSlider(props) {
    const [count, setCount] = useState(0);
    const { id, ...itemProps } = props.words[count];

    return (
        <div className='container'>

            <button className='leftArrow' onClick={() => setCount(count - 1)}>&#706;</button>

            <WordCard key={id} {...itemProps} />
            <button className='rightArrow' onClick={() => setCount(count + 1)}>&#707;</button>
            <div>{count + 1}/{props.words.length}</div>
        </div>


    );
}

export default CardSlider;