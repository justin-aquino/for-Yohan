
import { useRef, useState, useEffect } from 'react';
import './App.css';
import flashCards from './flashcards';
import axios from "axios"
import { Routes, Route } from 'react-router-dom';
import Register from './components/Users/Register';
import CardList from './components/Card/CardList';
import AddCard from './components/Card/AddCard';
import Navibar from './components/Layout/Navibar';

function App() {
  
  const [textToSpeak, setTextToSpeak] = useState("Hello Yohanie!")
  const [flashCardsToMap, setFlashCardsToMap] = useState([...flashCards])
  const [refresher, setRefresher] = useState(false)
  const synthRef = useRef(window.speechSynthesis)

  const chooseImage = (text) => {
    const utter = new SpeechSynthesisUtterance(text)
    synthRef.current.speak(utter)
  }


  useEffect(() => {
    axios.get(`http://localhost:8000/flashcards`)
      .then(response => {
        setFlashCardsToMap(response.data.rows)
      })
  },[refresher])

  
  return (
    <>
      <Navibar />
      <div className="container">
          <Routes>
              <Route path="/register" element={<Register />}/>
              <Route path="/add-card" element={<AddCard setFlashCardsToMap={setFlashCardsToMap} flashCardsToMap={flashCardsToMap} />}/>
              <Route path="/flashcards" element={<CardList refresher={refresher} setRefresher={setRefresher} flashCards={flashCardsToMap} chooseImage={chooseImage} />}/>
          </Routes>
        
      </div>
    </>
  );
}

export default App;
