const productArray = [

    {
        id: "price_1M1phrSFBN7XWW4pcIdoqhdu",
        title: "Glasses",
        price: 200,
    },
    {
        id: "price_1M1piESFBN7XWW4pJnRotr9x",
        title: "Bike",
        price: 10000,
    },
    {
        id: "prod_MlMRtUHwz5v3Px",
        title: "Belt",
        price: 100,
    },
    {
        id: "prod_MlMRef3A9KBONJ",
        title: "Laptop",
        price: 50000,
    },
    {
        id: "prod_MlMSq843VK4HKP",
        title: "Cake",
        price: 800,
    },
    {
        id: "prod_MlMSDS1kZdFF5Y",
        title: "Mobile",
        price: 20000,
    }

]

function getProductData(id) {
    let productData = productArray.find(product => product.id === id);
    if (productData == undefined) {
        return undefined;
    }
    return productData;
}
export { productArray ,getProductData};