import React from 'react';
//import { Link } from 'react-router-dom';
const CartModal = ({ cartItems, removeFromCart, updateQuantity, closeModal }) => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedPrice = totalAmount - totalAmount * 0.1; // 10% discount

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="font-bold text-lg mb-4">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between mb-4">
                                <p className="text-lg font-bold">{item.title} </p>
                                <p>Price: ${item.price  }  </p>
                                <p>Quantity:   </p> 
                                <div className="flex items-center">
                                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                                  <span className="px-2">{item.quantity}</span>
                                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                               </div>
                                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white py-1 px-4 rounded" > Remove from Cart </button>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

                                
                            </div>

                ))}
               <div className="cart-summary">
                 <p>Total: ${totalAmount.toFixed(2)}</p>
                 <p>Discounted Total (10% off): ${discountedPrice.toFixed(2)}</p>
               </div>
            </div>
                )}
            <button onClick={closeModal} className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                Close
            </button>
        </div>
        </div >
    )

}
export default CartModal