import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入组件注册全局组件
import jishu from "./components/jishu.vue"
Vue.component('jishu',jishu)
new Vue({
  render: h => h(App),
}).$mount('#app')
