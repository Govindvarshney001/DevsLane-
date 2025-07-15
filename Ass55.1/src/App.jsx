import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from './Table'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=' p-10 flex gap-10 m-5'>
    <Table/>
    <Table/>
   </div>
  )
}

export default App
