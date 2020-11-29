import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from './locales/index'

Vue.use(VueI18n)

// function loadLocaleMessages () {
//   // const messages = {}
//   // console.log(locales)
//   // Object.keys(locales).forEach(key => {
//   //   const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//   //   if (matched && matched.length > 1) {
//   //     const locale = matched[1]
//   //     messages[locale] = locales(key)
//   //   }
//   // })
//   // return messages
//   return locales
// }

console.log(locales)

export default new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: locales
})
