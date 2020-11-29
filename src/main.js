import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import marked from 'marked'
import 'github-markdown-css/github-markdown.css'

Vue.config.productionTip = false

Vue.component('markdown-i18n', {
  props: ['id', 'options'],
  render (h) {
    const content = i18n.t(this.id, this.options)
    return h('div', {
      domProps: {
        innerHTML: marked(content)
      },
      attrs: {
        class: 'markdown-body'
      }
    })
  }
})

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
