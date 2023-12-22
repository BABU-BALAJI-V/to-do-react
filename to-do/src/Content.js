import React, { useState } from 'react'

const Content = () => {
    const [name,setName] = useState("Balaji");
    function nameChange()
    {
      const name=["Balaji","Babu","Batman"];
      const num=Math.floor(Math.random()*3);
      setName(name[num]);
    }
    /*
    const [count,setCount] = useState(0);
    function incrementFunction()
    {
        setCount(count+1)
    }
    function decrementFunction()
    {
        setCount(count - 1)
    }
    */
  return (
    <main>
        <p>This is {name}</p>
        <button onClick={nameChange}> Subscribe </button>
    </main>    
  )
}

export default Content