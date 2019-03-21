const App = state => `
<section>
    <input placeholder="Type your todo.." onkeypress="(${_ => {
        const { keyCode, target } = event
        if (keyCode !== 13 || !target.value.trim()) return
        actions.ADD(target.value)
        target.value = ''
    }})()" />
    <ul>
        ${state.todos
        .map(TodoItem)
        .reverse()
        .join('')}
    </ul>
</section>`

const TodoItem = ({ id, title, done }) => `
<li ${done ? 'checked' : ''}>
    <input type="checkbox" onclick="(${id => actions.TOGGLE(id)})(${id})" />
    <label>${title}</label>
    <button onclick="(${id => actions.DELETE(id)})(${id})" />
</li>`

const newTodo = title => ({
    id: (() => Math.random())(),
    title,
    done: false
})

const render = (DOM, container) => (container.innerHTML = DOM)  //리액트,뷰에비한 단점 : 전체가 랜더링된다, 스크립트 인젝션이된다.

const actions = {
    ADD: value => (state.todos = [...state.todos, newTodo(value)]),
    TOGGLE: id =>
        (state.todos = state.todos.map(todo =>
            todo.id != id ? todo : { ...todo, done: !todo.done }
        )),
    DELETE: id => (state.todos = state.todos.filter(todo => todo.id != id))
}

const state = new Proxy(
    { todos: [] },
    {
        set(state, key, value) {
            state[key] = value
            render(App(state), document.body)
            document.querySelector('input').focus()
        }
    }
)

state.todos = []