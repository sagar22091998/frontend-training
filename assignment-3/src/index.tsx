import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./index.css";
import "antd/dist/antd.min.css";
import TodoApp from "./components/TodoApp";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TodoApp />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
