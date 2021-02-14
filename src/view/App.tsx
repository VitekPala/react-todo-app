import React, { useState } from "react";
import TodoList from "../components/TodoList";
import Form, { TodoInterface } from "../components/Form";
import { withTranslation } from "react-i18next";

const App = ({ t }: { t: (key: string) => string }) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([] as TodoInterface[]);
  return (
    <div>
      <h2>{t("form.title")}</h2>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} />
    </div>
  );
};
export default withTranslation()(App);
