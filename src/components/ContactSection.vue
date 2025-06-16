<template>
  <el-container class="contact-section">
    <el-main>
      <el-row justify="center">
        <el-col :span="20">
          <h2 class="section-title">聯絡我們</h2>
          <el-row :gutter="40">
            <el-col :span="12">
              <el-card class="contact-info">
                <el-descriptions direction="vertical" :column="1" border>
                  <el-descriptions-item label="地址">
                    <el-icon><Location /></el-icon>
                    台北市信義區信義路五段7號
                  </el-descriptions-item>
                  <el-descriptions-item label="電話">
                    <el-icon><Phone /></el-icon>
                    02-1234-5678
                  </el-descriptions-item>
                  <el-descriptions-item label="電子郵件">
                    <el-icon><Message /></el-icon>
                    contact@example.com
                  </el-descriptions-item>
                </el-descriptions>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card>
                <el-form :model="form" label-position="top">
                  <el-form-item label="姓名" required>
                    <el-input v-model="form.name" placeholder="請輸入您的姓名" />
                  </el-form-item>
                  <el-form-item label="電子郵件" required>
                    <el-input v-model="form.email" placeholder="請輸入您的電子郵件" />
                  </el-form-item>
                  <el-form-item label="訊息" required>
                    <el-input
                      v-model="form.message"
                      type="textarea"
                      :rows="4"
                      placeholder="請輸入您的訊息"
                    />
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm">送出</el-button>
                  </el-form-item>
                </el-form>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { reactive } from 'vue'
import { Location, Phone, Message } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitForm = () => {
  ElMessage({
    message: '表單已送出！',
    type: 'success',
  })
}
</script>

<style scoped>
.contact-section {
  padding: 5rem 0;
  background-color: #fff;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.contact-info {
  height: 100%;
}

:deep(.el-descriptions-item__label) {
  font-weight: bold;
}

:deep(.el-descriptions-item__content) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
