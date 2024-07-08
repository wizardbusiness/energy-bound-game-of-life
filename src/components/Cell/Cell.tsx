import React from 'react'
import './Cell.css'

type CellProps = {
  color: 'black' | 'white'
}

const Cell = ({ color }: CellProps) => {
  return (
    <div className="square"></div>
  )
}

export default Cell