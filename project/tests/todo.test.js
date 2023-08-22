describe('Todo', () => {
    it('It should add todo', () => {
        document.body.innerHTML = `
            <input id="newTodo" />
            <button id="addTodo">Add todo</button>
            <ol id="todoList"></ol>
        `;

        require('../js/todo');

        const newTodo = document.getElementById('newTodo');
        const addTodo = document.getElementById('addTodo');
        const todolist = document.getElementById('todoList');

        newTodo.value = 'New todolist!';
        addTodo.click();
        expect(todolist.innerHTML).toBe('<li>New todolist!</li>');
    });
});
