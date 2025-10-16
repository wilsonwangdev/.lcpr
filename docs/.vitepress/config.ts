import { defineConfig } from 'vitepress'
import typedocSidebar from '../api/typedoc-sidebar.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LeetCode Problems",
  description: "A LeetCode Problems Doc Site",
  base: '/.lcpr/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'LeetCode Problems', link: '/leetcode-problems/' }
    ],

    sidebar: [
      {
        text: 'LeetCode Problems',
        items: typedocSidebar,
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
