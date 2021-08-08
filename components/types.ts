export type TodoItem = {
  text: string;
  key: string;
};

export type TodoProps = {
  item: TodoItem;
  pressHandler: (key: string) => void;
};

export type FormProps = {
  submitHandler: (text: string) => void;
};
