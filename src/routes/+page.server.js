import { addTodo, getTodos, removeTodo, clearTodos } from '$lib/server/database.js'

    export function load(){
        const todos = getTodos()
        return {todos}
        
    }

    export const actions = {
        addTodo: async ({request}) => {
            const formData = await request.formData()
            const todo = formData.get('text')
            
    
            addTodo(todo)
            return {success: true}
        },
        removeTodo: async ({request}) => {
            const formData = await request.formData()
            const todoId = formData.get('id')
            
    
            removeTodo(todoId)
            return {success: true} 
        },
        clearTodos: () => {
            clearTodos()
          }
    }
