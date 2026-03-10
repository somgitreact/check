

import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import MenuStructure from './navigation/MenuStructure'
import Context from './context/Context'

function App() {


  return (
    <Context>
    <BrowserRouter>
   
    <div className='flex flex-col  h-[100vh]'>
   <Header />
<main className='mainsec flex  flex-1 w-full'>
 <MenuStructure />
</main>
   <Footer />
    </div>
    </BrowserRouter>
    </Context>
  )
}

export default App
