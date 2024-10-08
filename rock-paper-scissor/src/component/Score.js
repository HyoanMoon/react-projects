import React from 'react'

const Score = (props) => {
  return (
    <div>
      <h3>{props.userScore} : {props.computerScore}</h3>
    </div>
  )
}

export default Score
