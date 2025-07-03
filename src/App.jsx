import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import SearchResults from "./pages/SearchResults";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation(); // Hook to access current route information

  // Logic to hide Header and Footer only on Login page
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>
      {/* Conditionally render Footer except on Login page */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
