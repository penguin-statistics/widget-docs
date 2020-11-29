<template>
  <div id="app">
    <div class="container">
      <img alt="Logo" src="./assets/logo.png" class="logo">
      <h1 class="title">
        {{ $t('app.vendor') }}
        <small>{{ $t('app.name') }}</small>
      </h1>

      <LocaleSwitcher />

      <div class="docs">
        <markdown-i18n id="docs" />
      </div>

      <div class="footer">
        <div style="font-size: 2rem; font-weight: bold; margin-left: 16px; opacity: .2; user-select: none">
          :D
        </div>
        <div style="flex-grow: 1">&nbsp;</div>

        <div style="margin-right: 4px; display: flex; flex-direction: column; padding: 8px 0">
          <div>
            {{ $t('app.vendor') }}
          </div>
          <small style="margin-top: 4px; font-weight: bold">
            CC BY-NC 4.0 // {{ year }}
          </small>
        </div>

        <img alt="Logo" src="./assets/logo.png" class="logo-small">
      </div>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from '@/components/settings/LocaleSwitcher'

export default {
  name: 'App',
  components: {
    LocaleSwitcher
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
html, body {
  background: #f5f5f5;
}
.markdown-body pre {
  background: #ddd !important;
}
.markdown-body ol ol, .markdown-body ol ul, .markdown-body ul ol, .markdown-body ul ul {
  margin-bottom: 16px !important;
}
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}

@media (min-width: 960px) {
  .container {
    max-width: 900px;
  }
}

.container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}

.logo {
  width: 80px;
  height: 80px;
}

.logo-small {
  width: 40px;
  height: 40px;
}

h1.title {
  margin: 1rem 0;
}

.docs {
  margin: 24px 0
}
.footer {
  margin: 64px 0;
  padding: 8px;
  background: rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  border-radius: 8px;
}
</style>
