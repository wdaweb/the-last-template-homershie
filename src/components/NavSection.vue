<template>
  <el-menu class="nav-section" mode="horizontal" :ellipsis="false" router>
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <span>首頁</span>
    </el-menu-item>
    <el-menu-item index="/about">
      <el-icon><InfoFilled /></el-icon>
      <span>關於我們</span>
    </el-menu-item>
    <el-menu-item index="/contact">
      <el-icon><Message /></el-icon>
      <span>聯絡我們</span>
    </el-menu-item>
    <el-menu-item index="/feedback">
      <el-icon><ChatDotRound /></el-icon>
      <span>意見回饋</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { HomeFilled, InfoFilled, Message, ChatDotRound } from '@element-plus/icons-vue'
</script>

<style scoped>
.nav-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
