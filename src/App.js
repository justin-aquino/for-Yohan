
import { useRef, useState } from 'react';
import './App.css';
import flashCards from './flashcards';
import ShowCard from './components/Card/ShowCard';
import { CardGroup } from 'react-bootstrap';

function App() {
  
  const [textToSpeak, setTextToSpeak] = useState("Hello Yohanie!")
  const synthRef = useRef(window.speechSynthesis)

  const chooseImage = (text) => {
    const utter = new SpeechSynthesisUtterance(text)
    synthRef.current.speak(utter)
  }

  const mappedCards = flashCards.map((card, idx) => {
    return <ShowCard chooseImage={chooseImage} card={card} key={idx} />
  })
  return (
    <div className="container">
      <h1>Hello Yohanie!</h1>
      <div className=" subCont ">
        <CardGroup className="border bg-light subCont">
          {mappedCards}
        </CardGroup>
      </div>
    </div>
  );
}

export default App;
