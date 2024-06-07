function applyFilters() {
    // Get the price range value
    const priceRange = document.getElementById('priceRange').value;

    // Get selected categories
    const categories = [];
    document.querySelectorAll('.form-check-input:checked').forEach(checkbox => {
        categories.push(checkbox.value);
    });

    // Get all products
    const products = document.querySelectorAll('.product');

    // Filter products based on price and categories
    products.forEach(product => {
        const productPrice = parseInt(product.getAttribute('data-price'));
        const productCategory = product.getAttribute('data-category');

        // Check if product meets the filter criteria
        if (productPrice <= priceRange && (categories.length === 0 || categories.includes(productCategory))) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}