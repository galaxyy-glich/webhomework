---
layout: page
---

<div class="bg-gray-50 text-gray-800">


<header class="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-10">
 <div class="container mx-auto px-6 py-3">
    <div class="flex items-center gap-6 flex-wrap">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <span class="font-logo text-2xl text-primary flex items-center gap-2">
          <i class="fa-solid fa-star"></i>
          HSH
        </span>
      </div>
      <nav class="flex items-center gap-5 text-gray-600">
        <a href="#about" class="nav-link hover:text-primary flex items-center gap-1">
          <i class="fa-regular fa-user"></i> 个人介绍
        </a>
        <a href="#education" class="nav-link hover:text-primary flex items-center gap-1">
          <i class="fa-solid fa-graduation-cap"></i> 教育经历
        </a>
        <a href="#internship" class="nav-link hover:text-primary flex items-center gap-1">
          <i class="fa-solid fa-briefcase"></i> 实习经历
        </a>
        <a href="#projects" class="nav-link hover:text-primary flex items-center gap-1">
          <i class="fa-solid fa-code"></i> 项目经历
        </a>
        <a href="#hobbies" class="nav-link hover:text-primary flex items-center gap-1">
          <i class="fa-regular fa-face-smile"></i> 兴趣爱好
        </a>
        <a href="#contact" class="nav-link hover:text-primary flex items-center gap-1">
          <i class="fa-regular fa-envelope"></i> 联系我～
        </a>
      </nav>
      <div class="hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="搜索：项目 / 技能 / 学校..."
            class="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-200 bg-white
                   focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
      <div class="hidden lg:flex items-center gap-3 ml-auto">
        <a href="#projects"
           class="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
           title="项目">
          <i class="fa-solid fa-diagram-project"></i>
        </a>
        <a href="#contact"
           class="w-9 h-9 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-primary"
           title="联系我">
          <i class="fa-regular fa-paper-plane"></i>
        </a>
        <a href="#"
           class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
           title="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
    <div class="mt-3 md:hidden">
      <div class="relative">
        <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input
          type="text"
          placeholder="搜索：项目 / 技能 / 学校..."
          class="w-full pl-10 pr-3 py-2 rounded-full border border-gray-200 bg-white
                 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
    </div>

  </div>
</header>

<section id="about" class="section-padding pt-44">
<div class="container mx-auto px-6">
    <div class="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center">
    <div class="md:w-1/3 mb-8 md:mb-0 flex justify-center">
      <div class="rounded-2xl overflow-hidden shadow-md">
      <img :src="'/pic.jpg'" class="slide-img" />
      </div>
    </div>
      <div class="md:w-2/3 md:pl-12">
        <h1 class="text-6xl font-bold mb-2">贺绍华 Ella</h1>
        <p class="text-3xl text-blue-500 mb-6">前端开发学习者</p>
        <p class="text-gray-600 mb-6 leading-relaxed">
          SWU软件工程在读｜2 年前端开发经验｜热爱前后端开发
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">React</span>
          <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Vue.js</span>
          <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
          <span class="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="education" class="section-padding bg-gray-100">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-16">教育经历</h2>
