import React, { useState } from 'react';
import '../components/styles.scss'


function TariffCard(props) {

    const [selected, setSelected] = useState(false);

    const handleSelect = () => {
        setSelected(!selected);
    }

    return (
        <div onClick={handleSelect} className={"card " + (selected ? "selected" : "")}>
            <div className='head' style={{ backgroundColor: props.backgroundColorHead }}>{props.name}</div>
            <div className='price' style={{ backgroundColor: props.backgroundColorPrice }}>{props.price}</div>
            <div className='speed'>{props.speed}</div>
            <div className='info'>{props.info}</div>
        </div >
    );
}

export default TariffCard;