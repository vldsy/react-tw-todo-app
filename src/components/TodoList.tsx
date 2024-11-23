import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../lib/hooks";

export default function TodoList() {
    const { todos, toggleTodo, isLoading } = useTodosContext();

    return (
        <ul className="col-[1/2] row-[2/3] bg-[#fff] [scrollbar-width:thin] relative">
            ToDoList
        </ul>
    );
}