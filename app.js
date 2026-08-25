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

function findProduct(productName) {
    let foundProduct;

    products.forEach(function(product) {
        if (product.name.toLowerCase() === productName.toLowerCase()) {
            foundProduct = product;
        }
    });

    if (foundProduct !== undefined) {
        console.log("Product found:", foundProduct);
        return foundProduct;
    } else {
        console.log("Product not found.");
        return undefined;
    }
}

findProduct("Laptop");
findProduct("Phone");
findProduct("Tablet");