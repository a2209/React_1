import Product from "./Components/Product";

function App() {
  const product=[
    {
      title:'Product 1',
      price:'10',
      description:'First Product'
    },
    {
      title:'Product 2',
      price:'20',
      description:'Second Product'

    }
  ]
  return (
    <div className="App">
      <Product title={product[0].title} price={product[0].price} description={product[0].description}/>
      <Product title={product[1].title} price={product[1].price} description={product[1].description}/>
    </div>
  );
}

export default App;
