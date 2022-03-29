import React, {Fragment, useState} from "react";
import Burger from "./components/Burger";
import Cart from "./components/Cart"

//IMPORT IMG
import original from './IMG/original.jpg'
import kangreburger from './IMG/kangreburger.jpg'
import cheese from './IMG/cheese.jpg'
import italiana from './IMG/italiana.jpg'
import chicken from './IMG/chicken.jpg'


function App() {


  //Estado de las burguirs con listado de burguirs (como el meme jsjs)
  const [burgers, setburgers] = useState([
    {id: 1, image: original, nombre: 'ORIGINAL', precio: 250 },
    {id: 2, image: kangreburger, nombre: 'KANGREBURGER', precio: 180 },
    {id: 3, image: cheese, nombre: 'CHEESE BURGER', precio: 180},
    {id: 4, image: italiana, nombre: 'BURGER ITALIANA', precio: 150},
    {id: 5, image: chicken, nombre: 'CHICKEN BURGER', precio: 240}
  ])

  //Estado del carrito
  const [cart, setCart] = useState([])

  return (
    <Fragment>
      <section className="container">
        <section className="container__header">

          <div className="container__header__menu">
            <button className="container__header__menu--button"></button>
          </div>

          <div className="container__header__title">
            <h3 className="container__header__title--text">HAMBURGER</h3>
          </div>

          <div className="container__header__cartDiv">
            <Cart cart={cart} setCart={setCart} />
          </div>
        </section>
        
        <section className="container__content">

          <div className="container__content__title">
            <h1>Aprovecha solo por tiempo limitado combos 50% off!</h1>
          </div>

          <div>
          {burgers.map((burger) => (
          <Burger
          key={burger.id}
          burger={burger}
          cart={cart}
          setCart={setCart}
          burgers={burgers}
          />
        ))}
          </div>

        </section>

        <section className="container__footer">
          <p>HAMBURGER 2020 - Todos los derechos reservados</p>
        </section>

      </section>
    </Fragment>
  );
}

export default App;
