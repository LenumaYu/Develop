import React, { useState } from 'react';
import WordCard from './WordCard/WordCard';
import './CardSlider.scss';
import { words } from '../App';

function CardSlider(props) {
    const [item, setItem] = useState(0);
    // const { id, ...itemProps } = words[item];

    const prevItem = () => {
        if (item > 0) {
            setItem(item - 1);
            return;
        }

        setItem(props.words.length - 1);
    }

    const nextItem = () => {
        if (item < props.words.length - 1) {
            setItem(item + 1);
            return;
        }

        setItem(0);
    }



    return (
        <>
            <div className='slider'>
                <button className='leftArrow' onClick={prevItem}>&#706;</button>
                <WordCard key={props.words[item].id} {...props.words[item]} />
                <button className='rightArrow' onClick={nextItem}>&#707;</button>
            </div>
            <div className='counter'>{item + 1}/{words.length}</div>
        </>
    );
}



export default CardSlider;


