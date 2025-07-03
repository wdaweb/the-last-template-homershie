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

/* 自定義 el-tab 按鈕樣式 */
.el-tabs__content {
  padding: 48px 0 !important;
}

.el-tabs__header {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  margin-bottom: 1.2rem !important;
}

.el-tabs__nav-wrap {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 auto !important;
}

.el-tabs__nav-scroll {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 auto !important;
}

.el-tabs__nav {
  text-align: center !important;
  margin-bottom: clamp(16px, 1.667vw, 48px) !important;
  display: flex !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
  row-gap: clamp(16px, 1.25vw, 48px) !important;
  column-gap: clamp(16px, 1.25vw, 32px) !important;
}

.el-tabs__item {
  background-color: transparent !important;
  border: 1px solid rgb(250, 250, 250) !important;
  box-sizing: border-box !important;
  color: rgb(250, 250, 250) !important;
  cursor: pointer !important;
  display: block !important;
  font-family: Jost, Arial, Helvetica, 'Nimbus Sans L', sans-serif !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  height: 52px !important;
  line-height: 18px !important;
  margin: 0 !important;
  outline: none !important;
  padding: 16px !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  text-rendering: optimizelegibility !important;
  transition:
    color 0.3s ease-in-out,
    border-color 0.3s ease-in-out !important;
  vertical-align: baseline !important;
  width: 128.109px !important;
  -webkit-font-smoothing: antialiased !important;
}

/* 選中狀態的樣式 */
.el-tabs__item.is-active {
  color: rgb(253, 220, 139) !important;
  border-color: rgb(253, 220, 139) !important;
}

/* 懸停狀態的樣式 */
.el-tabs__item:hover {
  color: rgb(253, 220, 139) !important;
  border-color: rgb(253, 220, 139) !important;
}

/* 移除 Element Plus 的默認邊框樣式 */
.el-tabs__item:before,
.el-tabs__item:after,
.el-tabs__header:before,
.el-tabs__header:after,
.el-tabs__nav-wrap:before,
.el-tabs__nav-wrap:after,
.el-tabs__active-bar {
  display: none !important;
}
</style>
