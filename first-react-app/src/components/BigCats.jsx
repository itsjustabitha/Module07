// BigCats.jsx - Exercise 02 Slide 47
import SingleCat from './SingleCat' // Exercise 02 Slide 47
import { useState } from 'react' // Exercise 03 Slide 72
import AddCatForm from './AddCatForm' // Exercise 05 Slide 80

const allCats = [ // I renamed 'cats' to 'allCats' for Exercise 04 Slide 72
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYp5JeE-1jd8lFU92CwrFaclY7NrtfTpaJqI53WMfVnRzvaZySlrxpLPvyiWEMrqSs9O_NkqURthHKg1SZjUHFMWCmeKhwu1dgcOXVw&s=10' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', imageUrl: 'https://www.wildgratitude.com/wp-content/uploads/2024/01/cougar-power-animal.jpg.webp' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', imageUrl: 'https://images.squarespace-cdn.com/content/v1/66ec3b49803ab81bf84f89e4/1737488319255-I9Y2KQ7FG8NLIZ15TZS0/Reno-Leopard-2025.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', imageUrl: 'https://i.natgeofe.com/k/2b693fc8-ddc6-4b26-ae61-84495b66e287/5rw-snow-leopard-blanket.jpg?wp=1&w=1084.125&h=609' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', imageUrl: 'https://www.fauna-flora.org/wp-content/uploads/2017/01/AdobeStock_127901077.jpeg' },
]

function BigCats() {
  const [currentCats, setCurrentCats] = useState(allCats)

  const handleSort = () => {
    const newCats = [...currentCats]
    newCats.sort((a, b) => a.name.localeCompare(b.name))
    setCurrentCats(newCats)
  }

  const handleReverse = () => {
    const newCats = [...currentCats]
    newCats.reverse()
    setCurrentCats(newCats)
  }

  const handleFilterPanthera = () => {
    const newCats = allCats.filter(cat => cat.latinName.startsWith('Panthera'))
    setCurrentCats(newCats)
  }

  const handleReset = () => {
    setCurrentCats(allCats)
  }

 // NEW: Add cat — clone array, add new cat with unique id - // Exercise 05 Slide 80
  const handleAddCat = (newCat) => {
    const newId = currentCats.length > 0
      ? Math.max(...currentCats.map(c => c.id)) + 1
      : 1
    setCurrentCats([...currentCats, { ...newCat, id: newId }])
  }

  // NEW: Delete cat — filter out the cat with matching id  - // Exercise 05 Slide 80
  const handleDeleteCat = (idToDelete) => {
    setCurrentCats(currentCats.filter(cat => cat.id !== idToDelete))
  }

  const catItems = currentCats.map(cat => (
    <SingleCat
      key={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      imageUrl={cat.imageUrl}
      onDelete={handleDeleteCat} // NEW: pass delete handler down - // Exercise 05 Slide 80
    />
  ))

  return (
    <div className="BigCats componentBox">
      <h2>Big Cats</h2>
      <div>
        <button onClick={handleSort}>Sort A–Z</button>
        <button onClick={handleReverse}>Reverse</button>
        <button onClick={handleFilterPanthera}>Panthera Only</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <ul>{catItems}</ul>
       <AddCatForm onAddCat={handleAddCat} /> {/* NEW - // Exercise 05 Slide 80 */}
    </div>
  )
}
// ============================= BigCats.jsx - Exercise 02 Slide 47 =============================
// function BigCats() {
//   const catItems = cats.map(cat => (
//     <SingleCat
//       key={cat.id}
//       name={cat.name}
//       latinName={cat.latinName}
//       imageUrl={cat.imageUrl}
//     />
//   ))

//   return (
//     <div className="BigCats componentBox">
//       <h2>Big Cats</h2>
//       <ul>{catItems}</ul>
//     </div>
//   )
// }

export default BigCats


