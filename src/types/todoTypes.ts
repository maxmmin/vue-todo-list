export type TodoItem = {
    id: number,
    message: string,
    done: boolean
};

export type CoreTodoComponentData = {
    todoList: TodoItem[],
    currentInput: string,
    lastId: number
};

export type TodoListComponentProps = {
    todoList: TodoItem[]
}