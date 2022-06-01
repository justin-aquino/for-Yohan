import React from 'react'
import "./Card.css"

const Card = ({card, chooseImage}) => {
  return (
    <div className="flex-container">
        <img src={card.imageUrl} alt={card.name} onClick={(event) => {chooseImage(card.name)}}/>
        {/* <CardImg src={card.imageUrl} className/> */}
    </div>
  )
}

export default Card