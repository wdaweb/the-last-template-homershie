<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <h2>Showcase of Our Exceptional <span class="gradient-stroke-text">PORTFOLIO</span></h2>
        </el-col>
        <el-col :span="24">
          <el-button type="primary" href="#">Featured</el-button>
          <el-button type="primary" href="#">Web Design</el-button>
          <el-button type="primary" href="#">App Design</el-button>
          <el-button type="primary" href="#">E-Commerce</el-button>
        </el-col>
        <el-col :span="24" class="tabs-block">
          <div class="tabs-sidebar">
            <h4 class="color-sec">Featured</h4>
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque
              ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit
              quis scelerisque. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div class="vr-line"></div>
          <div class="tab-content">
            <h5 class="text-white">Web Design</h5>
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque
              ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit
              quis scelerisque. Lorem ipsum dolor sit amet consectetur.
            </p>
            <div class="cmsmasters_img cmsmasters_image_n">
              <img
                decoding="async"
                src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/p-04-3.png"
              />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
