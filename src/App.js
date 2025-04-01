import React from "react";
import './App.css';
import Header from './features/Header/Header';
import Feed from './features/Feed/Feed';
import Subreddits from "./features/Subreddits/Subreddits";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Feed/>
      </main>
      <aside>
        <Subreddits/>
      </aside>  
    </>
  );
}

export default App;