<template>
  <el-container class="hero-section" id="hero">
    <el-main>
      <!-- 背景圖片容器 -->
      <div class="hero-bg-image">
        <img
          src="https://nexus.uiparadox.com/wp-content/uploads/revslider/home4_slider1/banner-bg-vector.png"
          alt=""
        />
      </div>

      <el-row align="middle">
        <el-col :span="6">
          <h1>
            trusted <br />
            design<br />partner
          </h1>
          <a class="button hero-button">BOOK A FREE CONSULTATION</a>
        </el-col>
        <el-col :span="6" class="desktop-only">
          <p>
            A creative agency is a <br />company that provides a range <br />of services to help
            businesses<br />
            and organizations with their<br />
            creative and marketing needs.
          </p>
        </el-col>
        <el-col
          :span="6"
          :offset="6"
          :xs="24"
          :xs-offset="0"
          :sm="12"
          :sm-offset="0"
          :md="6"
          :md-offset="6"
          :lg="6"
          :lg-offset="6"
          :xl="6"
          :xl-offset="6"
          class="test-responsive-col"
        >
          <p style="background: none">
            fiverr. <el-icon class="star-icon" :size="16"><Star /></el-icon> 5.0
          </p>
          <p class="Janiefier">
            <span>Janiefier</span>
            A creative agency is a company that provides a range of services to help businesses and
            organizations with their creative and marketing needs.
          </p>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <swiper
            :slides-per-view="slidesPerView"
            :space-between="10"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :loop="true"
            :modules="[Autoplay]"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <img
                src="https://nexus.uiparadox.com/wp-content/uploads/2025/04/brand-07-2.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide
              ><img
                src="https://nexus.uiparadox.com/wp-content/uploads/2025/04/brand-06-2.png"
                alt=""
            /></swiper-slide>
            <swiper-slide
              ><img
                src="https://nexus.uiparadox.com/wp-content/uploads/2025/04/brand-05-2.png"
                alt=""
            /></swiper-slide>
            <swiper-slide
              ><img
                src="https://nexus.uiparadox.com/wp-content/uploads/2025/04/brand-04-2.png"
                alt=""
            /></swiper-slide>
            <swiper-slide
              ><img
                src="https://nexus.uiparadox.com/wp-content/uploads/2025/04/brand-03-2.png"
                alt=""
            /></swiper-slide>
            <swiper-slide
              ><img
                src="https://nexus.uiparadox.com/wp-content/uploads/2025/04/brand-02-2.png"
                alt=""
            /></swiper-slide>
            <swiper-slide>
              <img
                src="https://nexus.uiparadox.com/wp-content/uploads/2025/04/brand-07-2.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="https://nexus.uiparadox.com/wp-content/uploads/2025/04/brand-06-2.png"
                alt=""
              />
            </swiper-slide>
          </swiper>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { Star } from '@element-plus/icons-vue'

// 導入 Swiper 樣式
import 'swiper/css'

// Swiper 實例引用
const swiperRef = ref(null)

// 響應式 slides-per-view 計算
const slidesPerView = ref(5)

// 更新 slides-per-view 的函數
const updateSlidesPerView = () => {
  if (window.innerWidth < 768) {
    slidesPerView.value = 1 // sm 尺寸
  } else if (window.innerWidth < 1200) {
    slidesPerView.value = 3 // 小於 1200px
  } else {
    slidesPerView.value = 5 // 大螢幕
  }
}

// 事件處理函數
const onSwiper = (swiper) => {
  swiperRef.value = swiper
  console.log('Swiper initialized:', swiper)
}

const onSlideChange = () => {
  console.log('Slide changed')
}

// 組件掛載時設置
onMounted(() => {
  // 初始化 slides-per-view
  updateSlidesPerView()

  // 監聽視窗大小變化
  window.addEventListener('resize', updateSlidesPerView)
})

// 組件卸載時清理
onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView)
})
</script>

<style scoped lang="scss">
.hero-bg-image {
  position: absolute;
  top: 45%;
  left: 52%;
  width: 80%;
  transform: translate(-50%, -50%);
  z-index: -1;
  pointer-events: none;
  img {
    width: 100%;
    height: auto;
  }
}

.hero-section {
  position: relative;
}

.el-container {
  padding-top: 45px !important;
  padding-bottom: 45px !important;
}

.el-row {
  margin-bottom: 170px;
  margin-top: 150px;

  &:last-child {
    margin-bottom: 0; // 最後一個 row 不需要底部間距
  }
}

h1 {
  margin-bottom: 50px;
  letter-spacing: 0.1rem;
}

p {
  font-size: 1rem;
  font-weight: 400;
  color: white;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  text-align: left;
  white-space: nowrap;
  overflow: visible;
  padding: 9px;
  display: block;
  background: rgba(30, 31, 32, 0.5);
  margin-left: 50px;
  font-family: 'Poppins', Arial, Helvetica, 'Nimbus Sans L', sans-serif;
}

.hero-button {
  background-color: #fff;
  border: none;
  color: #141414;
  transition: all 0.5s ease;
  padding: 4px 40px;
  font-size: 19px;
  font-weight: 600;
  &:hover {
    background-color: var(--el-color-primary-light);
    color: #fff;
  }
}

.Janiefier {
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
  color: rgb(146, 148, 159);
  letter-spacing: 0px;
  line-height: 1.5rem;
  white-space: normal;
  overflow: visible;
  padding: 25px 20px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(253, 220, 139);
  border-radius: 0px;
  display: block;
  background: rgb(30, 31, 32);
  visibility: visible;
  span {
    font-family: 'Jost';
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    display: block;
    margin-bottom: 15px;
  }
}

/* Swiper 樣式 */
:deep(.swiper) {
  width: 100%;
  padding: 20px 0;
}

:deep(.swiper-slide) {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.swiper-slide img) {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 767px) {
  .test-responsive-col {
    margin-left: 0 !important;
  }
}
@media (max-width: 1200px) {
  .desktop-only {
    display: none;
  }
  p {
    margin-left: 0 !important;
  }
}
</style>
