import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);


  function calculateAge(e) {
    var today = new Date();
    var birthDate = new Date(e.target.value);
    var age = today.getFullYear() - birthDate.getFullYear() || 0; // If non computable just give 0.
    setAge(age);
    return;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="date" onChange={calculateAge} /> - <span>{age}</span>
      </header>
    </div>
  );
}

export default App;