<div class="relative edu-timeline max-w-3xl mx-auto">
      <div class="relative pl-12 mb-12">
        <div class="edu-dot"></div>
        <div class="bg-white p-6 rounded-xl shadow-md">
          <div class="flex flex-wrap justify-between items-start gap-2 mb-3">
            <h3 class="text-xl font-bold">太原市常青藤中学</h3>
            <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">2017 - 2023</span>
          </div>
          <p class="text-gray-600 leading-relaxed">
            在校期间完成高中阶段学习，打下较扎实的基础能力与学习习惯。
          </p>
        </div>
      </div>
      <div class="relative pl-12">
        <div class="edu-dot"></div>
        <div class="bg-white p-6 rounded-xl shadow-md">
          <div class="flex flex-wrap justify-between items-start gap-2 mb-3">
            <h3 class="text-xl font-bold">西南大学｜软件工程专业</h3>
            <span class="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">2023 - 2027</span>
          </div>
          <p class="text-gray-600 leading-relaxed">
            软件工程在读，持续积累前端开发与工程实践能力。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="internship" class="section-padding">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-16">实习经历</h2>
    <div class="relative internship-timeline max-w-3xl mx-auto">
      <div class="relative pl-12">
        <div class="intern-dot"></div>
        <div class="bg-white p-6 rounded-xl shadow-md">
          <div class="flex flex-wrap justify-between items-start gap-2 mb-3">
            <h3 class="text-xl font-bold">
              杭州恒生电子股份有限公司
            </h3>
            <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              2025.01 - 2025.04
            </span>
          </div>
          <p class="text-primary font-medium mb-2">
            后端 Java 开发实习生
          </p>
          <p class="text-gray-600 leading-relaxed">
            参与企业级金融系统后端模块开发，负责部分接口设计与实现，
            使用 Java 及相关技术栈完成业务逻辑开发与调试，
            协助进行系统联调与问题排查，提升了对实际业务系统的理解与工程能力。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="projects" class="section-padding bg-gray-100">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-16">项目经历</h2>
    <div class="relative project-timeline max-w-4xl mx-auto">
      <div class="mb-16 flex group">
        <div class="hidden md:block md:w-1/3"></div>
        <div class="md:w-2/3 pl-12 relative">
          <div class="absolute left-[-54px] top-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <i class="fas fa-laptop-code"></i>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold">自动排卷机项目</h3>
              <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">2025.06 - 2025.09</span>
            </div>
            <p class="text-gray-600 mb-4">
              主导项目核心平台的前端架构重构，将原有技术栈迁移至 React + TypeScript，提升了代码可维护性和开发效率。优化首屏加载速度 60%，显著改善用户体验。
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">React</span>
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Webpack</span>
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Redux</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-16 flex group">
        <div class="md:w-2/3 pr-12 text-right relative">
          <div class="absolute right-[-54px] top-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold">自闭症儿童社交辅助系统</h3>
              <span class="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full self-end">2024.06 - 2025.06</span>
              <h3 class="text-xl font-bold"></h3>
            </div>
            <p class="text-gray-600 mb-4">
              负责设计自闭症儿童社交辅助大模型及移动端和网页端平台，获得两项软件著作权，与5+机构合作投入运行，一项专利申请中...
            </p>
            <div class="flex flex-wrap gap-2 justify-end">
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">WebSockt</span>
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">大模型</span>
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">FAST API</span>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:w-1/3"></div>
      </div>
      <div class="flex group">
        <div class="hidden md:block md:w-1/3"></div>
        <div class="md:w-2/3 pl-12 relative">
          <div class="absolute left-[-54px] top-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <i class="fas fa-chart-line"></i>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold">数据分析可视化平台</h3>
              <span class="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">2025.01 - 2025.05</span>
            </div>
            <p class="text-gray-600 mb-4">
              开发企业级数据可视化平台，集成多种图表组件和交互分析功能。基于 ECharts 实现复杂数据展示，支持百万级数据渲染优化，提升决策效率。
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">ECharts</span>
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">D3.js</span>
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">WebSocket</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="hobbies" class="section-padding">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-16">兴趣爱好</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="hobby-card bg-white rounded-2xl shadow-md p-6 text-center">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
          <i class="fas fa-skiing text-2xl text-blue-600"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">滑雪</h3>
        <p class="text-gray-600">
          热爱单板滑雪，享受速度与挑战带来的自由感。
        </p>
      </div>
      <div class="hobby-card bg-white rounded-2xl shadow-md p-6 text-center">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <i class="fas fa-plane-departure text-2xl text-green-600"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">旅行</h3>
        <p class="text-gray-600">
          喜欢探索不同城市与文化，在旅途中获得灵感与成长。
        </p>
      </div>
      <div class="hobby-card bg-white rounded-2xl shadow-md p-6 text-center">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
          <i class="fas fa-hiking text-2xl text-purple-600"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">徒步</h3>
        <p class="text-gray-600">
          热衷户外徒步与自然探索，享受慢节奏的生活方式。
        </p>
      </div>
      <div class="hobby-card bg-white rounded-2xl shadow-md p-6 text-center">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
          <i class="fas fa-music text-2xl text-yellow-600"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">音乐</h3>
        <p class="text-gray-600">
          喜欢聆听与演奏音乐，通过旋律放松身心、表达情绪。
        </p>
      </div>
    </div>
  </div>
</section>



<section id="contact" class="section-padding bg-gray-100">
<div class="container mx-auto px-6 py-16">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">联系我</h2>
      <p class="text-gray-600 mb-12 max-w-2xl mx-auto">
        如果您有任何合作机会或想进一步了解我的工作，请随时通过以下方式与我联系。我会尽快回复您的消息。
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <i class="fas fa-envelope text-blue-600"></i>
          </div>
          <div class="text-left">
            <p class="text-gray-500 text-sm">邮箱</p>
            <p class="font-medium">3629485007@qq.com</p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
            <i class="fas fa-phone-alt text-green-600"></i>
          </div>
          <div class="text-left">
            <p class="text-gray-500 text-sm">电话</p>
            <p class="font-medium">+86 19562188865</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center space-x-6 mb-12">
        <a href="#" class="social-icon w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl text-blue-600 shadow-md">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" class="social-icon w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl text-blue-400 shadow-md">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="social-icon w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl text-gray-800 shadow-md">
          <i class="fab fa-github"></i>
        </a>
        <a href="#" class="social-icon w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl text-pink-600 shadow-md">
          <i class="fab fa-dribbble"></i>
        </a>
      </div>
      <div class="pt-8 border-t border-gray-300">
        <p class="text-gray-500 text-sm">
          &copy; 2025 贺绍华个人主页. 保留所有权利.
        </p>
        </div>
      </div>
    </div>
</section>

</div>
