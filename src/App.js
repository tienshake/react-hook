import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import React, { useState, useEffect } from 'react';
import Covid from './components/Covid';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Todo from './components/Todo';
import Blog from './components/Blog';
import BlogDetail from './components/DetailBlog';
function App() {
  const [name, setName] = useState('tientran');

  const handleOnChange = (e) => {
    setName(e.target.value)
  };
  const handleClick = (e) => {
    console.log(name)
  };
  useEffect(() => {
    // console.log('useEffect');
  }, [name]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input onChange={handleOnChange} type="text" value={name} />
          <button type="button" onClick={handleClick}>Click me</button>
          Xin chao ban {name}

          <Routes>
            <Route path="/" element={<Covid />}>
            </Route>
            <Route path="/todo" element={<Todo />}>
            </Route>
            <Route path="/blog" element={<Blog />}>
            </Route>
            <Route path="/blog/:id" element={<BlogDetail />}>
            </Route>
          </Routes>


        </header>

      </div>
    </Router>

  );
}

export default App;
