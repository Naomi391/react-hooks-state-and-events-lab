import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleCart = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  const cartClass = inCart ? "in-cart" : "";
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className="add"
        onClick={handleCart}
        style={{ backgroundColor: inCart ? "purple" : "" }}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
