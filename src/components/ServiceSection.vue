<template>
  <el-container class="service-section" id="service">
    <el-main>
      <el-row>
        <el-col :span="12">
          <h2>Explore Our Range of <span class="gradient-stroke-text">SERVICES</span></h2>
        </el-col>
        <el-col :span="12">
          <div class="button_wrap">
            <a href="#" class="cmsmasters_button cus-btn"><span>ALL SERVICES</span></a>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <h3><span class="gradient-stroke-text">01</span> –</h3>
          <h3>Setting Your <span class="gradient-stroke-text">GOALS</span></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque
            tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit tristique posuere
            tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla sagittis nam
            pellentesque sagittis in turpis nulla et. Lorem ipsum dolor sit amet consectetur.
            Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor.
          </p>
        </el-col>
        <el-col :span="12">
          <img src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/service-1-1-3.png" />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
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
