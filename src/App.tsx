import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Todo } from "./model";
import Login from "./pages/Login";
import Taskify from "./pages/Taskify";
// import ProtectdRoute from "./pages/ProtectedRoute";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/todolist"
        element={
          // <ProtectdRoute>
          <Taskify
            todo={todo}
            setTodo={setTodo}
            handleAdd={handleAdd}
            todos={todos}
            setTodos={setTodos}
          />
          // </ProtectdRoute>
        }
      />
    </Routes>
  );
};

export default App;
