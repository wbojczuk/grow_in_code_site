import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/style.css';
import './css/blog.css';
import './css/blogviewer.css';

window.NODESERVER = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
