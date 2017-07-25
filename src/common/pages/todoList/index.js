import React from 'react'
import { connect } from 'react-redux'
import { addTodo,toggleTodo,delTodo } from 'actions/todoList'
import FilterLink from './filterLink'
import './index.less'

let nextTodoId = 0
@connect(
    (state) => ({
        todoList: state.todoList,
        setVisibility: state.setVisibility,
    })
)

export default class todoList extends React.Component {
    submit = (e) => {
        e.preventDefault()
        if(!this.input.value.trim()){
            alert("请输入要添加的任务");
            return
        }
        this.props.dispatch(addTodo({
            id: nextTodoId++,
            text: this.input.value,
            type: 'ADD_TODO',
        }))
        this.input.value = ''
    }

    render() {
        const todoList = this.props.todoList
        const setVisibility = this.props.setVisibility
        let todos = todoList
        if (setVisibility.filter === 'SHOW_COMPLETED') {
            todos = todoList.filter(t => t.completed)
        } else if (setVisibility.filter === 'SHOW_ACTIVE') {
            todos = todoList.filter(t => !t.completed)
        }
        return (
            <div className="todo-box">
                <div className="todo-innerBox">
                    <div className="todo-tab">
                        <FilterLink key={ 'filterLink_1' } filter="SHOW_ALL" name="全部任务" />
                        <FilterLink key={ 'filterLink_2' } filter="SHOW_ACTIVE" name="待办任务" />
                        <FilterLink key={ 'filterLink_3' } filter="SHOW_COMPLETED" name="已完成任务" />
                    </div>
                    <ul className="list-group">
                        {
                            todos.map(todo =>
                            <li key={todo.id} className="todo-list_li" style={{ textDecoration:todo.completed ? "line-through" : "none" }}>
                                <input type="checkbox" className="check-box" defaultChecked={todo.completed} onClick={ e => this.props.dispatch(toggleTodo({
                                    id: todo.id,
                                    type: "TOGGLE_TODO"
                                }))}
                                />
                                {todo.text}
                                <button className="todo-list_del" onClick={e => this.props.dispatch(delTodo({
                                    id: todo.id,
                                    type: "DEL_TODO"
                                })) }
                                >删除</button>
                            </li>)
                        }
                    </ul>
                    <form key={'submit_1'} onSubmit={this.submit} className="todo-add">
                        <input placeholder="你想做点什么" ref={r =>this.input = r} className="todo-input" />
                        <button type="submit" className="todo-btn">添加任务</button>
                    </form>
                </div>
            </div>
        )
    }
}