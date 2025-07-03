<template>
  <footer class="footer-section">
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24">
            <footer id="footer">
              <span class="footer_copyright copyright">
                @2024 All Rights Copyright Nexus. Design &amp; Developed By UIPARADOX
              </span>
            </footer>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </footer>
</template>

<script setup>
//
</script>

<style scoped lang="scss">
.footer-section {
  text-align: center;
  background: #1e1f20 !important;

  #footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }

  .footer_copyright {
    text-align: center;
    display: block;
    color: #fafafa;
  }
}
</style>
