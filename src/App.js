import React from 'react';
import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
function App() {
  return (
    <div className="app">
      <Header></Header>
      <Home></Home>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
