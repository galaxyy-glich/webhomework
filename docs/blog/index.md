---
layout: page
title: 博客
---

<div class="bg-gray-50 text-gray-800">

<section class="section-padding pt-24">
  <div class="container mx-auto px-6">
    <h1 class="text-4xl font-bold text-center mb-6">博客</h1>
    <p class="text-gray-600 text-center max-w-2xl mx-auto mb-16">
      记录我在学习、项目与实践过程中的一些思考、踩坑经验和阶段性总结。
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <!-- 最近文章 -->
      <div class="bg-white rounded-2xl shadow-md p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold flex items-center gap-2">
            <i class="fa-regular fa-clock text-primary"></i>
            最近文章
          </h2>
        </div>
        <div class="space-y-6">
          <article class="p-4 rounded-xl hover:bg-gray-50 transition">
            <h3 class="text-lg font-semibold mb-1">
              <a href="/blog/vitepress-start" class="hover:text-primary">
                VitePress 搭建个人博客实践记录
              </a>
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              从项目初始化、目录结构设计，到 public 资源引用和样式统一，我在搭建个人博客时遇到的问题与解决方案。
            </p>
          </article>
          <article class="p-4 rounded-xl hover:bg-gray-50 transition">
            <h3 class="text-lg font-semibold mb-1">
              <a href="/blog/tailwind-layout" class="hover:text-primary">
                使用 Tailwind CSS 构建简洁页面布局
              </a>
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              总结我在实际页面中常用的布局模式，包括 container、grid、卡片组件以及响应式处理方式。
            </p>
          </article>
          <article class="p-4 rounded-xl hover:bg-gray-50 transition">
            <h3 class="text-lg font-semibold mb-1">
              <a href="/blog/frontend-learning" class="hover:text-primary">
                我的前端学习路径与阶段性总结
              </a>
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              回顾从基础 HTML/CSS 到 Vue、React 项目的学习过程，以及过程中踩过的坑和得到的经验。
            </p>
          </article>
        </div>
      </div>
      <!-- 最热文章 -->
      <div class="bg-white rounded-2xl shadow-md p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold flex items-center gap-2">
            <i class="fa-solid fa-fire text-primary"></i>
            最热文章
          </h2>
        </div>
        <div class="space-y-6">
          <article class="p-4 rounded-xl hover:bg-gray-50 transition">
            <h3 class="text-lg font-semibold mb-1">
              <a href="/blog/dijkstra" class="hover:text-primary">
                Dijkstra 最短路径算法实现与测试
              </a>
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              结合实验代码讲解最短路径算法的实现思路，并说明如何利用真实地图数据进行测试验证。
            </p>
          </article>
          <article class="p-4 rounded-xl hover:bg-gray-50 transition">
            <h3 class="text-lg font-semibold mb-1">
              <a href="/blog/jwt-auth" class="hover:text-primary">
                Spring Boot 中 JWT 登录鉴权的实现思路
              </a>
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              从 Token 生成、解析到拦截器校验，梳理我在课程项目中实现登录鉴权的完整流程。
            </p>
          </article>
          <article class="p-4 rounded-xl hover:bg-gray-50 transition">
            <h3 class="text-lg font-semibold mb-1">
              <a href="/blog/linked-list-lab" class="hover:text-primary">
                链表容器实验中的设计与边界处理
              </a>
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              结合课程实验，分析单向链表设计限制、尾插实现细节以及迭代器边界问题。
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- 指南栏目 -->
<section class="section-padding pt-20">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-4">开发指南</h2>
    <p class="text-gray-600 text-center max-w-2xl mx-auto mb-16">
      汇总我在前端学习与项目实践中整理的一些经验与方法，偏向实用与可复用。
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- 指南卡片 1 -->
      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
          <i class="fa-solid fa-layer-group"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">
          <a href="/blog/guide/frontend-structure" class="hover:text-primary">
            前端项目结构设计指南
          </a>
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          从真实项目出发，讲清楚目录划分、组件拆分、公共模块管理，以及如何让项目长期可维护。
        </p>
      </div>
      <!-- 指南卡片 2 -->
      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <div class="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
          <i class="fa-solid fa-wrench"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">
          <a href="/blog/guide/frontend-debug" class="hover:text-primary">
            常见前端 Bug 的排查思路
          </a>
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          总结我在 Vue / React 项目中遇到的典型问题，以及如何通过定位、复现和最小化测试来解决。
        </p>
      </div>
      <!-- 指南卡片 3 -->
      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <div class="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
          <i class="fa-solid fa-gauge-high"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">
          <a href="/blog/guide/performance" class="hover:text-primary">
            前端性能优化实践总结
          </a>
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          从首屏加载、资源拆分、图片优化到交互响应，整理我在项目中真实验证过的优化手段。
        </p>
      </div>
      <!-- 指南卡片 4 -->
      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <div class="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4">
          <i class="fa-solid fa-palette"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">
          <a href="/blog/guide/ui-design" class="hover:text-primary">
            实用 UI 与页面风格设计经验
          </a>
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          分享我在使用 Tailwind、组件库和自定义样式时，如何保持页面统一、克制和易读。
        </p>
      </div>
<!-- 指南卡片 5 -->
      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <div class="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
          <i class="fa-solid fa-lock"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">
          <a href="/blog/guide/auth" class="hover:text-primary">
            前端登录与权限控制实践
          </a>
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          从 Token 存储、安全性考虑，到路由守卫与权限菜单，整理我在项目中使用的常见方案。
        </p>
      </div>
      <!-- 指南卡片 6 -->
      <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
        <div class="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
          <i class="fa-solid fa-road"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">
          <a href="/blog/guide/learning-path" class="hover:text-primary">
            前端学习路线与阶段总结
          </a>
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          结合我的学习经历，总结不同阶段应该关注的重点，以及如何避免盲目刷技术栈。
        </p>
      </div>
    </div>
  </div>
</section>
</div>