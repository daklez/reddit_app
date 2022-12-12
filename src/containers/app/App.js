import './App.css';
import React from 'react';
import { Aside } from '../aside/Aside';
import { Header } from '../header/Header';
import { Main } from '../main/Main';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <aside>
       <Aside /> 
      </aside>
    </div>
  );
}

export default App;
