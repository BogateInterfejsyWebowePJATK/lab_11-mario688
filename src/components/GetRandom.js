import React, { useState } from "react";


export default function GetRandom() {



var tab=[];

const [RandomNumber, setnumber] = useState([]);

  const Random = () =>{
    setnumber(Array.apply(0, Array(10)).map(() =>Math.floor(Math.random() * 100)));
  }
  return(
    <div>
      <ul>
             {RandomNumber.map((i, x) => {
   	         return <li key={x}>{i}</li>
            })}
        </ul>  
        <button onClick={Random}>
         Generuj Liczby
        </button> 
    </div>
  );





}