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
      <Route path="/" element={<Dashboard />} />          {/*Dashboard Page*/} 
      <Route path="/product/:id" element={<ProductDetail />} />           {/* ProductDetail Page */}
      <Route path="/login" element={<Login />} />         {/* Login Page */}
      <Route path="/wishlist" element={<Wishlist />} />         {/* Wishlist Page */}
      <Route path="/cart" element={<Cart />} />         {/* Cart Page  */}
      <Route path="/search" element={<SearchResults />} />          {/* SearchResult Page */}
    </Routes>
  );
}

export default App;
