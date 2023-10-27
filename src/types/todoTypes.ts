export type TodoItem = {
    id: number,
    message: string,
    done: boolean
};

export type ComponentData = {
    toDoList: TodoItem[],
    currentInput: string,
    lastId: number
};