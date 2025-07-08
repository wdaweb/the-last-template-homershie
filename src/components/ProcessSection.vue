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
          <div :class="['cmsmasters_tabs', 'tabs_mode_tour', { tabs_pos_right: !isMobile }]">
            <ul class="cmsmasters_tabs_list">
              <li
                v-for="(tab, index) in tabs"
                :key="tab.id"
                :id="tab.id"
                class="cmsmasters_tabs_list_item"
                :class="{ current_tab: activeTab === index }"
                @click="switchTab(index)"
              >
                <a href="#" @click.prevent>
                  <span>{{ tab.title }}</span>
                </a>
              </li>
            </ul>
            <div class="cmsmasters_tabs_wrap">
              <div
                v-for="(tab, index) in tabs"
                :key="tab.id"
                :id="tab.id"
                class="cmsmasters_tab tabs-wrapper"
                :class="getTabClass(index)"
                :style="getTabStyle(index)"
              >
                <div class="cmsmasters_tab_inner">
                  <div class="image-container">
                    <div class="cmsmasters_img cmsmasters_image_n">
                      <img decoding="async" :src="tab.image" :alt="tab.title" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeTab = ref(0)
const lastTab = ref(0)
const isAnimating = ref(false)
const isMobile = ref(window.innerWidth < 768)

const tabs = ref([
  {
    id: 'cmsmasters_tabs_list_item_b1kbeaqw6',
    title: 'Need',
    image: 'https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-5-3.jpg',
  },
  {
    id: 'cmsmasters_tabs_list_item_jhufnonfze',
    title: 'Meaning',
    image: 'https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-1-3.jpg',
  },
  {
    id: 'cmsmasters_tabs_list_item_tv2jy6tdir',
    title: 'Technology',
    image: 'https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-2-3.jpg',
  },
  {
    id: 'cmsmasters_tabs_list_item_ce0aj5cupl',
    title: 'Experience',
    image: 'https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-4-3.jpg',
  },
])

const switchTab = (index) => {
  if (index === activeTab.value || isAnimating.value) return
  lastTab.value = activeTab.value
  isAnimating.value = true
  activeTab.value = index
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

// 動畫 class 控制
const getTabClass = (index) => {
  if (index < activeTab.value) {
    return 'tab-below'
  } else if (index === activeTab.value) {
    if (isAnimating.value && lastTab.value < activeTab.value) {
      return 'tab-anim-in'
    }
    return 'tab-active'
  } else if (index === lastTab.value && isAnimating.value && lastTab.value > activeTab.value) {
    return 'tab-anim-out'
  }
  return ''
}

const getTabStyle = (index) => {
  if (index === activeTab.value || (isAnimating.value && index === lastTab.value)) {
    return { display: 'block' }
  }
  return { display: 'none' }
}

// 響應式監聽
const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.cmsmasters_tabs_wrap {
  height: 560px;
}

.image-container {
  width: 100%;
  /* 不設 height，讓內容決定高度 */
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
}

.cmsmasters_tab {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition:
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.5s;
  opacity: 1;
  z-index: 1;
}

.tab-below {
  transform: translateY(0);
  z-index: 1;
}

.tab-active {
  transform: translateY(0);
  z-index: 2;
}

.tab-anim-in {
  transform: translateY(100%);
  z-index: 3;
  animation: slideInFromBottom 0.5s forwards;
}

.tab-anim-out {
  transform: translateY(0);
  z-index: 2;
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

/* 響應式設計 */
@media (max-width: 768px) {
  /* 修改容器佈局為上下排列 */
  .cmsmasters_tabs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* 調整 tabs list 為水平排列 */
  .cmsmasters_tabs_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    order: 1;
  }

  .cmsmasters_tabs_list_item {
    flex: 0 0 auto;
    margin: 0;
  }

  .cmsmasters_tabs_list_item a {
    display: block;
    padding: 12px 20px;
  }

  /* 調整 tabs wrap 為垂直排列 */
  .cmsmasters_tabs_wrap {
    width: 100% !important;
    height: 300px; /* 或你想要的高度 */
    order: 2;
    position: relative;
  }

  .cmsmasters_tab {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    opacity: 1;
    display: block;
  }

  .image-container {
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
  }

  /* 只顯示當前活動的 tab */
  .cmsmasters_tab:not(.tab-active) {
    display: none;
  }
}

@media (max-width: 480px) {
  .cmsmasters_tabs_list {
    gap: 8px;
  }

  .cmsmasters_tabs_list_item a {
    padding: 10px 16px;
    font-size: 12px;
  }

  .image-container {
    height: 250px;
  }
}
</style>
