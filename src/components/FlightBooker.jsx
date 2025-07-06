import { useState } from 'react'

function FlightBooker() {
  const [flightType, setFlightType] = useState('one-way')
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD

  const isDepartureValid = departureDate && departureDate >= today
  const isReturnValid =
    flightType === 'return' ? returnDate && returnDate >= departureDate : true

  const isFormValid = isDepartureValid && isReturnValid

  const handleBooking = () => {
    if (flightType === 'one-way') {
      alert(`You have booked a one-way flight on ${departureDate}.`)
    } else {
      alert(
        `You have booked a return flight from ${departureDate} to ${returnDate}.`
      )
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-4">Flight Booker</h2>

      <div className="mb-3">
        <label className="block mb-1">Flight Type:</label>
        <select
          value={flightType}
          onChange={(e) => setFlightType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="one-way">One-Way</option>
          <option value="return">Return</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="block mb-1">Departure Date:</label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="w-full p-2 border rounded"
          min={today}
        />
      </div>

      {flightType === 'return' && (
        <div className="mb-3">
          <label className="block mb-1">Return Date:</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full p-2 border rounded"
            min={departureDate || today}
          />
        </div>
      )}

      <button
        onClick={handleBooking}
        disabled={!isFormValid}
        className={`w-full p-2 rounded text-white ${
          isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400'
        }`}
      >
        Book Flight
      </button>
    </div>
  )
}

export default FlightBooker
