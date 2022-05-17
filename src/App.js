import './App.css';
import star from './images/icon-star.svg';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="image">
        <img src={star} alt="star" />
        </div>
        <h1>How did we do?</h1>
        <p>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
        </p>
        <div className="rating-wrapper">
        <button className="ratings">1</button>
        <button className="ratings">2</button>
        <button className="ratings">3</button>
        <button className="ratings">4</button>
        <button className="ratings">5</button>
        </div>
        <button className="submit"><b>SUBMIT</b></button>
        
      </div>
    </div>
  );
}

export default App;
