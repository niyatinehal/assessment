import Header from './components/Header'
import Home from './pages/Home'

import './utils/groupBy'

function App() {

 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Example 1: Grouping by even and odd numbers

const groupsByEvenOdd = numbers.groupBy(x => x % 2 === 0 ? 'Even' : 'Odd');

console.log(groupsByEvenOdd);

//Even:(4) [2, 4, 6, 8]
//Odd: (5) [1, 3, 5, 7, 9]



  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="p-4">
        <Home />
      </main>
    </div>
  )
}

export default App
