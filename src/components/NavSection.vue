<template>
  <el-container>
    <el-header>
      <div class="nav-wrapper">
        <div class="logo-area">
          <!-- 這裡可以放 LOGO 圖片或文字 -->
          <img
            src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/logo-4.png"
            alt="Logo"
            class="logo-img"
          />
          <!-- 若沒有 logo.png 可改成 <span>LOGO</span> -->
        </div>
        <el-menu class="nav-section" mode="horizontal" :ellipsis="false" router>
          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <span>首頁</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <el-icon><InfoFilled /></el-icon>
            <span>關於我們</span>
          </el-menu-item>
          <el-menu-item index="/feedback">
            <el-icon><ChatDotRound /></el-icon>
            <span>意見回饋</span>
          </el-menu-item>
          <el-menu-item index="/contact">
            <el-icon><Message /></el-icon>
            <span>聯絡我們</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-header>
  </el-container>
</template>

<script setup>
import { HomeFilled, InfoFilled, Message, ChatDotRound } from '@element-plus/icons-vue'
</script>

<style scoped>
.nav-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 98px;
  background: #141414;
}
.logo-area {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 32px;
  padding-right: 32px;
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
}
.el-menu-item:hover {
  background-color: transparent !important;
  color: white !important;
  list-style: none !important;
}

.el-menu--horizontal > .el-menu-item.is-active {
  color: var(--el-color-primary) !important;
  background-color: transparent !important;
  list-style: none !important;
  border-bottom: none !important;
}
</style>
