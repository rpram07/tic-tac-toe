import React, {useState} from "react";


import React from 'react'

function Square({value, onSquareClick}){
    return (
            <button onClick={onSquareClick}>{value}</button>
    )
}
export default function board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    nextSquares = squares.slice();
    
    const [val, setVal] = useState('X');

    function handleClick({i})
    {

    }
  return (
    <div>
        <div>
            <Square value = {squares[0]} onSquareClick={() => handleClick(0) }/>
        </div>
    </div>
  )
}

