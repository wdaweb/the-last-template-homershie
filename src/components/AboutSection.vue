<template>
  <el-container class="about-section" id="about">
    <el-main>
      <el-row justify="center">
        <el-col :span="22">
          <h2 class="section-title">
            Experience the power of digital marketing with
            <span class="gradient-stroke-text">DIGITALNEXUS</span>
          </h2>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
      <el-row>
        <el-col :span="12" :offset="12">
          <p>
            A creative agency is a company that provides a range of services to help businesses and
            organizations with their creative and marketing needs. Creative agencies often employ a
            team of experts in various creative fields, such as design, advertising, copywriting,
            web development, social media marketing, and branding.
          </p>
          <div class="button_wrap">
            <a href="#" class="cmsmasters_button cus-btn"><span>MORE ABOUT US</span></a>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
//
</script>

<style scoped>
.el-main {
  padding-bottom: 260px;
  padding-top: 120px;
  background-image: url('https://nexus.uiparadox.com/wp-content/uploads/2024/09/about-bg-object.png');
  background-position: bottom center;
  background-repeat: no-repeat;
  height: 85vh;
}

/* Start Button */
.button_wrap {
  text-align: right;
  float: right;
  position: relative;
  display: block;
}

.cus-btn {
  background: #fff;
  color: #141414;
  transition: all 0.5s ease;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background: linear-gradient(90deg, rgba(253, 220, 139, 0.95) 0%, rgba(40, 208, 232, 0.95) 100%);
  }
}
/* Finish Button */
</style>
