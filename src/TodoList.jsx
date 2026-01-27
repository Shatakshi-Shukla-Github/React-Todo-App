import * as React from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};
export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    );
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, id: 19, completed: false }];
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={() => removeTodo(todo.id)}
          toggleTodo={() => toggleTodo(todo.id)}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}

// export default function TodoList() {
//   const [todos, setTodos] = useState(initialTodos);
//   const removeTodo = (id) => {
//     setTodos((prevTodos) => {
//       return prevTodos.filter((t) => t.id !== id);
//     });
//   };
//   return (
//     <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
//       {todos.map((todo) => (
//         <TodoItem
//           todo={todo}
//           key={todo.id}
//           removeTodo={() => removeTodo(todo.id)}/>
//       ))}
//       </List>
//   return (
//     <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
//       {todos.map((todo) => {
//         const labelId = `checkbox-list-label-${todo.id}`;

//         return (
//           <ListItem
//             key={todo.id}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <Box sx={{ flexGrow: 1 }}>
//                   <Grid container sx={{ color: "text.primary" }}>
//                     <Grid size={8}>
//                       <DeleteIcon />
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined} dense>
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={todo.completed}
//                   tabIndex={-1}
//                   disableRipple
//                   // inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={todo.text} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
// );
