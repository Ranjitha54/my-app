import './App.css';
import {useState} from "react";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

function App() {
  const[cartItems, setCartItems] = useState([]);
  const[isCartOpen, setIsCartOpen] = useState(false);

  // 
  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };


  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  return (
    <div className="App">
       <Navbar cartCount = {cartItems.length} openCart = {openCart} />
       <ProductList addToCart = {addToCart} cartItems = {cartItems} />

        {isCartOpen && 
        <CartModal cartItems = {cartItems} 
            updateQuantity={updateQuantity}
            removeFromCart = {removeFromCart} 
            closeModal = {closeCart} />}

    </div>
  );
}

export default App;
