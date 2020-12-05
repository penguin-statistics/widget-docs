import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import marked from 'marked'
import './style.scss'

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
  },
  mounted: processLinks,
  updated: processLinks
})

function processLinks () {
  [...this.$el.querySelectorAll('a')].forEach(a => {
    // avoid interferring with form input tab focus
    a.setAttribute('tabindex', '-1')
    const href = a.getAttribute('href')
    if (href && href.charAt(0) !== '#') {
      // make external links open in new tab
      a.setAttribute('target', '_blank')
    }
  })
}

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
