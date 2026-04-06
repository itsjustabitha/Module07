// ============================= SingleCat.jsx - Exercise 05 Slide 80 =============================
function SingleCat({ id, name, latinName, imageUrl, onDelete }) {
  return (
    <li>
      <img src={imageUrl} alt={name} width="100" height="100" />
      <strong>{name}</strong> — <em>{latinName}</em>
      <span
        onClick={() => onDelete(id)}
        style={{ marginLeft: '1em', color: 'red', cursor: 'pointer' }}
      >
        Delete
      </span>
    </li>
  )
}

export default SingleCat




// ============================= SingleCat.jsx - Exercise 02 Slide 47 =============================

// function SingleCat({ name, latinName, imageUrl }) {
//   return (
//     <li>
//       <img src={imageUrl} alt={name} width="100" height="100" />
//       <strong>{name}</strong> — <em>{latinName}</em>
//     </li>
//   )
// }

// export default SingleCat