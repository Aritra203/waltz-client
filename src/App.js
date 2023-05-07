import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Success from "./components/Success/Success";
import Merchandise from "./components/Merchandise/Merchandise";
import DetailedEvents from "./components/DetailedEvents/DetailedEvents";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:id/verify/:tokenId" element={<Success />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/detailedEvents" element={<DetailedEvents />} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
