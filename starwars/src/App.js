import React, {useState, useEffect} from 'react';
import './components/StarWars.css';
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState("https://swapi.co/api/people/?page=1");
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    console.log("use effect");
    axios.get(page)
      .then(res => {
        console.log("response ", res);

        res.data.next === null ? setNext("") : setNext(res.data.next);

        res.data.previous === null ? setPrevious("") : setPrevious(res.data.previous);
        
        setPeople(res.data.results)
      })
      .catch(error => {
        console.log("The API is currently down, try again later ", error);
      });
  }, [page]);

  const visitPrevious = () => previous !== "" ? setPage(previous) : 0 ;
  const visitNext = () => next !== "" ? setPage(next) : 0;

  return (
    <div className="App">
      <Header visitNext={visitNext} visitPrevious={visitPrevious} />
      {people.map(person => <Card person={person} />)}
    </div>
  );
}

export default App;
