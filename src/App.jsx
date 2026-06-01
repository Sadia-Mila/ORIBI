import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Contact from "./components/pages/Contact";
import CustomerDashboard from "./components/pages/CustomerDashboard";
import CustomerLogin from "./components/pages/CustomerLogin";
import Demo from "./components/pages/Demo";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import Journal from "./components/pages/Journal";
import MyOrders from "./components/pages/MyOrders";
import ProductDetails from "./components/pages/ProductDetails";
import Shop from "./components/pages/Shop";
import { ToastProvider } from "./components/ToastContext";
import { CustomerAuthProvider } from "./context/CustomerAuthContext";

function App() {
  return (
    <ToastProvider>
      <CustomerAuthProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/customer-login" element={<CustomerLogin />} />
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </CustomerAuthProvider>
    </ToastProvider>
  );
}

export default App;
