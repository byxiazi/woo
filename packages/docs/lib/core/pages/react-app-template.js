module.exports = (layoutComp) => {
  return `
    import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom'
    import { Layout, Menu, Icon } from 'antd'

    const { SubMenu } = Menu
    const { Header, Content, Sider } = Layout

    class Home extends Component {
      render() {
        return (
          <div>
           ${layoutComp}
          </div>
        )
      }
    }

    class ReactApp extends Component {
      render() {
        return (
          <BrowserRouter>
            <Route path='/' component={Home} />
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<ReactApp />, document.getElementById('react-app'))
  `
}
