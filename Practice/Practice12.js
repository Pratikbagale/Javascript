function calculateDiscountPrices(products) {
    const discountedProducts = [];

    for (const product of products) {
        const { name, price, discount } = product;

        // Calculate the discount price
        const discountPrice = price - (price * discount / 100);

        // Create an object with the calculated discount price
        const discountedProduct = {
            name,
            originalPrice: price,
            discount,
            discountPrice
        };

        // Add the discounted product to the array
        discountedProducts.push(discountedProduct);
    }

    // Return the array of discounted products
    return discountedProducts;
}

// Example usage
const products = [
    { name: 'Product 1', price: 100, discount: 10 },
    { name: 'Product 2', price: 200, discount: 20 }
];

const discountedProducts = calculateDiscountPrices(products);

// Log the discounted products array
console.log(discountedProducts);
