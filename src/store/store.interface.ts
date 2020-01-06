export interface Item{
    id:number;
    title:string;
    status:"active"|"clear";
}

export interface State{
    todoList:Item[];
}