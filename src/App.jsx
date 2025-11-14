import { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import { MotionConfig, motion } from "framer-motion";

import './App.css';
import './index.css';

function App() {

  const Headphones = [
    { id: 1, name: "Bluetooth Headphone", price: "₹2,999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOwGRuUYVEJRtjoMxB4xK-KgmPFXm0z6pyWKjZyfdhqKz4cu-NggLl_XxVVIUspXohng&usqp=CAU" },
    { id: 2, name: "Neckband", price: "₹1,499", image: "https://m.media-amazon.com/images/I/71WqgqIJ1tL.jpg" },
    { id: 3, name: "Earbuds", price: "₹3,999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQ1AQnzs-WTamWxEiDrw_JvPRW2ixXTIHZbhc3LYwarHVXEK_yCYYN_sQy4Rwvtl5Mn4&usqp=CAU" },
  ];
  const Mobile = [
    { id: 1, name: "Iphone 16 Pro", price: "₹2,999", image: "https://m.media-amazon.com/images/I/61d88xzrklL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, name: "Samsung S25 Ultra", price: "₹1,499", image: "https://images.samsung.com/in/smartphones/galaxy-s25-ultra/buy/product_color_gray_MO.png?imbypass=true" },
    { id: 3, name: "Smart Watch", price: "₹3,999", image: "https://oasis.opstatics.com/content/dam/oasis/page/2023/in/oneplus-10t/specs/10r-black.png" },
  ];
  const Fashion = [
    { id: 1, name: "Jeans", price: "₹2,999", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1736527960-untitled-3-67815035563fa.jpg?crop=0.774xw:0.830xh;0.111xw,0.0871xh&resize=980:*" },
    { id: 2, name: "Shirt", price: "₹1,499", image: "https://www.jiomart.com/images/product/original/rvincgw8kg/royar-traders-shirt-shirts-men-s-cotton-shirt-men-s-spread-collar-shirt-regular-fit-men-s-shirt-men-s-casual-shirt-men-s-formal-shirt-stylish-men-s-shirt-trendy-men-s-shirt-men-s-shirt-for-office-green-xxl-product-images-rvincgw8kg-0-202408011859.jpg?im=Resize=(1000,1000)" },
    { id: 3, name: "T-Shirt", price: "₹3,999", image: "https://nobero.com/cdn/shop/files/og.jpg?v=1744007258" },
  ];
  const Electronics = [
    { id: 1, name: "Washing Machine", price: "₹2,999", image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/308169_nhjiel.png" },
    { id: 2, name: "Television", price: "₹1,499", image: "https://5.imimg.com/data5/AL/SG/EA/SELLER-86610723/oscar-24xl23-24-inch-500x500.jpg" },
    { id: 3, name: "Refrigerator", price: "₹3,999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajBIzhaWwX38VGRmRhJuilLbGC9D2pLEprQsrPVkxDEi-3zQ3TC0V0rQmDfl29ZAERoU&usqp=CAU" },
  ];

  return (
    <div>

      {/* Header */}
      <header>
       
     <div className="logo-section">
    <img src="/logo.svg" alt="Shoplaza Logo" className="logo" />
    <h1>Shoplaza</h1>
  </div>
        <div className="search-box">
          <input type="text" placeholder="Search products..." />
        </div>
        <div className="categories">
  <button>Headphones</button>
  <button>Mobiles</button>
  <button>Fashion</button>
  <button>Electronics</button>


</div>
  <div className="cart-btn">
    <img src="/cart.svg" alt="" />
    <span>Cart</span>
  </div>

      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Big Sale Today! 🔥</h2>
        <p>Get up to 50% off on your favorite products</p>
      </section>

      {/* Product Grid */}
      <div className="product-grid">
        <h2 className="category-title" >Headphones</h2>
        {Headphones.map((Headphones) => (
          <div className="product-card" key={Headphones.id}>
            <img src={Headphones.image} alt="" />
            <h3>{Headphones.name}</h3>
            <p>{Headphones.price}</p>
            <button>Add to Cart</button>
          </div>
     
        ))}
         <h2 className="category-title" >Mobile</h2>
        {Mobile.map((Mobile) => (
          <div className="product-card" key={Mobile.id}>
            <img src={Mobile.image} alt="" />
            <h3>{Mobile.name}</h3>
            <p>{Mobile.price}</p>
            <button>Add to Cart</button>
          </div>
     
        ))}
         <h2 className="category-title" >Fashion</h2>
        {Fashion.map((Fashion) => (
          <div className="product-card" key={Fashion.id}>
            <img src={Fashion.image} alt="" />
            <h3>{Fashion.name}</h3>
            <p>{Fashion.price}</p>
            <button>Add to Cart</button>
          </div>
     
        ))}
         <h2 className="category-title" >Electronics</h2>
        {Electronics.map((Electronics) => (
          <div className="product-card" key={Electronics.id}>
            <img src={Electronics.image} alt="" />
            <h3>{Electronics.name}</h3>
            <p>{Electronics.price}</p>
            <button>Add to Cart</button>
          </div>
     
        ))}
      
      </div>

      {/* Footer */}
      <footer>© 2025 MyStore · All Rights Reserved</footer>
    </div>
  );
}

export default App;