import './App.css';
import data from './data'
import Card from './Card';


function App() {
  console.log(data);
  const cards = data.map(item =>{
    return(
        <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}/>
    )}
    
    ) 
    return (
    <div>{cards}</div>
  );
}

export default App;
