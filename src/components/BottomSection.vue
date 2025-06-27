<template>
  <div class="bottom-section">
    <el-container>
      <el-main>
        <el-row :gutter="40">
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
          <el-col :span="21">
            <div class="bottom-widget">
              <p class="description">
                Lorem ipsum dolor sit amet consectetur. Eget ornare ac eleifend leo mauris
                suspendisse. Bibendum suspendisse proin aliquet porttitor.
              </p>
            </div>
          </el-col>

          <!-- Information Links -->
          <el-col :xs="24" :sm="12" :md="6">
            <div class="bottom-widget">
              <h3 class="widget-title">Information</h3>
              <ul class="info-links">
                <li><el-link href="/services/" type="primary">Services</el-link></li>
                <li><el-link href="/portfolio/" type="primary">Portfolio</el-link></li>
                <li><el-link href="/shop/" type="primary">Shop</el-link></li>
                <li><el-link href="/contacts/" type="primary">Contacts</el-link></li>
              </ul>
            </div>
          </el-col>

          <!-- Contact Information -->
          <el-col :xs="24" :sm="12" :md="6">
            <div class="bottom-widget">
              <h3 class="widget-title">Contact Information</h3>
              <div class="contact-info">
                <div class="contact-item">
                  <el-icon class="contact-icon"><Location /></el-icon>
                  <span class="contact-text">New York, NY 10013</span>
                </div>
                <div class="contact-item">
                  <el-icon class="contact-icon"><Message /></el-icon>
                  <el-link href="mailto:example@example.com" type="primary"
                    >example@example.com</el-link
                  >
                </div>
                <div class="contact-item">
                  <el-icon class="contact-icon"><Phone /></el-icon>
                  <span class="contact-text">+1-800-123-4567</span>
                </div>
              </div>
            </div>
          </el-col>

          <!-- Newsletter and Search -->
          <el-col :xs="24" :sm="12" :md="6">
            <div class="bottom-widget">
              <h5 class="newsletter-title">Subscribe to Our NEWSLETTER</h5>
              <div class="search-section">
                <el-input
                  v-model="searchQuery"
                  placeholder="Search..."
                  class="search-input"
                  clearable
                >
                  <template #append>
                    <el-button type="primary" @click="handleSearch">
                      <el-icon><Search /></el-icon>
                    </el-button>
                  </template>
                </el-input>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Location, Message, Phone, Search } from '@element-plus/icons-vue'

const searchQuery = ref('')

const handleSearch = () => {
  console.log('Searching for:', searchQuery.value)
  // 這裡可以添加搜尋邏輯
}
</script>

<style scoped lang="scss">
.bottom-section {
  padding: 60px 0;

  .bottom-widget {
    margin-bottom: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logo-section {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      .logo {
        max-width: 200px;
        height: auto;
        display: block;
      }
    }

    .description {
      color: #666;
      line-height: 1.6;
      margin: 0;
      font-size: 16px;
      text-align: left;
    }

    .widget-title {
      color: white;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 30px;
        height: 2px;
        background: #409eff;
      }
    }

    .info-links {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 12px;

        .el-link {
          color: #b8c5d6;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: #409eff;
          }
        }
      }
    }

    .contact-info {
      .contact-item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        .contact-icon {
          margin-right: 10px;
          color: #409eff;
          font-size: 16px;
        }

        .contact-text {
          color: #b8c5d6;
        }

        .el-link {
          color: #b8c5d6;

          &:hover {
            color: #409eff;
          }
        }
      }
    }

    .newsletter-title {
      color: white;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .search-section {
      .search-input {
        .el-input__wrapper {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;

          &:hover {
            border-color: #409eff;
          }

          &.is-focus {
            border-color: #409eff;
            box-shadow: 0 0 0 1px #409eff;
          }
        }

        .el-input__inner {
          color: white;

          &::placeholder {
            color: #b8c5d6;
          }
        }

        .el-button {
          background: #409eff;
          border: none;

          &:hover {
            background: #66b1ff;
          }
        }
      }
    }
  }
}

// 響應式設計
@media (max-width: 768px) {
  .bottom-section {
    padding: 40px 0;

    .bottom-widget {
      text-align: center;

      .logo-section {
        .logo {
          margin: 0 auto;
        }
      }

      .description {
        text-align: center;
      }
    }
  }
}
</style>
