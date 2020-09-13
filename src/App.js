import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const [logic,setlogic]=useState(false);
  const logicsbotten = () =>  {
    setlogic(!logic);
  };

  return (
    <main>
    <div className="App">
      <h1>connect</h1>

    
    <button type="button" onClick={logicsbotten}>לוגיקה ותורת הקבוצות</button>
   <h1>{logic? "true": "false"}</h1>
   </div>
    </main>
  );
}

export default App;
