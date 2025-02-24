import { initModals } from './modules/modals/init-modals'
import { mobileVhFix } from './utils/mobile-vh-fix'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

mobileVhFix()
document.addEventListener(
  'DOMContentLoaded',
  () => {
    initModals()
    // AOS.init()
  },
  true
)


