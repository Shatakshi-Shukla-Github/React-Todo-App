// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import Navbar from "./Navbar";
import "./App.css";
function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
