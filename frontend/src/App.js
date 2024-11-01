// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TarefaForm from './components/TarefaForm';
import TarefaList from './components/TarefaList';
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <div className="App">
        <GlobalStyles />
      <Header />
      <main>
        <TarefaForm setTarefas={setTarefas} />
        <TarefaList tarefas={tarefas} setTarefas={setTarefas} />
      </main>
    </div>
  );
}

export default App;

