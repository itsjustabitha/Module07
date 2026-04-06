// AddCatForm.jsx
import { useState } from 'react'

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('')
  const [latinName, setLatinName] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !latinName) return // basic guard
    onAddCat({ name, latinName, imageUrl })
    // Reset fields after submit
    setName('')
    setLatinName('')
    setImageUrl('')
  }

  return (
    <div className="AddCatForm componentBox">
      <h3>Add a New Big Cat</h3>
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Name:
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Latin Name:
            <input
              name="latinName"
              value={latinName}
              onChange={(e) => setLatinName(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Image URL:
            <input
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
        </div>
        <button>Add Cat</button>
      </form>
    </div>
  )
}

export default AddCatForm