import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
function App() {
  return (
    <div className="App">
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/product">
        <Product></Product>
      </Route>
    </div>
  );
}

export default App;
