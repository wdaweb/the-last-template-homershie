import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { reinitButtonAnimations } from '@/utils/animations'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

// 路由切換後重新初始化動畫
router.afterEach(() => {
  reinitButtonAnimations()
})

export default router
