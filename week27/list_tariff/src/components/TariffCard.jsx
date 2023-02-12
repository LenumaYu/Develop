import React from 'react';
import '../styles/TariffCard.scss'

export default function TariffCard(props) {
    return (

        <div className={"card " + (props.isSelected ? "selected" : "")}>
            <div className='head' style={{ backgroundColor: props.backgroundColorHead }}>{props.name}</div>
            <div className='price' style={{ backgroundColor: props.backgroundColorPrice }}>{props.price}</div>
            <div className='speed'>{props.speed}</div>
            <div className='info'>{props.info}</div>
        </div >

    )
}
