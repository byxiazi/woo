module.exports = {
  base: '/demo/',
  title: 'Woo',
  description: 'Woo is excellent',
  themeConfig: {
    navbar: false,
    nav: [
      {text: '主页', link: '/'},
      {
        text: '语言', ariaLabel: '选择语言', items : [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      {
        text: 'more', items : [
          { text: 'Group1', link: '/more/Group1' },
          { text: 'Group2', link: '/more/Group2' }
        ]
      },
      {text: 'Github', link: 'https://github.com', target:'_self', rel:''},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/icon',
          '/components/input',
          '/components/input-number',
        ]
      }
    ]
  }
}
