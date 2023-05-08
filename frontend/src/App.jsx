import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import BlogCategory from "./pages/BlogCategory";
import BlogViewer from "./pages/BlogViewer";
import BestOfTheBlog from "./pages/BestOfTheBlog";

import Nav from "./components/nav/Nav";
import Footer from "./components/Footer";

export default function App(){
    const [checkLinks, setCheckLinks] = React.useState(["close"]);

    return(
        <BrowserRouter>
            <Nav checkLinks={checkLinks} setCheckLinks={setCheckLinks} />
            <Routes>
                <Route index element={<Home setCheckLinks={setCheckLinks} />} />
                <Route path="/blog" element={<Blog setCheckLinks={setCheckLinks} />} />
                <Route path="/about" element={<About setCheckLinks={setCheckLinks} />} />
                <Route path="/blogviewer/:blogid" element={<BlogViewer setCheckLinks={setCheckLinks} />} />
                <Route path="/blogcategory/:category" element={<BlogCategory setCheckLinks={setCheckLinks} />} />
                <Route path="/bestoftheblog" element={<BestOfTheBlog setCheckLinks={setCheckLinks} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}