import { useState, useContext } from "react";
import Products from "./components/Products";
import { CartContext } from "./context/cart";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import Cart from "./components/Cart";
import icon from "./assets/react.svg";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const { cartItems } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-gray-100 manrope">
      <div className="relative bg-[#191919]   h-[729px] px-[165px] pt-[32px] flex flex-col  text-[#FFFFFF]">
        <div className=" z-10 flex justify-between items-center mb-[36px]">
          <div>
            <img src="src\assets\shared\desktop\logo.svg"></img>
          </div>
          <div className=" flex gap-[34px] uppercase  leading-[25px] font-bold tracking-[2px] text-[13px] ">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/login" className="">
              HEADPHONES
            </Link>
            <Link to="/login" className=" ">
              SPEAKERS
            </Link>
            <Link to="/login" className=" ">
              EARPHONES
            </Link>
          </div>

          <div>
            {!showModal && (
              <button
                className="  text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={toggle}
              >
                {" "}
                <img src="src\assets\shared\desktop\icon-cart.svg"></img>
                {/* Cart ({cartItems.length}) */}
              </button>
            )}
          </div>
        </div>
        <hr className="z-10 border-[#FFFFFF] opacity-20 " />
        <img
          className="absolute m-auto inset-0 "
          src="src\assets\home\desktop\image-hero.jpg"
        ></img>
        <div className="z-10">
          <div className="flex flex-col gap-[24px] mb-[40px]">
            <p className=" manrope mt-[128px] opacity-[49.64%] uppercase tracking-[10px] font-normal text-[14px]">
              new product
            </p>
            <h1 className="text-[60px] font-bold w-[396px] leading-[58px]">
              XX99 Mark II Headphones
            </h1>
            <p className="w-[349px] leading-[25px] text-[15px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>

          <button className="default-button-1">see product</button>
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Cart showModal={showModal} toggle={toggle} />
    </div>
  );
}

export default App;
