import { useState } from "react";
import { Button, Spin } from "antd";
import { useTodosModifier } from "../apis/useTodosModifier";
import { useTodos } from "../apis/useTodos";
import FormPopup from "./FormPopup";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [formModal, setFormModal] = useState(false);
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);
  const [editTodo, setEditTodo] = useState<ITodo | null>(null);

  const handleSuccess = (data: ITodo[]) => {
    setAllTodos(data);
  };

  const todos = useTodos(handleSuccess);
  const todosModifier = useTodosModifier(todos.refetch);

  const deleteTodo = (id: string) => {
    const newAllTodos = allTodos.filter((todos) => todos.id !== id);

    todosModifier.mutate(newAllTodos);
  };

  const toggleCompletion = (id: string) => {
    const newAllTodos = allTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    todosModifier.mutate(newAllTodos);
  };

  return (
    <>
      <h1 className="align-center">TODO LIST!!!</h1>
      <div className="align-center">
        <Button onClick={() => setFormModal(true)}>ADD TODO</Button>
      </div>

      <FormPopup
        fetchTodos={todos.refetch}
        todos={allTodos}
        formModal={formModal}
        toggleModal={setFormModal}
        setEditTodo={setEditTodo}
        editTodo={editTodo}
      />
      {todos.isLoading ? (
        <div className="align-center">
          <Spin />
        </div>
      ) : todos.isError ? (
        <div className="align-center">{todos.error.message}</div>
      ) : allTodos.length > 0 ? (
        allTodos.map((todo) => (
          <TodoItem
            toggleCompletion={toggleCompletion}
            deleteTodo={deleteTodo}
            key={todo.id}
            todoDetails={todo}
            setEditTodo={setEditTodo}
            setFormModal={setFormModal}
          />
        ))
      ) : (
        <div className="align-center">No Todos :(</div>
      )}
    </>
  );
};

export default TodoApp;
