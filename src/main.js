import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('fallback-image', {
  bind: function (element) {
    element.addEventListener('error', function() {
      element.src = 'https://dummyimage.com/400x400/000/ffffff.png&text=no+image'
    })
  }
})

var app = new Vue({
  render: h => h(App)
}).$mount('#app')

