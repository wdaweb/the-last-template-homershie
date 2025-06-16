<template>
  <el-container class="hero-section">
    <el-main>
      <el-row justify="center" align="middle">
        <el-col :span="16" class="text-center">
          <h1 class="hero-title">歡迎來到我們的網站</h1>
          <p class="hero-subtitle">這裡是您的理想選擇</p>
          <el-button type="primary" size="large" class="cta-button">
            了解更多
            <el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-main {
  padding-top: 60px;
}

.hero-section {
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.text-center {
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #666;
}

.cta-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
}
</style>
