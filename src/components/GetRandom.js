import React, { useState } from "react";


export default function GetRandom() {



var tab=[];

const [RandomNumber, setnumber] = useState([]);

const removeElement = (x) => {
  let p = [...RandomNumber];
  p.splice(x, 1)
  setnumber(p)
}

  const RandomInteger = () =>{
   
    setnumber(Array.apply(0, Array(10)).map(() => Math.floor(Math.random() * 100)));
  }
  const RandomBinary = () =>{
   
    setnumber(Array.apply(0, Array(10)).map(() => Math.floor(Math.random() * 100).toString(2)));
  }
  const RandomOctal = () =>{
   
    setnumber(Array.apply(0, Array(10)).map(() => Math.floor(Math.random() * 100).toString(8)));
  }
  const RandomHex = () =>{
   
    setnumber(Array.apply(0, Array(10)).map(() => Math.floor(Math.random() * 100).toString(16)));
  }
 
  return(
    <div>
      <ul>
             {RandomNumber.map((i, x) => {
   	         return <li key={x}>{i}</li>
            })}
        </ul>  
        <button onClick={removeElement}>
        Usun Element
        </button>
        <button onClick={RandomInteger}>
         Generuj Liczby całkowite
        </button>
        <button onClick={RandomBinary}>
         Generuj Liczby binarne
        </button>
        <button onClick={RandomOctal}>
         Generuj Liczby binarne
        </button>
        <button onClick={RandomHex}>
         Generuj Liczby binarne
        </button>
        
        
    </div>
  );





}