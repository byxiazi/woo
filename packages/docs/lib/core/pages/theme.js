const fs = require('fs')
const paths = require('../../../scripts/paths')
const reactAppTemplateFn = require('./react-app-template')

const FrameworkEnum = {
  React: 'react',
  Vue: 'vue',
}

class Theme {
  constructor (framework, themeConfig) {
    this.themeConfig = themeConfig
    if (framework === FrameworkEnum.React) {
      this.reactApp()
    }
  }

  nav() {
    return `<div className="logo" />
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
            </Menu>`
  }

  sidebar() {
    const menu = `<Menu
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
            </Menu>`
    // <Route path="/login"  component={Login}></Route>
    const content = ``
    return {
      menu,
      content
    }
  }

  layout() {
    const sidebar = this.sidebar()
    return `<Layout>
              <Header className="header">
                ${this.nav()}
              </Header>
              <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                  ${sidebar.menu}
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
                  ${sidebar.content}
                </Switch>
                </Content>
              </Layout>
            </Layout>
          `
  }

  reactApp() {
    const layoutComp = this.layout()
    const reactAppTemplate = reactAppTemplateFn(layoutComp)
    fs.writeFileSync(paths.appIndexJs, reactAppTemplate)
  }

  vueApp() {

  }
}

let theme

exports.FrameworkEnum = FrameworkEnum

exports.themeFactory = function (framework, themeConfig) {
  if (theme) {
    return theme
  }

  theme = new Theme(framework, themeConfig)
  return theme
}
