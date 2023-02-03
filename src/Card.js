export default function Card() {
    return (
        <div className="card-one">
            <img src="./swimmer.png" className="card-img"></img>
            <div className="card-stats">
                <img src="./star.png" className="cardstar"></img>
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 / </span>person</p>

        </div>
    )
}