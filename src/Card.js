export default function Card(props) {
    return (
        <div className="card-one">
            <img src={`./${props.img}`} className="card-img"></img>
            <div className="card-stats">
                <img src="./star.png" className="cardstar"></img>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price} / </span>person</p>

        </div>
    )
}