import React, { useState } from 'react';


function getInitialState(){
    console.log('**********')
    return new Date().getDate()
}


const Counter = () => {
    // counters +1, +2
    // const [counter, setCounter] = useState(0)
    // counters + date
    const [counter, setCounter] = useState(() => getInitialState())
    // console.log(counter[0]) --> 0
    // console.log(counter[1]) --> function
    const [person, setPerson ] = useState({
        name: "John",
        lastName: "Snow"
    })
    //! counter +1
    // function increment(){
    //     setCounter(counter + 1)
    // }
    function decrement(){
        setCounter(counter - 1)
    }
    
    //! counter +2
    function increment(){
        setCounter((prevState) => prevState + 1)
        setCounter((prevState) =>{
          return  prevState + 1
        })
    }
    function changePerson(){
        setPerson((prev) => {
           return {
               ...prev,
               name: "Emily"
           }
        })
    }

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={increment} className="btn btn-success">+</button>
            <button onClick={decrement} className="btn btn-danger">-</button>
            <button onClick={changePerson} className="btn btn-warning"> Cange name </button>
            {/* <button onClick={() => setPerson({name : "Emily"})} className="btn btn-warning"> Cange name </button> */}
            <p>{JSON.stringify(person)}</p>
        </div>
    );
}
export default Counter;