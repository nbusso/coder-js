// Sample array of products
const products = [
    { name: 'Product 1', category: 'Electronics' },
    { name: 'Product 2', category: 'Clothing' },
    { name: 'Product 3', category: 'Electronics' },
    // Add more products as needed
  ];
  
  // Ask the user for the category using prompt
  const userCategory = prompt('Enter a category to filter products:');
  
  // Use filter to get products with the specified category
  const filteredProducts = products.filter(product => product.category === userCategory);
  
  // Display the filtered products
  console.log(`Products in the category "${userCategory}":`, filteredProducts);