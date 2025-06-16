<template>
  <el-container class="about-section">
    <el-main>
      <el-row justify="center">
        <el-col :span="20">
          <h2 class="section-title">關於我們</h2>
          <el-row :gutter="40">
            <el-col :span="12">
              <el-card class="about-content">
                <p>我們是一家專注於提供優質服務的公司，致力於為客戶創造價值。</p>
                <p>我們的團隊由經驗豐富的專業人士組成，隨時準備為您提供最好的解決方案。</p>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-card class="feature-card">
                    <el-icon class="feature-icon"><Star /></el-icon>
                    <h3>專業服務</h3>
                    <p>提供最專業的解決方案</p>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card class="feature-card">
                    <el-icon class="feature-icon"><Medal /></el-icon>
                    <h3>品質保證</h3>
                    <p>確保每個專案的品質</p>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card class="feature-card">
                    <el-icon class="feature-icon"><User /></el-icon>
                    <h3>客戶至上</h3>
                    <p>以客戶需求為優先</p>
                  </el-card>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { Star, Medal, User } from '@element-plus/icons-vue'
</script>

<style scoped>
.about-section {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.about-content {
  height: 100%;
  padding: 2rem;
}

.about-content p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #666;
}

.feature-card {
  text-align: center;
  padding: 2rem 1rem;
  height: 100%;
}

.feature-icon {
  font-size: 2.5rem;
  color: #409eff;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
}
</style>
