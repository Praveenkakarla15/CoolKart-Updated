import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart"; 
import SearchResults  from "./pages/SearchResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} /> 
      <Route path="/search" element={<SearchResults />} /> 
    </Routes>
  );
}

export default App;
