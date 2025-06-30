<template>
  <el-container class="feedback-section" id="feedback">
    <el-main>
      <el-row class="title-row">
        <el-col :span="24">
          <h2>
            Feedback From Our<br />
            <span class="gradient-stroke-text">VALUED CLIENTS</span>
          </h2>
        </el-col>
      </el-row>
      <el-row class="content-row" :gutter="40">
        <el-col :span="12" class="img-center">
          <img
            decoding="async"
            src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/map-img-3.png"
          />
        </el-col>
        <el-col :span="12">
          <swiper
            :modules="[SwiperPagination]"
            :pagination="{ clickable: true }"
            :navigation="false"
            class="feedback-swiper"
          >
            <swiper-slide>
              <article class="cmsmasters_quote_inner">
                <figure class="cmsmasters_quote_image">
                  <img
                    decoding="async"
                    width="80"
                    height="80"
                    src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/user_1-3.png"
                    class="attachment-cmsmasters-square-thumb size-cmsmasters-square-thumb"
                    alt=""
                    sizes="(max-width: 80px) 100vw, 80px"
                  />
                </figure>
                <header class="cmsmasters_quote_header">
                  <h3 class="cmsmasters_quote_title">Julia Fernandez</h3>
                </header>
                <div class="cmsmasters_quote_subtitle_wrap">
                  <h5 class="cmsmasters_quote_subtitle">CEO at Microsoft</h5>
                </div>
                <div class="cmsmasters_quote_content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat
                    scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem. Ut felis velit
                    tristique posuere tellus sed. Arcu convallis nam massa leo viverra volutpat
                    facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et.
                  </p>
                </div>
              </article>
            </swiper-slide>
            <swiper-slide>
              <article class="cmsmasters_quote_inner">
                <figure class="cmsmasters_quote_image">
                  <img
                    fetchpriority="high"
                    decoding="async"
                    width="80"
                    height="80"
                    src="https://nexus.uiparadox.com/wp-content/uploads/2025/04/woocommerce-placeholder-2-350x350.png"
                    alt=""
                  />
                </figure>
                <header class="cmsmasters_quote_header">
                  <h3 class="cmsmasters_quote_title">Catherine Nickson</h3>
                </header>
                <div class="cmsmasters_quote_subtitle_wrap">
                  <h5 class="cmsmasters_quote_subtitle">Founder at FixerTech</h5>
                </div>
                <div class="cmsmasters_quote_content">
                  <p>
                    Nulla sagittis nam pellentesque sagittis in turpis nulla et. Lorem ipsum dolor
                    sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt
                    erat porttitor. Sed sed in suscipit lorem. Ipsum dolor sit amet consectetur.
                    Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor. Sed sed
                    in suscipit lorem. Ut felis velit tristique posuere tellus sed. Arcu convallis
                    nam massa leo viverra volutpat facilisis. Ut felis velit tristique posuere
                    tellus sed. Arcu convallis nam massa leo viverra volutpat facilisis. Nulla
                    sagittis nam pellentesque sagittis in turpis nulla et.
                  </p>
                </div>
              </article>
            </swiper-slide>
            <swiper-slide>
              <article class="cmsmasters_quote_inner">
                <figure class="cmsmasters_quote_image">
                  <img
                    decoding="async"
                    width="80"
                    height="80"
                    src="https://nexus.uiparadox.com/wp-content/uploads/2024/09/user_3-3.png"
                    class="attachment-cmsmasters-square-thumb size-cmsmasters-square-thumb"
                    alt=""
                    srcset="
                      https://nexus.uiparadox.com/wp-content/uploads/2024/09/user_3-3.png       80w,
                      https://nexus.uiparadox.com/wp-content/uploads/2024/09/user_3-3-75x75.png 75w
                    "
                    sizes="(max-width: 80px) 100vw, 80px"
                  />
                </figure>
                <header class="cmsmasters_quote_header">
                  <h3 class="cmsmasters_quote_title">Stephen Robert</h3>
                </header>
                <div class="cmsmasters_quote_subtitle_wrap">
                  <h5 class="cmsmasters_quote_subtitle">CEO at TecnSol</h5>
                </div>
                <div class="cmsmasters_quote_content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sed sed in suscipit lorem. Ut felis
                    velit tristique posuere tellus sed. Arcu convallis nam massa leo viverra
                    volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis nulla et.
                    Ut felis velit tristique posuere tellus sed. Arcu convallis nam massa leo
                    viverra volutpat facilisis. Nulla sagittis nam pellentesque sagittis in turpis
                    nulla et. Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend
                    placerat scelerisque tincidunt erat porttitor. Aliquam in neque eleifend
                    placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit lorem.
                  </p>
                </div>
              </article>
            </swiper-slide>
          </swiper>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
</script>

<style scoped lang="scss">
.title-row {
  padding: 80px 0;
}

.content-row {
  padding-bottom: 50px;
}

.img-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}

.feedback-swiper {
  margin-bottom: 30px;

  .swiper-pagination {
    position: relative;
    margin-top: 20px;
  }

  .swiper-pagination-bullet {
    background: #666;
    opacity: 0.5;

    &.swiper-pagination-bullet-active {
      background: #007bff;
      opacity: 1;
    }
  }
}

.cmsmasters_quote_inner {
  padding: 20px;

  .cmsmasters_quote_image {
    margin-bottom: 15px;

    img {
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .cmsmasters_quote_title {
    color: #333;
    margin-bottom: 5px;
  }

  .cmsmasters_quote_subtitle {
    color: #666;
    margin-bottom: 15px;
  }

  .cmsmasters_quote_content {
    color: #555;
    line-height: 1.6;
  }
}
</style>
