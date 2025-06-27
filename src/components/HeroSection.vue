<template>
  <el-container class="hero-section" id="hero">
    <el-main>
      <el-row justify="center" align="middle">
        <el-col :span="16" class="text-center">
          <h1>
            trusted <br />
            design<br />partner
          </h1>
          <el-btn>BOOK A FREE CONSULTATION</el-btn>
        </el-col>
        <el-col :span="8">
          <p>
            A creative agency is a <br />company that provides a range <br />of services to help
            businesses<br />
            and organizations with their<br />
            creative and marketing needs.
          </p>
        </el-col>
        <el-col :span="8">
          <p>fiverr. <i class="fa-star"></i> 5.0</p>
          <p>
            <span>Janiefier</span>
            <br />
            A creative agency is a company that provides a range of services to help businesses and
            organizations with their creative and marketing needs.
          </p>
        </el-col>
        <el-col :span="8">
          <img
            src="https://nexus.uiparadox.com/wp-content/uploads/revslider/home4_slider1/banner-bg-vector.png"
            alt=""
          />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <swiper
            :slides-per-view="5"
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
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

// 導入 Swiper 樣式
import 'swiper/css'

// Swiper 實例引用
const swiperRef = ref(null)

// 事件處理函數
const onSwiper = (swiper) => {
  swiperRef.value = swiper
  console.log('Swiper initialized:', swiper)
}

const onSlideChange = () => {
  console.log('Slide changed')
}
</script>

<style scoped>
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
</style>
