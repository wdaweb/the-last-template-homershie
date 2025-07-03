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
          <div class="cmsmasters_tabs tabs_mode_tour tabs_pos_right">
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
import { ref } from 'vue'

const activeTab = ref(0)
const lastTab = ref(0)
const isAnimating = ref(false)

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
</script>

<style scoped lang="scss">
.cmsmasters_tabs_wrap {
  height: 560px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 560px;
  overflow: hidden;
  border-radius: 8px;
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
</style>
