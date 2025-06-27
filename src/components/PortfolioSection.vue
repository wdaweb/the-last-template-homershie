<template>
  <el-container class="portfolio-section" id="portfolio">
    <el-main>
      <el-row>
        <el-col :span="24">
          <h2>Showcase of Our Exceptional <span class="gradient-stroke-text">PORTFOLIO</span></h2>
        </el-col>
        <el-col :span="24" class="tabs-block">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="Featured" name="first">
              <div class="tabs-sidebar">
                <h4 class="color-sec">Featured</h4>
                <p class="text-white">
                  Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                  scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis
                  dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div class="vr-line"></div>
              <div class="tab-content">
                <h5 class="text-white">Web Design</h5>
                <p class="text-white">
                  Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                  scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis
                  dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="cmsmasters_img cmsmasters_image_n">
                  <img
                    decoding="async"
                    src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-04-3.png"
                  />
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Web Design" name="second">
              <div class="tabs-sidebar">
                <h4 class="color-sec">Web Design</h4>
                <p class="text-white">
                  Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                  scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis
                  dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div class="vr-line"></div>
              <div class="tab-content">
                <h5 class="text-white">Web Design</h5>
                <p class="text-white">
                  Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                  scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis
                  dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="cmsmasters_img cmsmasters_image_n">
                  <img
                    decoding="async"
                    src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-01-3.png"
                  />
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="App Design" name="third">
              <div class="tabs-sidebar">
                <h4 class="color-sec">App Design</h4>
                <p class="text-white">
                  Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                  scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis
                  dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div class="vr-line"></div>
              <div class="tab-content">
                <h5 class="text-white">App Design</h5>
                <p class="text-white">
                  Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                  scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis
                  dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="cmsmasters_img cmsmasters_image_n">
                  <img
                    decoding="async"
                    src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-02-3.png"
                  />
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="E-Commerce" name="fourth">
              <div class="tabs-sidebar">
                <h4 class="color-sec">E-Commerce</h4>
                <p class="text-white">
                  Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                  scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis
                  dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div class="vr-line"></div>
              <div class="tab-content">
                <h5 class="text-white">E-Commerce</h5>
                <p class="text-white">
                  Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis
                  scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis
                  dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur.
                </p>
                <div class="cmsmasters_img cmsmasters_image_n">
                  <img
                    decoding="async"
                    src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-03-3.png"
                  />
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
