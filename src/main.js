// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.js'

// import './assets/iconfont/iconfont.css'
//打印
import Print from 'vue-print-nb'
Vue.use(Print);

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',  //生成实例的容器
  components: { App },
  //template: ' <div> Hello Vue! </div>'  //html
  template: '<App />'
})
