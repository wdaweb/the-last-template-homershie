<template>
  <div class="bottom-section">
    <el-container>
      <el-main>
        <el-row :gutter="40" class="title-row">
          <!-- Logo -->
          <el-col :span="3">
            <div class="bottom-widget">
              <div class="logo-section">
                <img
                  src="https://nexus.uiparadox.co.uk/wp-content/uploads/2025/04/logo.png"
                  alt="Logo"
                  class="logo"
                />
              </div>
            </div>
          </el-col>
          <!-- Description -->
          <el-col :span="20">
            <div class="bottom-widget">
              <p class="description">
                Lorem ipsum dolor sit amet consectetur. Eget ornare ac eleifend leo mauris
                suspendisse. Bibendum suspendisse proin aliquet porttitor.
              </p>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="40" class="content-row">
          <!-- Information Links -->
          <el-col :xs="24" :sm="8" :md="5">
            <div class="bottom-widget">
              <h5 class="widget-title">Information</h5>
              <ul>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
            </div>
          </el-col>

          <!-- Contact Information -->
          <el-col :xs="24" :sm="8" :md="5">
            <div class="bottom-widget">
              <h5 class="widget-title">Contact Information</h5>
              <div class="contact-info">
                <div class="contact-item">
                  <el-icon class="contact-icon" :size="18"><Location /></el-icon>
                  <span class="contact-text">New York, NY 10013</span>
                </div>
                <div class="contact-item">
                  <el-icon class="contact-icon" :size="18"><Message /></el-icon>
                  <a class="email" href="#">example@example.com</a>
                </div>
                <div class="contact-item">
                  <el-icon class="contact-icon" :size="18"><Phone /></el-icon>
                  <span class="contact-text">+1-800-123-4567</span>
                </div>
              </div>
            </div>
          </el-col>

          <!-- Newsletter and Search -->
          <el-col :xs="24" :sm="8" :md="5">
            <div class="bottom-widget">
              <h5 class="newsletter-title">Subscribe to Our NEWSLETTER</h5>
            </div>
          </el-col>

          <el-col :xs="24" :sm="24" :md="8">
            <div class="search-section">
              <input
                class="wp-block-search__input"
                id="wp-block-search__input-1"
                type="search"
                name="s"
                required=""
              /><button
                aria-label="Search"
                class="wp-block-search__button wp-element-button"
                type="submit"
              >
                Search
              </button>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { Location, Message, Phone } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
a {
  transition: all 0.3s ease;
  font-weight: 500;
  font-family: 'Jost', Arial, Helvetica, 'Nimbus Sans L', sans-serif;
}

// 重置所有 ul li 的預設樣式
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-indent: 0;
  li {
    &:before {
      content: '';
      display: none;
    }
  }
}

.bottom-section {
  padding: 60px 0;
  background: #1e1f20 !important;
}

.title-row {
  padding: 0 0 clamp(16px, 2.083vw, 96px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  gap: 20px;
  .logo-section img {
    width: 145px;
    height: auto;
  }
  .description {
    color: #92949f;
  }
}

.content-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;

  .contact-icon {
    color: #fafafa;
  }

  .contact-text {
    color: #fafafa;
  }
}

.search-section {
  display: flex;
  align-items: center;
  gap: 10px;
  .wp-block-search__input {
    width: 100%;
    height: 40px;
  }
  .wp-block-search__button {
    padding: 15px 32px;
    transition: all 0.3s ease;
  }
}
</style>
