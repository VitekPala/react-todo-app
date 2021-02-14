import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import { TodoInterface } from "../components/Form";

const TodoList = ({ todos }: { todos: TodoInterface[] }) => {
  return (
    <div>
      <List>
        {todos.map((todo: TodoInterface) => {
          return (
            <ListItem key={todo.id}>
              <Checkbox edge="start" checked={todo.completed} />
              <ListItemText>{todo.text}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default TodoList;
