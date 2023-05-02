import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/style.css';
import './css/blog.css';
import './css/blogviewer.css';

window.NODESERVER = "http://localhost:3000";

window.FEATUREDBLOGS = ["1683046326716"].toString();
window.IMPROVEYOURSELF = ["1683046326716"].toString();
// BOTH 3

window.POPULARPOSTS = ["1683046326716"].toString();
// 4 OR SO

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
