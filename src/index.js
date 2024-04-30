import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Subscribe from "./pages/Subscribe";
import ButtonSubscribe from "./pages/ButtonSubscribe";
import Persian from "./Breed of cats/Persian";
import Persianpage from "./Breed of cats/Persianpage";
import Adopt from "./pages/Adopt";
export default function Appp() {
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ButtonSubscribe" element={<ButtonSubscribe/>} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/persian" element={<Persian />} />
          <Route path="/persianpage" element={<Persianpage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Appp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
