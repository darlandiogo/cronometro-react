import React from 'react';
import TimerProvider from './context/Timer';
import Timer from './components/Timer/Timer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <TimerProvider>
        <Timer/>
      </TimerProvider>
    </div>
  );
}

export default App;
