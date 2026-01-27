import * as React from "react";
import List from "@mui/material/List";
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
export default function TodoList({ todo, removeTodo, toggleTodo }) {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ color: "text.primary" }}>
              <Grid size={8}>
                <DeleteIcon onClick={removeTodo} />
              </Grid>
            </Grid>
          </Box>
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            // inputProps={{ 'aria-labelledby': labelId }}
            onChange={toggleTodo}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.text} />
      </ListItemButton>
    </ListItem>
  );
}
