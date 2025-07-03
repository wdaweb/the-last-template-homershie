import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

// 按鈕動畫配置
const buttonAnimations = {
  // 按鈕進入動畫
  enter: (button) => {
    return gsap.fromTo(
      button,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'none',
      },
    )
  },

  // 按鈕懸停動畫
  hover: (button) => {
    const tl = gsap.timeline()

    tl.to(button, {
      scale: 1.05,
      duration: 0.1,
      ease: 'power2.out',
    })

    return tl
  },

  // 按鈕離開動畫
  leave: (button) => {
    return gsap.to(button, {
      scale: 1,
      duration: 0.1,
      ease: 'power2.out',
    })
  },

  // 按鈕點擊動畫
  click: (button) => {
    const tl = gsap.timeline()

    tl.to(button, {
      scale: 0.95,
      duration: 0.1,
    }).to(button, {
      scale: 1,
      duration: 0.1,
    })

    return tl
  },
}

// 初始化所有按鈕動畫
export const initButtonAnimations = () => {
  // 選擇所有 cus-btn
  const buttons = document.querySelectorAll('.cus-btn')

  buttons.forEach((button, index) => {
    // 進入動畫 - 使用 ScrollTrigger
    const enterAnimation = buttonAnimations.enter(button)

    ScrollTrigger.create({
      trigger: button,
      start: 'top 100%', // 當按鈕頂部進入視窗 100% 位置時觸發
      end: 'bottom 60%', // 當按鈕底部離開視窗 60% 位置時結束
      scrub: true,
      // markers: true,
      animation: enterAnimation,
      toggleActions: 'play none none reverse', // 進入時播放，離開時反向播放
      onEnter: () => {
        console.log(`Button ${index + 1} entered viewport`)
      },
    })

    // 懸停動畫
    button.addEventListener('mouseenter', () => {
      buttonAnimations.hover(button)
    })

    button.addEventListener('mouseleave', () => {
      buttonAnimations.leave(button)
    })

    // 點擊動畫
    button.addEventListener('click', (e) => {
      e.preventDefault()
      buttonAnimations.click(button)
    })
  })
}

// 清理動畫
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}

// 重新初始化動畫（用於路由切換時）
export const reinitButtonAnimations = () => {
  cleanupAnimations()
  setTimeout(() => {
    initButtonAnimations()
  }, 100)
}
