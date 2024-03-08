import { json, redirect } from '@sveltejs/kit'

let todos = [];

export function GET(){
    return json(todos)
}

export async function POST({request}){
    const formData = await request.formData()
    const data = formData.get('text')
    todos.push({
        created_at: new Date(),
        text: data,
        done: false
    })
    redirect(303, '/')
}