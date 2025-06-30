<template>
  <el-container class="portfolio-section" id="portfolio">
    <el-main>
      <el-row>
        <el-col :span="20">
          <h2>Showcase of Our Exceptional <span class="gradient-stroke-text">PORTFOLIO</span></h2>
        </el-col>
        <el-col :span="24">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="Featured (2)" name="first">
              <div
                class="tab-content"
                :class="{ 'tab-enter': isAnimating && activeName === 'first' }"
              >
                <el-row :gutter="40">
                  <el-col :span="6">
                    <h4 class="color-sec">Featured</h4>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                      scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus
                      mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                  </el-col>
                  <el-col :span="18">
                    <h5 class="text-white">Featured</h5>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                      scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus
                      mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                    <div class="cmsmasters_img cmsmasters_image_n">
                      <img
                        decoding="async"
                        src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-04-3.png"
                      />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Web Design" name="second">
              <div
                class="tab-content"
                :class="{ 'tab-enter': isAnimating && activeName === 'second' }"
              >
                <el-row :gutter="40">
                  <el-col :span="6">
                    <h4 class="color-sec">Web Design</h4>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                      scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus
                      mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                  </el-col>
                  <el-col :span="18">
                    <h5 class="text-white">Web Design</h5>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                      scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus
                      mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                    <div class="cmsmasters_img cmsmasters_image_n">
                      <img
                        decoding="async"
                        src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-01-3.png"
                      />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="App Design" name="third">
              <div
                class="tab-content"
                :class="{ 'tab-enter': isAnimating && activeName === 'third' }"
              >
                <el-row :gutter="40">
                  <el-col :span="6">
                    <h4 class="color-sec">App Design</h4>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                      scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus
                      mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                  </el-col>
                  <el-col :span="18">
                    <h5 class="text-white">App Design</h5>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                      scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus
                      mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                    <div class="cmsmasters_img cmsmasters_image_n">
                      <img
                        decoding="async"
                        src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-02-3.png"
                      />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="E-Commerce" name="fourth">
              <div
                class="tab-content"
                :class="{ 'tab-enter': isAnimating && activeName === 'fourth' }"
              >
                <el-row :gutter="40">
                  <el-col :span="6">
                    <h4 class="color-sec">E-Commerce</h4>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                      scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus
                      mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                  </el-col>
                  <el-col :span="18">
                    <h5 class="text-white">E-Commerce</h5>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                      scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus
                      mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                    <div class="cmsmasters_img cmsmasters_image_n">
                      <img
                        decoding="async"
                        src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-03-3.png"
                      />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'

const activeName = ref('first')
const isAnimating = ref(false)

// 監聽 activeName 變化來觸發動畫
watch(activeName, async (newVal, oldVal) => {
  if (newVal !== oldVal && oldVal !== undefined) {
    // 先重置動畫狀態
    isAnimating.value = false
    await nextTick()

    // 短暫延遲後開始動畫
    setTimeout(() => {
      isAnimating.value = true
    }, 10)

    // 動畫結束後重置狀態
    setTimeout(() => {
      isAnimating.value = false
    }, 610)
  }
})

// 初始載入時觸發動畫
onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    isAnimating.value = true
  }, 100)

  setTimeout(() => {
    isAnimating.value = false
  }, 700)
})

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style scoped lang="scss">
.tab-content {
  transform: translateY(0);
  opacity: 1;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.tab-content.tab-enter {
  animation: slideInFromTop 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 確保容器有適當的 overflow 設定 */
:deep(.el-tabs__content) {
  position: relative;
  overflow: hidden;
}

:deep(.el-tab-pane) {
  position: relative;
}
</style>
