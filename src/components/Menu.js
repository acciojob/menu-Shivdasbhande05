import React from "react";

function Menu({ items }) {
    return (
      <div>
        {items.map((item) => (
          <div key={item.id} data-test-id= {`menu-item-${item.category}`}>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>category : {item.category}</p>
            <p>Price : {item.price}</p>
          </div>
        ))}
      </div>
    );
  }
  export default Menu;
  