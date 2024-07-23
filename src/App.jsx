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
        
        <div className='relative bg-[#191919]  h-[729px] px-[165px] pt-[32px] flex flex-col  text-[#FFFFFF]'>
          <div className=' z-10 flex justify-between items-center mb-[36px]'>
            <div>
            <img src='src\assets\shared\desktop\logo.svg'></img>
            </div>
            <div className=' flex gap-[34px] uppercase manrope leading-[25px] font-bold tracking-[2px] text-[13px] '>
            <Link to='/'className=''>Home</Link>
            <Link to='/login'className=''>HEADPHONES</Link>
            <Link to='/login'className=' '>SPEAKERS</Link>
            <Link to='/login'className=' '>EARPHONES</Link>
            
            </div>

            <div>
              {!showModal && <button className='  text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
            onClick={toggle}> <img src='src\assets\shared\desktop\icon-cart.svg'></img>
            {/* Cart ({cartItems.length}) */}
            </button>}
            </div>
           
          </div>
          <hr className="w-[1110px] z-10 border-[#FFFFFF] opacity-20 " />
          <img className='absolute m-auto inset-0 ' src='src\assets\home\desktop\image-hero.jpg'></img>
          
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
