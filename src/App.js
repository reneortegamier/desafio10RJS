import React, {Fragment, useState} from "react";
import Burger from "./components/Burger";
import Cart from "./components/Cart"

function App() {


  //Estado de las burguirs con listado de burguirs (como el meme jsjs)
  const [burgers, setburgers] = useState([
    {id: 1, nombre: 'Burger completa', precio: 250 },
    {id: 2, nombre: 'Kangreburger', precio: 180 },
    {id: 3, nombre: 'Burger con queso', precio: 180},
    {id: 4, nombre: 'Burger con jamon y queso', precio: 150},
    {id: 5, nombre: 'Burger de pollo completa', precio: 240}
  ])

  //Estado del carrito
  const [cart, setCart] = useState([])

  return (
    <Fragment>
      <h3>Burgers</h3>
      {burgers.map((burger) => (
        <Burger
        key={burger.id}
        burger={burger}
        cart={cart}
        setCart={setCart}
        burgers={burgers}
        />
      ))}

      <Cart 
      cart = {cart}


      />

    </Fragment>
  );
}

export default App;
