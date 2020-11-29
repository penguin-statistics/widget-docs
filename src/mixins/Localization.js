export default {
  methods: {
    changeLocale (localeId) {
      this.$i18n.locale = localeId
      document.documentElement.lang = localeId
    }
  },
  computed: {
    language() {
      return this.$i18n.locale
    }
  }
}
