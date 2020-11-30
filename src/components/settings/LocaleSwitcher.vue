<template>
  <div class="locale-switcher mb-4">
    <span class="settings-header">
      {{ $t('settings.language') }}
    </span>
    <span
      v-for="locale in localizations"
      :key="locale.value"
      class="settings-option"
      :class="{'settings-option--active': locale.value === activeLocale}"
      @click="activeLocale = locale.value"
    >
      {{ locale.text }}
    </span>
    <span style="font-size: 2rem; font-weight: bold; margin-right: 16px; opacity: .1; user-select: none; overflow: hidden; position: absolute; right: 4px">
      i18n
    </span>
  </div>
</template>

<script>
import Localization from '@/mixins/Localization'
import { mdiTranslate } from '@mdi/js'

export default {
  name: 'LocaleSwitcher',
  mixins: [Localization],
  data () {
    return {
      localizations: [
        {
          value: 'zh',
          text: '简体中文'
        },
        {
          value: 'en',
          text: 'English'
        }
      ],
      mdiTranslate
    }
  },
  computed: {
    activeLocale: {
      get () {
        return this.$i18n.locale
      },
      set (localeId) {
        this.changeLocale(localeId)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.locale-switcher {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  border-radius: 4px;
  padding: 12px 16px;
  background: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, rgba(0, 0, 0, .1) 100%);
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);
}

.settings-option {
  transition: all .225s;
  transition-delay: 0s;

  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  border: 2px solid transparent;

  &:hover {
    background: rgba(18, 18, 18, .18);
  }
  &:active {
    background: rgba(18, 18, 18, .4);
  }
  &:not(.settings-option--active) {
    &:hover {
      box-shadow: 0 0 2px rgba(0, 0, 0, .8), 0 0 8px rgba(0, 0, 0, .4);
    }
    &:active {
      box-shadow: 0 0 2px rgba(0, 0, 0, .35);
    }
  }
}
.settings-option + .settings-option {
  margin-left: 4px;
}
.settings-option--active {
  border-color: #2196F3 !important;
  font-weight: bold;
}
.settings-header {
  margin-right: 8px;
  padding-right: 12px;
  border-right: 1px solid rgba(0, 0, 0, .4);
  font-weight: bold;
  font-size: 1.15rem;
}
</style>
