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
      <aside>
        <Aside />
      </aside>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
