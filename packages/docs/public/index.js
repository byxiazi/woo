
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
           <Layout>
              <Header className="header">
                <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <NavLink
                  to="/login"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  activeClassName="selected"
                >
                FAQs
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2"><a href="/login">nav 2</a></Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
              </Header>
              <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                  <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1"><Link to={"/login"}>login</Link></Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
            </Menu>
                </Sider>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                <Switch>
                  sssss
                  
                </Switch>
                </Content>
              </Layout>
            </Layout>
          
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
  