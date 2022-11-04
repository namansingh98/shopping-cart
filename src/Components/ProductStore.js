
const productArray=[
    {
        id:'1',title:"Toast",price:45
    },
    {
        id:'2',title:"Tea",price:97
    },
    {
        id:'3',title:"Milk",price:65
    },
    {
        id:'4',title:"cube",price:45
    }
]
function getProductData(id){
    let productData = productArray.find(product=>product.id===id);
    if (productData==undefined){
        console.log("product data does't exist " + id)
        return undefined;
    }
    return productData;
}
export {productArray, getProductData};