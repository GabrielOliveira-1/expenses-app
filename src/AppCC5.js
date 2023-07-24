import Product from "./Components/Product";


function App() {
  const demoProducts = [
    {
      title: "Product 1",
      price: 10,
      description: "First product",
    },
    {
      title: "Product 2",
      price: 20,
      description: "Second product",
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>

      <Product
        title={demoProducts[0].title}
        price={demoProducts[0].price}
        description={demoProducts[0].description}
      ></Product>
      <Product
        title={demoProducts[1].title}
        price={demoProducts[1].price}
        description={demoProducts[1].description}
      ></Product>
    </div>
  );
}

export default App;
