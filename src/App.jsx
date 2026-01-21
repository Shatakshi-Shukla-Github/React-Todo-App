// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  return (
    <div>
      <CssBaseline />

      <h1>Todos</h1>
      <TodoList />
    </div>
  );
}

export default App;
