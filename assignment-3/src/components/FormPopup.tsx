import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import { useTodosModifier } from "../apis/useTodosModifier";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  formModal: boolean;
  todos: ITodo[];
  toggleModal: Dispatch<SetStateAction<boolean>>;
  fetchTodos: any;
  setEditTodo: Dispatch<SetStateAction<ITodo | null>>;
  editTodo: ITodo | null;
}

const FormPopup: FC<IProps> = ({
  formModal,
  todos,
  editTodo,
  setEditTodo,
  toggleModal,
  fetchTodos,
}) => {
  const [form] = Form.useForm();
  const todosModifier = useTodosModifier(fetchTodos);

  useEffect(() => {
    form.setFieldsValue({
      title: editTodo?.title,
      description: editTodo?.description,
    });
  });

  const handleModalClose = () => {
    toggleModal(false);
    setEditTodo(null);
  };

  const handleSubmit = (values: { title: string; description: string }) => {
    if (editTodo) {
      handleEditTodo(values);
    } else {
      handleAddTodo(values);
    }
    handleModalClose();
  };

  const handleAddTodo = (values: { title: string; description: string }) => {
    const newTodo: ITodo = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      completed: false,
    };

    const newAllTodos = [...todos, newTodo];
    todosModifier.mutate(newAllTodos);
  };

  const handleEditTodo = (values: { title: string; description: string }) => {
    const newAllTodos = todos.map((todo) => {
      if (todo.id === editTodo?.id) {
        return {
          ...todo,
          title: values.title,
          description: values.description,
        };
      }
      return todo;
    });

    todosModifier.mutate(newAllTodos);
  };

  return (
    <Modal
      title={`${editTodo ? "Edit" : "Add"} Add Todo`}
      visible={formModal}
      onCancel={handleModalClose}
      footer={null}
      forceRender
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item label={"Title"} name={"title"}>
          <Input />
        </Form.Item>
        <Form.Item label={"Description"} name={"description"}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {editTodo ? "EDIT" : "ADD"}
        </Button>
      </Form>
    </Modal>
  );
};
export default FormPopup;
