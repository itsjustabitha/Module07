// ============================= Calculator.jsx - Exercise 06 Slide 80 =============================

// useState hookSlide 49-50
// Controlled form inputs with value + onChangeSlide 73-74
// onSubmit + e.preventDefault()Slide 79
// select as a controlled elementSlide 74
// Conditional rendering {result !== '' && ...}Slide 30



import { useState } from 'react'

function Calculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('')

  const handleCalculate = (e) => {
    e.preventDefault()
    const a = parseFloat(num1)
    const b = parseFloat(num2)

    if (operator === '+') setResult(a + b)
    if (operator === '-') setResult(a - b)
    if (operator === '*') setResult(a * b)
    if (operator === '/') setResult(a / b)
  }

  return (
    <div className="Calculator componentBox">
      <h2>Calculator</h2>
      <form onSubmit={handleCalculate}>
        <label>
          Number 1:
          <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        </label>
        <label>
          Operator:
          <select value={operator} onChange={(e) => setOperator(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </label>
        <label>
          Number 2:
          <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        </label>
        <button>Calculate</button>
      </form>
      {result !== '' && <p>Result: {result}</p>}
    </div>
  )
}

export default Calculator