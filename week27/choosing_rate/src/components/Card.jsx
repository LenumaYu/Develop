
function Card(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <div>{props.price}</div>
            <div>Альтер эго: {props.speed}</div>
            <div>Объем включенного трафика не ограничен</div>
        </div >
    );
}

export default Card;