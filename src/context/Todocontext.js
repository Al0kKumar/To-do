import { createContext,useContext } from "react";

export const Todocontext = createContext({
    todos : [
        {
        id :1,
        todo : "Todo message",
        completed : false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo: (todo,id) => {},
    deleteTodo : (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () =>{
    return useContext(Todocontext)
}

export const Todoprovider = Todocontext.Provider