import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer>No.of {(length===1)?"item":"items"} in the list : {length}</footer>
  )
}

export default Footer