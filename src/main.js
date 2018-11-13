import Vue from 'vue'
import App from './App'
import login from './utils/login'

Vue.config.productionTip = false
App.mpType = 'app'

if (!wx.cloud) {
  console.error('请使用2.2.3或以上的基础库')
} else {
  wx.cloud.init({
    traceUser: true,
    env: 'test-64b71b'
  })
}

login.getUserWeChatInfo()

const app = new Vue(App)
app.$mount()
