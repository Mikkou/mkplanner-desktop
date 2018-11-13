import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import 'assets/styles/css/main.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({ components: { App },
  template: '<App/>'
}).$mount('#app')
