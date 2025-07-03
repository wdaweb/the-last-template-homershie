<template>
  <el-container class="portfolio-section" id="portfolio">
    <el-main>
      <el-row>
        <el-col :span="20">
          <h2>Showcase of Our Exceptional <span class="gradient-stroke-text">PORTFOLIO</span></h2>
        </el-col>
        <el-col :span="24">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <!-- 使用 v-for 動態渲染 tab-pane -->
            <el-tab-pane
              v-for="(tab, index) in tabData"
              :key="tab.name"
              :label="tab.label"
              :name="tab.name"
            >
              <div
                class="tab-content"
                :class="getTabClass(tab.name, index)"
                :style="getTabStyle(tab.name, index)"
              >
                <el-row :gutter="40">
                  <el-col :span="6">
                    <h4 class="color-sec">{{ tab.title }}</h4>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                      scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus
                      mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                  </el-col>
                  <el-col :span="18">
                    <h5 class="text-white">{{ tab.title }}</h5>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                      scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus
                      mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                    <div class="cmsmasters_img cmsmasters_image_n">
                      <img decoding="async" :src="tab.image" :alt="tab.title" />
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
const lastActiveName = ref('first')
const isAnimating = ref(false)

// Tab 數據
const tabData = ref([
  {
    name: 'first',
    label: 'Featured (2)',
    title: 'Featured',
    image: 'https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-04-3.png',
  },
  {
    name: 'second',
    label: 'Web Design',
    title: 'Web Design',
    image: 'https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-01-3.png',
  },
  {
    name: 'third',
    label: 'App Design',
    title: 'App Design',
    image: 'https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-02-3.png',
  },
  {
    name: 'fourth',
    label: 'E-Commerce',
    title: 'E-Commerce',
    image: 'https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-03-3.png',
  },
])

// 監聽 activeName 變化來觸發動畫
watch(activeName, async (newVal, oldVal) => {
  if (newVal !== oldVal && oldVal !== undefined) {
    lastActiveName.value = oldVal
    isAnimating.value = true

    // 動畫結束後重置狀態
    setTimeout(() => {
      isAnimating.value = false
    }, 500)
  }
})

// Tab 樣式控制
const getTabStyle = () => {
  // 所有 tab 都顯示，通過 z-index 和 transform 控制層級
  return { display: 'block' }
}

// 動畫 class 控制
const getTabClass = (tabName) => {
  const currentIndex = getTabIndex(activeName.value)
  const lastIndex = getTabIndex(lastActiveName.value)
  const thisIndex = getTabIndex(tabName)

  if (tabName === activeName.value) {
    // 當前選中的 tab
    if (isAnimating.value && lastIndex < currentIndex) {
      return 'tab-anim-in' // 從下方滑入
    }
    return 'tab-active'
  } else if (tabName === lastActiveName.value && isAnimating.value) {
    // 上一個 tab，正在滑出
    if (lastIndex > currentIndex) {
      return 'tab-anim-out' // 向下滑出
    }
  } else if (thisIndex < currentIndex) {
    // 在當前 tab 之前的 tab，保持在下方
    return 'tab-below'
  } else if (thisIndex > currentIndex) {
    // 在當前 tab 之後的 tab，隱藏在下方
    return 'tab-hidden'
  }

  return 'tab-hidden'
}

// 獲取 tab 索引
const getTabIndex = (tabName) => {
  return tabData.value.findIndex((tab) => tab.name === tabName)
}

// 初始載入時觸發動畫
onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    isAnimating.value = true
  }, 100)

  setTimeout(() => {
    isAnimating.value = false
  }, 600)
})

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style scoped lang="scss">
.tab-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
}

.tab-hidden {
  opacity: 0;
  transform: translateY(100%);
  z-index: 1;
}

.tab-below {
  opacity: 1;
  transform: translateY(0);
  z-index: 1; // 在下方
}

.tab-active {
  opacity: 1;
  transform: translateY(0);
  z-index: 2; // 在中間
}

.tab-anim-in {
  opacity: 1;
  transform: translateY(100%);
  z-index: 3; // 在最上層，從下方滑入
  animation: slideInFromBottom 0.5s forwards;
}

.tab-anim-out {
  opacity: 1;
  transform: translateY(0);
  z-index: 2; // 在中間，向下滑出
  animation: slideOutToBottom 0.5s forwards;
}

@keyframes slideInFromBottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideOutToBottom {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

/* 確保容器有適當的 overflow 設定 */
:deep(.el-tabs__content) {
  position: relative;
  overflow: hidden;
  height: 100vh;
  background-color: #141414;
}

:deep(.el-tab-pane) {
  position: relative;
  height: 100%;
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
