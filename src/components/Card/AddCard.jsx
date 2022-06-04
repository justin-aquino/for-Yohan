import axios from 'axios'
import React, { useState } from 'react'

const AddCard = ({setFlashCardsToMap, flashCardsToMap}) => {
    const [form, setForm] = useState({
        name: "",
        imageurl: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        axios.post(`http://localhost:8000/flashcards`, form)
        .then(response => {
            setFlashCardsToMap({...flashCardsToMap, form})
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={form.name} onChange={e => {setForm({...form, name: e.target.value})}}/>
            <label htmlFor="name">Image Url: </label>
            <input type="text" name="imageurl" id="imageurl" value={form.imageurl} onChange={e => {setForm({...form, imageurl: e.target.value})}}/>
            <input type="submit" value="Add Card" />
        </form>
    </div>
  )
}

export default AddCard