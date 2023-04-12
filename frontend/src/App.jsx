import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import BlogViewer from "./pages/BlogViewer";

import Nav from "./components/nav/Nav";
import Footer from "./components/Footer";

export default function App(){
    const [checkLinks, setCheckLinks] = React.useState(["close"]);

    return(
        <BrowserRouter>
            <Nav checkLinks={checkLinks} setCheckLinks={setCheckLinks} />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogviewer" element={<BlogViewer />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}