export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if(props.item.location === "Online")
    {
        badgeText="ONLINE"
    }
    // we are doing normal js stuff in here!! 
    return (
        
        <div className="card-one">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`./${props.item.coverImg}`} className="card-img"></img>
            <div className="card-stats">
                <img src="./star.png" className="cardstar"></img>
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) • </span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ${props.item.price} / </span>person</p>

        </div>
    )
}