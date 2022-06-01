
import { useRef, useState } from 'react';
import './App.css';
import flashCards from './flashcards';
import Card from './components/Card/Card';

function App() {
  
  const [textToSpeak, setTextToSpeak] = useState("Hello Yohanie!")
  const synthRef = useRef(window.speechSynthesis)

  const chooseImage = (text) => {
    const utter = new SpeechSynthesisUtterance(text)
    synthRef.current.speak(utter)
  }

  const mappedCards = flashCards.map((card, idx) => {
    return <Card chooseImage={chooseImage} card={card} />
  })
  return (
    <div className="App">
      <h1>Hello Yohanie!</h1>
      {mappedCards}
    </div>
  );
}

export default App;
