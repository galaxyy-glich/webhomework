import { defineConfig } from 'vitepress'

export default defineConfig({
    // ⚠️ 如果你之后上 GitHub Pages，记得改成 /仓库名/
    base: '/webhomework/',

    title: '个人主页',
    description: '使用 VitePress 搭建的个人主页',

    head: [
        // Tailwind CDN
        ['script', { src: 'https://cdn.tailwindcss.com' }],

        // Google font
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap' }],

        // Font Awesome
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }],

        // ECharts
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js' }],

        // 你原来那段 tailwind.config（用内联脚本）
        ['script', {}, `
      tailwind.config = {
        theme: {
          extend: {
            colors: { primary: '#1E40AF', secondary: '#93C5FD' },
            borderRadius: {
              'none': '0px','sm': '2px', DEFAULT: '4px','md': '8px','lg': '12px',
              'xl': '16px','2xl': '20px','3xl': '24px','full': '9999px','button': '4px'
            }
          }
        }
      }
    `]
    ],

    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blog/' } // ✅ 新增博客栏目入口
        ]
    }
})