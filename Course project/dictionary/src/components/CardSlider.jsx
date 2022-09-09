import React, { useState, useEffect } from 'react';
import WordCard from './WordCard/WordCard';
import './CardSlider.scss'

function CardSlider(props) {
    const [item, setItem] = useState(0);
    const { id, ...itemProps } = props.words[item];


    useEffect(() => {
        const lastItem = props.words.length - 1;
        if (item < 0) {
            setItem(lastItem)
        }
        if (item > lastItem) {
            setItem(0);
        }
    }, [item, props.words.length]);


    return (
        <>

            <div className='slider'>
                <button className='leftArrow' onClick={() => setItem(item - 1)}>&#706;</button>
                <WordCard key={id} {...itemProps} />
                <button className='rightArrow' onClick={() => setItem(item + 1)}>&#707;</button>
            </div>
            <div className='counter'>{item + 1}/{props.words.length}</div>
        </>

    );
}

export default CardSlider;


