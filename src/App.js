import "./assets/css/app.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path={"/categories/:idc"} element={<Details />} />
              <Route path={"/categories/:idc/products/:idp"} element={<Details />} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/success"} element={<Success />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
