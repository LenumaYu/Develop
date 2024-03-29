import React, { useState } from 'react';
import WordCard from '../WordCard/WordCard';
import '../CardSlider/CardSlider.scss';
import { words } from '../../App';

function CardSlider(props) {
    const [item, setItem] = useState(0);
    const [count, setCount] = useState(0);

    const handleCount = event => {
        setCount(count++);
    }

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
            <div>Вы изучили:{count}</div>
            <div className='slider'>
                <button className='leftArrow' onClick={prevItem}>&#706;</button>
                <WordCard key={props.words[item].id} {...props.words[item]} onChange={handleCount} />
                <button className='rightArrow' onClick={nextItem}>&#707;</button>
            </div>
            <div className='counter'>{item + 1}/{words.length}</div>
        </>
    );
}



export default CardSlider;


