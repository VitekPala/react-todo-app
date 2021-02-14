import React, { ChangeEvent, MouseEvent } from "react";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withTranslation } from "react-i18next";

export interface TodoInterface {
  text: string;
  completed: boolean;
  id: number;
}

interface FormPropsInterface {
  inputText: string;
  setInputText: (value: string) => void;
  todos: TodoInterface[];
  setTodos: (todos: TodoInterface[]) => void;
  t: (key: string) => string;
}

const addButtonStyle = {
  marginTop: "24px",
  marginBottom: "24px",
};

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  t,
}: FormPropsInterface) => {
  const inputTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const onSubmit = (event: MouseEvent) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        text: inputText,
        completed: false,
      },
    ]);
    setInputText("");
  };

  return (
    <FormControl>
      <TextField value={inputText} onChange={inputTextHandler} type="text" />
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        type="submit"
        style={addButtonStyle}
      >
        {t("form.addTodoButton")}
      </Button>
      <div>
        <Select name="todos">
          <MenuItem value="all">{t("form.filter.all")}</MenuItem>
          <MenuItem value="completed">{t("form.filter.completed")}</MenuItem>
          <MenuItem value="uncompleted">
            {t("form.filter.uncompleted")}
          </MenuItem>
        </Select>
      </div>
    </FormControl>
  );
};

export default withTranslation()(Form);
