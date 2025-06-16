<template>
  <el-container class="feedback-section">
    <el-main>
      <el-row justify="center">
        <el-col :span="20">
          <h2 class="section-title">客戶回饋</h2>
          <el-row :gutter="20">
            <el-col :span="8" v-for="(feedback, index) in feedbacks" :key="index">
              <el-card class="feedback-card" shadow="hover">
                <el-rate v-model="feedback.rating" disabled show-score text-color="#ff9900" />
                <p class="comment">{{ feedback.comment }}</p>
                <p class="author">- {{ feedback.author }}</p>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'

const feedbacks = ref([
  {
    rating: 5,
    comment: '服務非常專業，解決方案很實用！',
    author: '王小明',
  },
  {
    rating: 5,
    comment: '團隊反應迅速，溝通順暢。',
    author: '李小華',
  },
  {
    rating: 5,
    comment: '品質優良，值得推薦！',
    author: '張大偉',
  },
])
</script>

<style scoped>
.feedback-section {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.feedback-card {
  height: 100%;
  text-align: center;
  padding: 2rem;
}

.comment {
  font-size: 1.1rem;
  color: #666;
  margin: 1rem 0;
  line-height: 1.6;
}

.author {
  color: #333;
  font-weight: 500;
}

:deep(.el-rate) {
  margin-bottom: 1rem;
}
</style>
