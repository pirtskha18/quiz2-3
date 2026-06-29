import React, { useState } from "react";

type Todo = {
    id: number;
    title: string;
};

export default function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!userInput.trim()) return;

        const newTodo: Todo = {
            id: Date.now(),
            title: userInput
        };

        setTodos([...todos, newTodo]);
        setUserInput("");
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((el) => el.id !== id));
    };

    return (
        <div className="todo-app">
            <h2>Todo App</h2>

            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="to do"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">Add Item</button>
            </form>

            {todos.length === 0 ? (
                <p className="todo-empty">No item is added yet</p>
            ) : (
                <ul className="todo-list">
                    {todos.map((el) => (
                        <li key={el.id}>
                            {el.title}
                            <button type="button" onClick={() => handleDelete(el.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
