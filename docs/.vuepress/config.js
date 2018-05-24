module.exports = {
  title: 'Hello VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'andreliem/vuepress-netlify',

    nav: [
      {
        text: 'Welcome',
        link: '/docs/',
      },
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}