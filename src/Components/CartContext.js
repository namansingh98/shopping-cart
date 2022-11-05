import { Children, createContext, useState } from "react";
import { productArray } from "./ProductStore";

const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { }
});

export function CartProvider((children)) {
    const { cartProducts, setCartProducts } = useState([]);

    // [ { id:1, quantity :2 }] 

    function getProductQuantity(id) {
        cartProducts.fint(product => product.id === id)?.quantity
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);
        if (quantit === 0) {      // when product not in cart
            setCartProducts(
                [
                 ...cartProducts,
                 {
                    id: id,
                    quantity: 1
                 }
                ]
            )
        }
        else(                     // when product in cart
        //[ {id :1 ,quantity :3 }, {id :2, quantity:1}]
            setCartProducts(
                cartProducts.map(
                    product=>product.id===id?
                    {
                        ...product,quantity:product.quantity +1
                    }: product
                )
            )
        )
    }

function removeOneFromCart(id){
    const quantity= getProductQuantity(id);
    if (quantity==1)    
    {deleteFromCart(id);}
    else { setCartProducts(
        cartProducts.map(
            product=>product.id===id?
            {
                ...product,quantity:product.quantity -1
            }: product
        )
    )
}


    function deleteFromCart (id) {
        // [ ] if an object meets a conditions , add the object to array
        // [ product 1 , product 2 , product 3] if array is something like that
        //[product 1 , product 2]
        setCartProducts(
            cartProducts=>cartProducts.filter(
                currentProduct=>{
                    return currentProduct.id !=id;
                }
            )
        )
    }

    const Contextvalue = {
        item: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
}
return {
<createContext.Provider value={contextvalue}>
{children}
</createContext.Provider>
}