import React from "react";
import burger from "../assets/a.jpg"; 
import pizza from "../assets/b.jpg"; 
import pasta from "../assets/Bop.jpg"; 
import sushi from "../assets/burger.jpg"; 
import salads from "../assets/Cp.jpg"; 
import './stylee.css';


const categories = [
  { name: "Pizza", image: burger },
  { name: "Burgers", image: pizza},
  { name: "Pasta", image: pasta },
  { name: "Sushi", image: sushi },
  { name: "Salads", image: salads }
];

function Categories() {
  return (
    <div ><div className="categories">
      <h2 className="text">Food Categories</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.image} alt={category.name} className="category-image" />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Categories;
