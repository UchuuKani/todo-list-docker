import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface ITodo {
  id: number;
  description: string;
}

// interface ITodoResponse {
//   data: {
//     todos: ITodo[];
//   };
// }

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTodos(): Promise<void> {
      try {
        const todosReq = await fetch("http://localhost:9000/api/todos");

        let todosRes;
        if (todosReq.ok && todosReq.status === 200) {
          todosRes = await todosReq.json();
        } else {
          throw new Error("server error");
        }

        if (todosRes) {
          setTodos(todosRes?.data?.todos);
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }

    fetchTodos();
  }, []);

  return (
    <div className="App">
      <main>
        This is just a test app to connect a front and back end with Docker.
        Will eventually include a CI/CD pipeline
      </main>
      <div>
        <h2>Todo Items</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        {todos?.length > 0 && (
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo?.id}>
                  {todo?.description
                    ? todo.description
                    : "task should not be empty but is"}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
