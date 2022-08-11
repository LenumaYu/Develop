import './HeroCard.css';

function HeroCard(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <div>Вселенная: {props.universe}</div>
            <div>Альтер эго: {props.alterEgo}</div>
            <div>Род деятельности: {props.lineOfWork}</div>
            <div>Друзья: {props.friends}</div>
            <div>Суперсилы: {props.superpowers}</div>
            <img className="photo" src={props.photo} alt="" />
            <div>Подробнее: {props.extraInfo}</div>
        </div >
    );
}

export default HeroCard;