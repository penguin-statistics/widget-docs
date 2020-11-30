<template>
  <div class="card my-5">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img alt="Logo" src="@/assets/logo.png" class="logo">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4" v-text="$t('generator.heading.title')" />
          <i18n tag="p" path="generator.heading.subtitle" class="subtitle is-6">
            <code>&lt;iframe&gt;</code>
          </i18n>
        </div>
      </div>

      <div class="content">
        <div class="select">
          <NSSelect v-model="server" namespace="generator.server" :options="['CN', 'US', 'JP', 'KR']" />
        </div>

        <div class="select ml-1">
          <NSSelect v-model="category" namespace="generator.category" :options="['stage', 'item', 'exact']" />
        </div>

        <label v-if="visibility.stageId">
          <span class="is-sr-only" v-text="$t('generator.stageId._name')" />
          <input class="input ml-1 detail-input is-family-monospace" type="text" :placeholder="$t('generator.stageId.hint')" v-model="stageId">
        </label>

        <label v-if="visibility.itemId">
          <span class="is-sr-only" v-text="$t('generator.itemId._name')" />
          <input class="input ml-1 detail-input is-family-monospace" type="text" :placeholder="$t('generator.itemId.hint')" v-model="itemId">
        </label>

        <button v-if="valid" class="button is-primary ml-1"
                :class="{'is-success': copyStatus, 'is-danger': copyStatus === false}"
                @click="copy"
        >
          {{ $t('generator.copy.' + copyStatus) }}
        </button>

        <label v-if="valid">
          <span class="is-sr-only" v-text="$t('generator.result')" />
          <textarea readonly class="textarea is-rounded mt-2 is-family-monospace is-size-7"
                    :value="code" rows="5"
                    onmouseenter="this.select()"
                    onmouseleave="window.getSelection().removeAllRanges()"
          />
        </label>

        <div class="mt-2">
          <span class="is-size-7 mr-1" style="line-height: 2.5em" v-text="$t('generator.customize')" />
          <div class="select is-small">
            <NSSelect v-model="customize.lang" namespace="generator.lang" nullable :options="['zh', 'en', 'ja', 'ko']" />
          </div>

          <div class="select is-small ml-1">
            <NSSelect v-model="customize.theme" namespace="generator.theme" nullable :options="['light', 'dark']" />
          </div>

          <div class="select is-small ml-1">
            <NSSelect v-model="customize.dnt" namespace="generator.dnt" nullable :options="['1']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as clipboard from 'clipboard-polyfill'
import NSSelect from '@/components/NSSelect'
export default {
  name: 'QuickStart',
  components: { NSSelect },
  data () {
    return {
      category: null,
      server: null,
      stageId: '',
      itemId: '',
      copyStatus: null,
      timer: null,
      customize: {
        lang: null,
        theme: null,
        dnt: null
      }
    }
  },
  watch: {
    category () {
      this.stageId = ''
      this.itemId = ''
    }
  },
  computed: {
    visibility () {
      return {
        stageId: this.category === 'stage' || this.category === 'exact',
        itemId: this.category === 'item' || this.category === 'exact'
      }
    },
    code () {
      const queries = []
      if (this.stageId !== '') queries.push(this.stageId)
      if (this.itemId !== '') queries.push(this.itemId)

      let url = `https://widget.penguin-stats.io/result/${this.server}/${this.category}/${queries.join('/')}`

      const params = []
      if (this.customize.lang) params.push('lang=' + this.customize.lang)
      if (this.customize.theme) params.push('theme=' + this.customize.theme)
      if (this.customize.dnt) params.push('dnt=' + this.customize.dnt)

      if (params.length > 0) url += '?' + params.join('&')

      // rather to use document.createElement().outerHTML, we use a template string in order to
      // deliver proper formatting that the users could understand right at the first glance
      return `<iframe src="${url}"
    title="Penguin Statistics Widget"
    frameborder="0" loading="lazy" height="600" width="1000"
    style="border:2px solid #ccc;border-radius:8px;box-shadow: 0 0 10px rgba(0,0,0,.18);margin:8px"
></iframe>`
    },
    valid () {
      if (this.category === null || this.server === null) return false

      const validStageId = this.stageId !== ''
      const validItemId = this.itemId !== ''
      if (this.category === 'stage') return validStageId
      if (this.category === 'item') return validItemId
      if (this.category === 'exact') return validStageId && validItemId

      return false
    }
  },
  methods: {
    copy () {
      const self = this

      clipboard.writeText(this.code)
        .then(function () {
          self.copyStatus = true
        })
        .catch(function () {
          self.copyStatus = false
        })
        .finally(function () {
          if (self.timer) clearTimeout(self.timer)

          self.timer = setTimeout(function () {
            self.copyStatus = null
          }, 2000)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.detail-input {
  max-width: 200px;
}
</style>
