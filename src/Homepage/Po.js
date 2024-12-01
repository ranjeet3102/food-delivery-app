import React from "react";
// import { useNavigate } from "react-router-dom";
import Hb from "../assets/Hb.jpg";
import Tb from "../assets/Tb.jpg";
import Cb from "../assets/Cb.jpg";
import Csb from "../assets/Csb.jpg";
import Csp from "../assets/Csp.jpg";
import Bop from "../assets/Bop.jpg";
import Ip from "../assets/Ip.jpg";
import Np from "../assets/Np.jpg";
import Cpa from "../assets/Cpa.jpg";  // Import dish images
import onp from "../assets/onp.jpg";  // Import dish images
import rwp from "../assets/rwp.jpg";  // Import dish images
import pasta from "../assets/pasta.jpg";  // Import dish images
import n from "../assets/n.jpg";  // Import dish images
import m from "../assets/m.jpg";  // Import dish images
import i from "../assets/i.jpg";  // Import dish images
import o from "../assets/o.jpg";  // Import dish images
import a from "../assets/a.jpg";  // Import dish images
import b from "../assets/b.jpg";  // Import dish images
import c from "../assets/c.jpg";  // Import dish images
import d from "../assets/d.jpg";  // Import dish images


const popularDishes = [
  { name: "Hamburger", price: "$10.99", image: Hb},
  { name: "Turkey Burger", price: "$8.99", image: Tb },
  { name: "Classic Burger", price: "$12.99", image: Cb },
  { name: "Lamb Burger", price: "$12.99", image: Csb },
  { name: "Chicago Style pizza", price: "$13.99", image: Csp},
  { name: "Brick Oven Pizza", price: "$14.99", image: Bop },
  { name: "Italian Pizza", price: "$12.99", image: Ip },
  { name: "Neapolitan Pizza", price: "$15.99", image: Np },
  { name: "cheese pasta", price: "$10.99", image: Cpa },
  { name: "One-Pan Pasta", price: "$11.99", image: onp },
  { name: "Red-Wine Pasta", price: "$18.99", image: rwp },
  { name: "Pasta alla Norma", price: "$2.99", image: pasta },
  { name: "Nigiri", price: "$19.99", image:  n},
  { name: "Makizushi - Rolled Sushi", price: "$8.99", image: m },
  { name: "Inarizushi", price: "$9.99", image: i},
  { name: "Oshizushi - Pressed Sushi", price: "$8.99", image: o },
  { name: "Caesar Salad", price: "$7.99", image: a},
  { name: "Greek Salad", price: "$6.99", image: b },
  { name: "Waldorf Salad", price: "$5.99", image:c  },
  { name: "Macaroni Salad", price: "$8.99", image:d  }
  
];

function Po() {
  const handleAddToCart = (dish) => {
    // Add the dish to the cart logic here
    alert(`Added ${dish.name} to cart!`);
  };
  return (

    <div className="popular-dishes">
      <h2 className="text">Popular Dishes</h2>
      <div className="dishes-list">
        {popularDishes.map((dish, index) => (
          <div key={index} className="dish-item">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>
            <button onClick={() => handleAddToCart(dish)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Po;
