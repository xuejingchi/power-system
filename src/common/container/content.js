import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'
import index from 'pages/index'
import follow from 'pages/follow'
import Tools from 'pages/tools'
import Power from 'pages/power'
import Todo from 'pages/todo'
import Album from 'pages/album'
import Editor from 'pages/editor'
import TodoList from 'pages/todoList'
import Search from 'pages/search'

const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
        <Route key={index} path="/index" component={index} />
        <Route key={follow} path="/follow" component={follow} />
        <Route key={Tools} path="/tools" component={Tools} />
        <Route key={Todo} path="/todo" component={Todo} />
        <Route key={Album} path="/album" component={Album} />
        <Route key={Editor} path="/editor" component={Editor} />
        <Route key={Search} path="/searchEngine" component={Search} />
        <Route key={TodoList} path="/todoList" component={TodoList} />
        <Route key={Power} path="/power" component={Power} />
      </Content>
    );
  }
}