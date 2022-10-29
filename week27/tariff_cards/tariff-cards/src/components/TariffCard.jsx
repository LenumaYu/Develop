import React, { useState } from 'react';
import './styles.scss'

function TariffCard(props) {
    const { name, price, speed, info } = props;
    const [selected, setSelected] = useState(false);

    const handleSelect = () => {
        setSelected(!selected);
    }

    return (
        <div onClick={handleSelect} className={"card " + (selected ? "selected" : "")}>
            <div className='head' style={{ backgroundColor: props.backgroundColorHead }}>{name}</div>
            <div className='price' style={{ backgroundColor: props.backgroundColorPrice }}>{price}</div>
            <div className='speed'>{speed}</div>
            <div className='info'>{info}</div>
        </div >
    );
}

export default TariffCard;