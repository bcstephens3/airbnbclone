export default function Card(props) {
    return (
        <div className="card-one">
            <img src={`./${props.img}`} className="card-img"></img>
            <div className="card-stats">
                <img src="./star.png" className="cardstar"></img>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} / </span>person</p>

        </div>
    )
}