// @ts-nocheck
import { createContext, useEffect, useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Todo } from "../lib/types";

export const TodosContext = createContext(null);

export default function TodosContextProvider({ children }) {
    const { isAuthenticated } = useKindeAuth();

    // state
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // derived state
    const totalCount = todos.length;
    const completedCount = todos.filter((todo) => todo.completed).length;

    // actions / event handlers
    const addTodo = (content) => {
        // check if user is logged in
        if (todos.length >= 3 && !isAuthenticated) {
            alert("To add more todos, please log in.");
            return;
        }

        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                content,
                completed: false,
            },
        ]);
    };
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // side effects
    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true);

            // fetch from external is not enabled
            /*
            const response = await fetch(
                "https://my-url/my-path/api/todos"
            );
            const todos = await response.json();
            */
            const todos: Todo[] = [
                {
                    "id": 1,
                    "content": "buy groceries",
                    "completed": false
                },
                {
                    "id": 2,
                    "content": "walk the dog",
                    "completed": false
                },
                {
                    "id": 3,
                    "content": "do laundry",
                    "completed": false
                }
            ]
            setTodos(todos);

            setIsLoading(false);
        };

        fetchTodos();
    }, []);

    return (
        <TodosContext.Provider
            value={{
                todos,
                isLoading,
                totalCount,
                completedCount,
                addTodo,
                toggleTodo,
                deleteTodo,
            }}
        >
            {children}
        </TodosContext.Provider>
    );
}