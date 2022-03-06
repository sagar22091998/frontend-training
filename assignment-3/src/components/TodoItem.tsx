import { FC, Dispatch, SetStateAction } from "react";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

interface IProps {
  todoDetails: ITodo;
  deleteTodo: (id: string) => void;
  toggleCompletion: (id: string) => void;
  setEditTodo: Dispatch<SetStateAction<ITodo | null>>;
  setFormModal: Dispatch<SetStateAction<boolean>>;
}

const TodoItem: FC<IProps> = ({
  todoDetails,
  deleteTodo,
  toggleCompletion,
  setFormModal,
  setEditTodo,
}) => {
  const handleToggleCompletion = () => {
    toggleCompletion(todoDetails.id);
  };

  const handleEditTodo = () => {
    setFormModal(true);
    setEditTodo(todoDetails);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todoDetails.id);
  };

  return (
    <div className="todo-item">
      <h6 className="todo-item--top">{todoDetails.title}</h6>
      <div className="todo-item--bottom">
        <p className="todo-item--description">{todoDetails.description}</p>
        <div className="todo-item--icons">
          {todoDetails.completed ? (
            <div className="todo-item--icon">
              <CheckCircleFilled
                style={{ color: "green" }}
                onClick={handleToggleCompletion}
              />
            </div>
          ) : (
            <div className="todo-item--icon">
              <CloseCircleFilled
                style={{ color: "red" }}
                onClick={handleToggleCompletion}
              />
            </div>
          )}
          <div className="todo-item--icon">
            <EditOutlined onClick={handleEditTodo} />
          </div>

          <div className="todo-item--icon">
            <DeleteOutlined onClick={handleDeleteTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
