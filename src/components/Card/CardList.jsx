import React from 'react'
import ShowCard from './ShowCard'

const CardList = ({flashCards, chooseImage, flashCardsToMap, setFlashCardsToMap, refresher, setRefresher}) => {

    const mappedCards = flashCards.map((card, idx) => {
        return <ShowCard chooseImage={chooseImage} flashCardsToMap={flashCardsToMap} setFlashCardsToMap={setFlashCardsToMap} refresher={refresher} setRefresher={setRefresher} card={card} key={idx} />
      })
  return (
    <div className='main-container m-auto'>
      {mappedCards}
    </div>
  )
}

export default CardList