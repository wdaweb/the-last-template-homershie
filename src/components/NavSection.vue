<template>
  <el-affix :offset="0" class="nav-affix">
    <el-container>
      <el-header>
        <div class="nav-wrapper">
          <div class="logo-area">
            <img
              src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/logo-4.png"
              alt="Logo"
              class="logo-img"
              @click="scrollToTop"
            />
          </div>
          <el-menu
            class="nav-section"
            mode="horizontal"
            :ellipsis="false"
            :default-active="activeSection"
            @select="handleMenuSelect"
          >
            <el-menu-item index="hero">
              <el-icon><HomeFilled /></el-icon>
              <span>首頁</span>
            </el-menu-item>
            <el-menu-item index="about">
              <el-icon><InfoFilled /></el-icon>
              <span>關於我們</span>
            </el-menu-item>
            <el-menu-item index="portfolio">
              <el-icon><Picture /></el-icon>
              <span>作品集</span>
            </el-menu-item>
            <el-menu-item index="feedback">
              <el-icon><ChatDotRound /></el-icon>
              <span>客戶回饋</span>
            </el-menu-item>
            <el-menu-item index="contact">
              <el-icon><Message /></el-icon>
              <span>聯絡我們</span>
            </el-menu-item>
            <el-menu-item index="blog">
              <el-icon><Document /></el-icon>
              <span>部落格</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-header>
    </el-container>
  </el-affix>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  HomeFilled,
  InfoFilled,
  Message,
  ChatDotRound,
  Picture,
  Document,
} from '@element-plus/icons-vue'

// 響應式數據
const activeSection = ref('hero')

// 定義頁面區域
const sections = [
  { id: 'hero', title: '首頁' },
  { id: 'about', title: '關於我們' },
  { id: 'portfolio', title: '作品集' },
  { id: 'feedback', title: '客戶回饋' },
  { id: 'contact', title: '聯絡我們' },
  { id: 'blog', title: '部落格' },
]

// 滾動到頂部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// 處理菜單選擇
const handleMenuSelect = (index) => {
  const element = document.getElementById(index)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// 更新活動區域
const updateActiveSection = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const offset = 100 // 偏移量，讓切換更平滑

  // 從後往前檢查，找到當前在視窗中的區域
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    const element = document.getElementById(section.id)

    if (element) {
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrollTop

      // 如果元素在視窗中或已經滾動過
      if (scrollTop >= elementTop - offset) {
        activeSection.value = section.id
        break
      }
    }
  }
}

// 滾動監聽器
let scrollHandler = null

// 組件掛載時設置滾動監聽
onMounted(() => {
  scrollHandler = updateActiveSection
  window.addEventListener('scroll', scrollHandler)

  // 初始化活動區域
  updateActiveSection()
})

// 組件卸載時移除監聽器
onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<style scoped>
.nav-affix {
  z-index: 1000;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 98px;
  background: #141414;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo-area {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 32px;
  padding-right: 32px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.logo-area:hover {
  opacity: 0.8;
}

.logo-img {
  height: 30px;
  width: auto;
}

.nav-section {
  margin-left: auto;
  width: auto;
  height: 98px;
}

.el-menu {
  background-color: transparent;
  border: none;
}

.el-menu-item {
  color: #53627c;
  background-color: transparent !important;
  list-style: none !important;
  transition: all 0.3s ease;
  position: relative;
}

.el-menu-item:hover {
  background-color: transparent !important;
  color: white !important;
  list-style: none !important;
  transform: translateY(-2px);
}

.el-menu--horizontal > .el-menu-item.is-active {
  color: var(--el-color-primary) !important;
  background-color: transparent !important;
  list-style: none !important;
  border-bottom: 2px solid var(--el-color-primary) !important;
  font-weight: 600;
}

.el-menu--horizontal > .el-menu-item.is-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: var(--el-color-primary);
  animation: slideIn 0.3s ease forwards;
}

@keyframes slideIn {
  to {
    width: 100%;
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .nav-wrapper {
    height: 70px;
  }

  .nav-section {
    height: 70px;
  }

  .logo-img {
    height: 25px;
  }

  .el-menu-item {
    padding: 0 12px !important;
    font-size: 14px;
  }

  .el-menu-item .el-icon {
    margin-right: 4px;
  }
}

@media (max-width: 480px) {
  .logo-area {
    padding-left: 16px;
    padding-right: 16px;
  }

  .el-menu-item {
    padding: 0 8px !important;
    font-size: 12px;
  }

  .el-menu-item span {
    display: none;
  }

  .el-menu-item .el-icon {
    margin-right: 0;
    font-size: 16px;
  }
}
</style>
