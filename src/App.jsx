import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { WithCartContext } from './context/WithCartContext'
import { PizzasView } from './views/PizzasView'

function App() {
  return (
    <WithCartContext>
      <NavBar />  
      <PizzasView />
    </WithCartContext>
  )
}

export default App
