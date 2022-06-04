import React from 'react'
import ShowCard from './ShowCard'

const CardList = ({flashCards, chooseImage}) => {

    const mappedCards = flashCards.map((card, idx) => {
        return <ShowCard chooseImage={chooseImage} card={card} key={idx} />
      })
  return (
    <div>{mappedCards}</div>
  )
}

export default CardList