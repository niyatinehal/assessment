import React, { useState } from 'react'


export const FlightBooker = () => {

    const [flightType,setFlightType]=useState("one-way");
    const [departureDate, setDepartureDate]=useState("");
    const[returnDate,setReturnDate]=useState('');

    const today=new Date().toString().split('T')[0];


    //check if departure dats is valid
    const isDepartureValid=departureDate && departureDate>=today;

    //check if return ate is valid or not
    const isReturnValid=flightType==='Return' ? returnDate && returnDate>=departureDate :true;

    //check if all the data are valid

    const isFormValid= isDepartureValid && isReturnValid;

    const handleBooking=()=>{
        if(flightType==="one way"){
            alert(`you have booked a one way flight on ${departureDate}` )
        }else{
            alert(`you have booked a round ticket flight form ${departureDate} to ${returnDate}`)
        }
    }
  return (
    <div className=''>
        <h2>Flight Booker</h2>

        <div>
            <lable>Flight type:</lable>
            <select value={flightType} onChange={(e)=>setFlightType(e.target.value)}>
                <option>one way</option>
                <option>Return</option>
            </select>
        </div>

        <div>
            <lable>Select departure data</lable>
            <input type='date' value={departureDate} onChange={(e)=>setDepartureDate(e.target.value)}/>
        </div>

    {/*flight type conditional */}
    { flightType==="Return"&&(
        <div>
            <lable> Return Date</lable>
            <input type='date' value={returnDate} onChange={(e)=>setReturnDate(e.target.value)}/> min={departureDate|| today}
        </div>
    )
       
    }

    <button onClick={handleBooking}>Book Flight</button>
    </div>
  )
}
