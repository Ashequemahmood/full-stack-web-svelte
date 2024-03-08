
    export async function load({fetch}){
        const res = await fetch('/api')
        const todos = await res.json()

        return {todos}
        
    }
