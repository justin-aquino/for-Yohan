import axios from 'axios'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import "./Card.css"

const ShowCard = ({card, chooseImage, refresher, setRefresher, flashCardsToMap, setFlashCardsToMap}) => {

  const deleteCard = (cardToDelete) => {
    axios.delete(`http://localhost:8000/flashcards/${cardToDelete}`)
      .then(response => {
        setRefresher(!refresher)
        // setFlashCardsToMap(flashCardsToMap)
      })
    // console.log(cardToDelete)
  }
  return (
    <>
      <Card style={{ width: '18rem', height: '25rem' }} className="m-auto mb-5 sub-container">
        <Card.Img onClick={(event) => {chooseImage(card.name)}} variant="top" src={card.imageurl} style={{ height: '18rem' }}/>
        <Card.Body className='border'>
          <Card.Title>{card.name}</Card.Title>
        <Button className="bg-warning" >Edit</Button>
        <Button className="bg-danger" onClick={(e) => {deleteCard(card.flashcard_id)}} >Delete</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default ShowCard