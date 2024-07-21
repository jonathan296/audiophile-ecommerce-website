import { useState, useContext } from 'react'
import Products from './components/Products'
import { CartContext } from './context/cart'
import './index.css'
import { Routes, Route, Link } from 'react-router-dom'
import Details from './components/Details'
import Cart from './components/Cart'
import icon from './assets/react.svg'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'



function App() {
  const { cartItems } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)

  
    const toggle = () => {
        setShowModal(!showModal)
        
      }

  return (
    <div className='bg-gray-100 '>
        
        <div className='bg-[#101010] h-[729px] px-[165px] py-[32px] gap-6 flex flex-col justify-between mb-9 text-neutral-700'>
          <div className='flex'>
            <div>
            audiophile
            </div>
            <div>
            <Link to='/'className='text-2xl uppercase font-bold'>Home</Link>
            <Link to='/login'className='text-2xl uppercase font-bold'>log in</Link>
            <Link to='/login'className='text-2xl uppercase font-bold'>log in</Link>
            <Link to='/login'className='text-2xl uppercase font-bold'>log in</Link>
            <Link to='/login'className='text-2xl uppercase font-bold'>log in</Link>
            </div>

            <div>
              {!showModal && <button className=' bg-gray-800 text-white text-xs font-bold uppercase  hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
            onClick={toggle}>
            Cart ({cartItems.length})</button>}
            </div>
          </div>
          <hr className="border-t-2 border-red-500 my-4" />
          
          
        </div>
       
        <div>
          <Routes>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/' element={<Products/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>

        <Cart showModal={showModal} toggle={toggle}/>
    </div>
  )
}

export default App
