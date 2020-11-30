export default {
  methods: {
    changeLocale (localeId) {
      this.$i18n.locale = localeId
      document.documentElement.lang = localeId
      document.title = this.$t('app.title') + ' | ' + this.$t('app.vendor')
    }
  },
  computed: {
    language () {
      return this.$i18n.locale
    }
  }
}
