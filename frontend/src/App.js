import './App.css';
import Navbar from './Navbar';
import React from 'react';
import ReactDOM from 'react-dom'
import Search from './Search';
import Card from './Card';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        {/* <Search></Search> */}
        <Card></Card>
      </header>
      <h1>Hello.</h1>
    </div>
  );
}

export default App;
