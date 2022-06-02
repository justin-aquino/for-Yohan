import React from 'react'
import { Card } from 'react-bootstrap'
import "./Card.css"

const ShowCard = ({card, chooseImage}) => {
  return (
    <div className='main-container'>
      <Card onClick={(event) => {chooseImage(card.name)}} style={{ width: '18rem', height: '18rem' }} className="card m-auto">
        <Card.Img variant="top" src={card.imageUrl} style={{ height: '18rem' }}/>
        <Card.Body className='border bg-light'>
          <Card.Title className='text-center '>{card.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ShowCard