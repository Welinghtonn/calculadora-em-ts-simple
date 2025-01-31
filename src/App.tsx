import { useState } from "react"

const App = () => {
  const [data, setData] = useState<string>("")
  const [previousValue, setPreviousValue] = useState<string>('');
  const [operation, setOperation] = useState<string>("")

  const add = (value: string) => {
    setData((prev) => prev + value);
  };

  const value = (op: string) => {
    if (data === '') return;
    setPreviousValue(data)
    setData("")
    setOperation(op)
  }

  const calcular = () => {
    if (data === "" || previousValue === "") return
    let result;

    const prev = parseFloat(previousValue)
    const current = parseFloat(data)

    switch (operation) {
      case "+":
        result = prev + current
        break
      case "-":
        result = prev - current
        break
      case "/":
        result = prev / current
        break
      case "*":
        result = prev * current
        break
      default:
        return;
    }

    setData(result.toString())
  }

  const apagar = () => {
    setData("")
  }

  return (
    <>
      <h1>Calculator welinghton</h1>

      <div className="container">
        <div className="resultado">{data}</div>
        <div className="card">
          <button onClick={() => add("1")}>1</button>
          <button onClick={() => add("2")}>2</button>
          <button onClick={() => add("3")}>3</button>
          <button className="cursor-pointer font-size" onClick={() => value("+")}>+</button>
          <button onClick={() => add("4")}>4</button>
          <button onClick={() => add("5")}>5</button>
          <button onClick={() => add("6")}>6</button>
          <button className="cursor-pointer font-size" onClick={() => value("-")}>-</button>
          <button onClick={() => add("7")}>7</button>
          <button onClick={() => add("8")}>8</button>
          <button onClick={() => add("9")}>9</button>
          <button className="cursor-pointer font-size" onClick={() => value("/")}>/</button>
          <button className="cursor-pointer font-size" onClick={apagar}>C</button>
          <button onClick={() => add("0")}>0</button>
          <button className="cursor-pointer font-size" onClick={calcular}>=</button>
          <button className="cursor-pointer font-size" onClick={() => value("*")}>*</button>
        </div>
      </div>
    </>
  )
}

export default App