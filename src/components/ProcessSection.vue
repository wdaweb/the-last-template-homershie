<template>
  <el-container class="process-section" id="process">
    <el-main>
      <el-row>
        <el-col :span="24">
          <h2>
            Transforming Ideas into Digital<br />
            Excellence <span class="gradient-stroke-text">OUR PROVEN PROCESS</span>
          </h2>
        </el-col>
        <el-col :span="24">
          <el-tabs :tab-position="tabPosition" class="tabs">
            <el-tab-pane label="Need"
              ><img
                decoding="async"
                src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-5-3.jpg"
            /></el-tab-pane>
            <el-tab-pane label="Meaning"
              ><img
                decoding="async"
                src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-1-3.jpg"
            /></el-tab-pane>
            <el-tab-pane label="Technology"
              ><img
                decoding="async"
                src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-2-3.jpg"
            /></el-tab-pane>
            <el-tab-pane label="Experience"
              ><img
                decoding="async"
                src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-4-3.jpg"
            /></el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'

const tabPosition = ref('right')
</script>

<style scoped lang="scss">
.tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
