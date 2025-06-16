<template>
  <footer class="footer-section">
    <el-container>
      <el-main>
        <el-row :gutter="40">
          <el-col :span="8">
            <div class="footer-info">
              <h3>公司名稱</h3>
              <p>提供最優質的服務</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="footer-links">
              <h4>快速連結</h4>
              <el-link type="primary" href="#home">首頁</el-link>
              <el-link type="primary" href="#about">關於我們</el-link>
              <el-link type="primary" href="#contact">聯絡我們</el-link>
              <el-link type="primary" href="#feedback">意見回饋</el-link>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="footer-social">
              <h4>社群媒體</h4>
              <div class="social-links">
                <el-button type="primary" circle>
                  <el-icon><Platform /></el-icon>
                </el-button>
                <el-button type="success" circle>
                  <el-icon><Picture /></el-icon>
                </el-button>
                <el-button type="info" circle>
                  <el-icon><Connection /></el-icon>
                </el-button>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-divider />
        <div class="footer-bottom">
          <p>&copy; 2024 公司名稱. 版權所有.</p>
        </div>
      </el-main>
    </el-container>
  </footer>
</template>

<script setup>
import { Platform, Picture, Connection } from '@element-plus/icons-vue'
</script>

<style scoped>
.footer-section {
  background-color: #333;
  color: white;
  padding: 4rem 0 2rem;
  width: 100%;
  overflow-x: hidden;
}

:deep(.el-container) {
  background-color: #333;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

:deep(.el-main) {
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.footer-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-info p {
  color: #ccc;
}

.footer-links,
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.footer-links :deep(.el-link) {
  margin-right: 1rem;
  color: #ccc;
}

.footer-links :deep(.el-link:hover) {
  color: white;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
}

.footer-bottom p {
  color: #ccc;
}

:deep(.el-divider) {
  background-color: #444;
  margin: 2rem 0;
}

:deep(.el-row) {
  margin: 0 !important;
  width: 100%;
}

:deep(.el-col) {
  padding: 0 20px;
}
</style>
