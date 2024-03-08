

<script>
    import TodoItem from "$lib/todo-item.svelte"
    const title = "Todo";
    export let data;
    
</script>



<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>
<form action="/api" method="post" class="new">
    <input type="text" name="text" aria-label="add a todo" placeholder="+ tap to add a todo">
</form>


{#each data.todos as todo}
    <TodoItem {todo}/>    
{/each}

</div>

<style>
    .todos{
        width: 100%;
        max-width: 42rem;
        margin: 0 auto;
    }
    .new{
        margin: 0 0 0.5rem 0;
    }
    .new input{
        width: 100%;
        padding: 2em;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: antiquewhite;
        text-align: center;
    }
    .todos :global(input){
        border: 1px solid transparent;
    }
</style>

