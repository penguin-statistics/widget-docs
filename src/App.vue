<template>
  <section id="app" class="section mx-5">
    <div class="container">
<!--      <img alt="Logo" src="./assets/logo.png" class="logo">-->
<!--      <h1 class="title">-->
<!--        {{ $t('app.vendor') }}-->
<!--        <small>{{ $t('app.name') }}</small>-->
<!--      </h1>-->

      <LocaleSwitcher />

      <section class="hero is-dark is-bold rounded">
        <div class="hero-body">
          <div class="container">
            <img alt="Logo" src="./assets/logo.png" class="logo">

            <h1 class="title">
              {{ $t('app.name') }}
            </h1>
            <h2 class="subtitle">
              {{ $t('app.vendor') }}
            </h2>
          </div>
        </div>
      </section>

      <div class="docs">
        <markdown-i18n id="docs.before" />
        <QuickStart />
        <markdown-i18n id="docs.after" />
      </div>

      <footer>
        <div class="customized-footer">
          <a href="https://github.com/penguin-statistics/widget-docs" target="_blank" class="float-link">
            /widget-docs
          </a>
          <div style="flex-grow: 1">&nbsp;</div>

          <div style="margin-right: 8px; display: flex; flex-direction: column; padding: 8px 0">
            <div>
              {{ $t('app.vendor') }}
            </div>
            <small style="margin-top: 4px; font-weight: bold">
              CC BY-NC 4.0 // {{ year }}
            </small>
          </div>

          <img alt="Logo" src="./assets/logo.png" class="logo-small">
        </div>

        <div class="build is-size-7">
          build {{version.build}} <span style="width: 1rem; display: inline-block">&nbsp;</span> last update {{version.time}}
        </div>
      </footer>
    </div>
  </section>
</template>

<script>
import LocaleSwitcher from '@/components/settings/LocaleSwitcher'
import QuickStart from '@/components/QuickStart'

export default {
  name: 'App',
  components: {
    QuickStart,
    LocaleSwitcher
  },
  created () {
    document.title = this.$t('app.title') + ' | ' + this.$t('app.vendor')
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    version () {
      return {
        build: GIT_COMMIT,
        time: new Date(parseInt(BUILD_TIME) * 1000).toLocaleString()
      }
    }
  }
}
</script>

<style lang="scss">
html, body {
  background: #f5f5f5 !important;
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 48px 0 64px 0
}

.logo {
  width: 80px;
  height: 80px;
}

.logo-small {
  width: 40px;
  height: 40px;
  margin-right: 1rem;
}

h1.title {
  margin: 1rem 0;
}

.docs {
  margin: 24px 0
}

.customized-footer {
  margin: 64px 0 16px;
  padding: 8px;
  background: linear-gradient(219deg, #dfd8d9 0%, whitesmoke 71%, rgba(0, 0, 0, .1) 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  border-radius: 4px;
  position: relative;
}
.float-link {
  color: black;
  position: absolute;
  left: 1rem;

  font-size: 2rem;
  font-weight: bold;
  margin-left: 16px;
  opacity: .1;
  overflow: hidden;
}
.float-link:hover {
  text-decoration: underline;
}
.build {
  text-align: center;
  opacity: .6;
}
</style>
