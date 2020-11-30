<template>
  <label>
    <span class="is-sr-only" v-text="$t(namespace + '._name')" />
    <select v-model="input">
      <option selected :disabled="!nullable" :value="null" v-text="$t(namespace + '._null')" />
      <option v-for="option in options" :key="option" :value="option" v-text="$t(namespace + '.' + option)" />
    </select>
  </label>
</template>

<script>
export default {
  name: 'NSSelect',
  props: {
    namespace: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    nullable: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    input: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
