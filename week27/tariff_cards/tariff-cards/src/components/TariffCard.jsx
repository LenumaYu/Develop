import './styles.scss'

function TariffCard(props) {
    const { isSelected, name, price, speed, info } = props;

    return (
        <div className={"card " + (isSelected ? "selected" : "")}>
            <div className='head' style={{ backgroundColor: props.backgroundColorHead }}>{name}</div>
            <div className='price' style={{ backgroundColor: props.backgroundColorPrice }}>{price}</div>
            <div className='speed'>{speed}</div>
            <div className='info'>{info}</div>
        </div >
    );
}

export default TariffCard;