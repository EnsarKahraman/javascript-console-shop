console.log("Hello, welcome to the JavaScript Console Shop!");

const products = [
    {
        name: "Laptop",
        price: 799.99,
        stokQuanity: 10
    },
    {
        name: "Phone",
        price: 499.99,
        stokQuanity: 20
    }
];

function showProducts() {
    console.log("Available Products:");

    products.forEach(function(product) {
        console.log(
            `- ${product.name}: $${product.price} (Stock: ${product.stokQuanity})`
        );
    });
}

showProducts();