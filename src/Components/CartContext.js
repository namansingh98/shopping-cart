import { Children, createContext, useState } from "react";
import { productArray, getProductData } from "./ProductStore";

// context (cart, addToCart, removeCart)
// Provider => gives your react app access to all the things in to your context

export const CartContext = createContext({
  item: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});
export function CartProvider({ Children }) {
  const quantity = cartProducts.find(product.id === id)?.quantity;
  if (quantity === undefined) {
    return 0;
  }
  return quantity;
}

function addOneToCart(id) {
  const quantity = getProductQuantity(id);
  if (quantity === 0) {
    //when product  not in cart
    setCartProducts([
      ...cartProducts,
      {
        id: id,
        quantity: 1,
      },
    ]);
  } else
    //product in cart
    setCartProducts(
      cartProducts,
      Map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
}

function removeFromCart(id) {
  const quantity = getProductQuantity(id);
  if (quantity == 1)
    setCartProducts(
      cartProducts,
      Map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
}

function getTotalCost() {
  let totalCost = 0;
  cartProducts.map((cartItem) => {
    const productData = getProductData(cartItem.id);
    totalCost += productData.price * cartItem.quantity;
  });
}

function deleteFromCart(id) {
  setCartProducts((cartProducts) =>
    cartProducts.filter((currentProduct) => {
      return currentProduct.id != id;
    })
  );
}

const [cartProducts, setCartProducts] = useState([]);


const contextValue = {
  items: cartProducts,
  getProductQuantity,
  addOneToCart,
  removeFromCart,
  deleteFromCart,
  getTotalCost,
}


return (
  <CartContext.Provider value={contextValue}>{Children}</CartContext.Provider>
)
}
export default CartProvider;
/*

bhawana9988

*/