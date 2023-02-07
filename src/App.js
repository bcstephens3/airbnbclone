import './App.css';
import data from './data'
import Card from './Card';


function App() {
  const cards = data.map(item =>{
    return(
        <Card 
        key={item.id}
        //use that with the id ^ ^ ^
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        item={item}
        />
    )}
    
    ) 
    return (
    <div>{cards}</div>
  );
}

export default App;
