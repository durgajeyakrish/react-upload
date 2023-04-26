import React from 'react'
import './Seatbook.css'


const Seatbook = () => {

  let array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];
  let row = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
  ];
  let row1 = ["O", "P"];
  
  let royal = document.getElementById("seats-royal");
        let seatrow =22;
        let seatcol = 22;
        let currentrow;
        for(let i=0;i<seatrow;i++){
           let m= royal.innerHTML = royal.innerHTML + `<div class='row' id='row-${i}'><span class="light-grey-text">${String.fromCharCode(65+i)} &nbsp; &nbsp; </span></div>&nbsp;`;
            currentrow = document.getElementById(`row-${i}`);
            for(let j=0;j<seatcol;j++){
                currentrow.innerHTML = currentrow.innerHTML + `<a class='seat pointer'>${j+1}</a>`;
            }
            
        }
        console.log(currentrow);

  return (
    <div>
     <table>
      {
        array.map((e)=>{
          return(
            <tr>
                <td ><button>{e}</button></td>

             </tr>
          )

        })
      }
      
     </table>
      
    </div>
  )
}

export default Seatbook
