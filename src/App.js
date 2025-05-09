import React from "react";
import './App.css';
import Header from './features/Header/Header';
import Feed from './features/Feed/Feed';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Feed/>
      </main>
    </>
  );
}

export default App;