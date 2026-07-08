import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ZZMHome from './ZZMHome.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ZZMHome', ZZMHome)
  }
}
