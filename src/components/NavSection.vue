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

          <!-- 桌面版菜單 -->
          <el-menu
            class="nav-section desktop-menu"
            mode="horizontal"
            :ellipsis="false"
            :default-active="activeSection"
            @select="handleMenuSelect"
          >
            <el-menu-item index="hero">
              <el-icon><HomeFilled /></el-icon>
              <span>Home</span>
            </el-menu-item>
            <el-menu-item index="about">
              <el-icon><InfoFilled /></el-icon>
              <span>About</span>
            </el-menu-item>
            <el-menu-item index="portfolio">
              <el-icon><Picture /></el-icon>
              <span>Portfolio</span>
            </el-menu-item>
            <el-menu-item index="feedback">
              <el-icon><ChatDotRound /></el-icon>
              <span>Feedback</span>
            </el-menu-item>
            <el-menu-item index="contact">
              <el-icon><Message /></el-icon>
              <span>Contact</span>
            </el-menu-item>
            <el-menu-item index="blog">
              <el-icon><Document /></el-icon>
              <span>Blog</span>
            </el-menu-item>
          </el-menu>

          <!-- 手機版漢堡按鈕 -->
          <div class="mobile-menu-toggle" @click="toggleMobileMenu">
            <el-icon :size="24">
              <Menu v-if="!isMobileMenuOpen" />
              <Close v-else />
            </el-icon>
          </div>
        </div>

        <!-- 手機版側邊菜單 -->
        <el-drawer
          v-model="isMobileMenuOpen"
          direction="rtl"
          size="50%"
          :with-header="false"
          class="mobile-menu-drawer"
        >
          <div class="mobile-menu-content">
            <div class="mobile-menu-header">
              <img
                src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/logo-4.png"
                alt="Logo"
                class="mobile-logo"
                @click="scrollToTop"
              />
            </div>
            <el-menu
              class="mobile-menu"
              mode="vertical"
              :default-active="activeSection"
              @select="handleMobileMenuSelect"
            >
              <el-menu-item index="hero">
                <el-icon><HomeFilled /></el-icon>
                <span>Home</span>
              </el-menu-item>
              <el-menu-item index="about">
                <el-icon><InfoFilled /></el-icon>
                <span>About</span>
              </el-menu-item>
              <el-menu-item index="portfolio">
                <el-icon><Picture /></el-icon>
                <span>Portfolio</span>
              </el-menu-item>
              <el-menu-item index="feedback">
                <el-icon><ChatDotRound /></el-icon>
                <span>Feedback</span>
              </el-menu-item>
              <el-menu-item index="contact">
                <el-icon><Message /></el-icon>
                <span>Contact</span>
              </el-menu-item>
              <el-menu-item index="blog">
                <el-icon><Document /></el-icon>
                <span>Blog</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-drawer>
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
  Menu,
  Close,
} from '@element-plus/icons-vue'

// 響應式數據
const activeSection = ref('hero')
const isMobileMenuOpen = ref(false)

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
  isMobileMenuOpen.value = false
}

// 處理桌面版菜單選擇
const handleMenuSelect = (index) => {
  const element = document.getElementById(index)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// 處理手機版菜單選擇
const handleMobileMenuSelect = (index) => {
  const element = document.getElementById(index)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  // 關閉手機版菜單
  isMobileMenuOpen.value = false
}

// 切換手機版菜單
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
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

/* 手機版漢堡按鈕 */
.mobile-menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: #53627c;
  transition: all 0.3s ease;
  margin-right: 16px;
}

.mobile-menu-toggle:hover {
  color: white;
}

/* 手機版菜單內容 */
.mobile-menu-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #141414;
}

.mobile-menu-header {
  padding: 20px;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-logo {
  height: 30px;
  width: auto;
  cursor: pointer;
}

.mobile-menu {
  flex: 1;
  background: #141414;
  border: none;
}

.mobile-menu .el-menu-item {
  color: #53627c;
  background-color: transparent !important;
  border: none !important;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.mobile-menu .el-menu-item:hover {
  color: white !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.mobile-menu .el-menu-item.is-active {
  color: var(--el-color-primary) !important;
  background-color: rgba(35, 164, 183, 0.1) !important;
  border-right: 3px solid var(--el-color-primary) !important;
}

.mobile-menu .el-menu-item .el-icon {
  margin-right: 12px;
  font-size: 18px;
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .el-header {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .nav-wrapper {
    height: 70px;
    justify-content: space-between;
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

  /* 隱藏桌面版菜單，顯示漢堡按鈕 */
  .desktop-menu {
    display: none !important;
  }

  .mobile-menu-toggle {
    display: flex;
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

/* 手機版抽屜樣式 */
.mobile-menu-drawer {
  background: #141414;
}

.mobile-menu-drawer :deep(.el-drawer__body) {
  padding: 0;
  background: #141414;
}

.mobile-menu-drawer :deep(.el-drawer__header) {
  display: none;
}

:deep(.el-drewer) {
  --el-drawer-bg-color: transparent;
}
</style>
