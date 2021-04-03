<template>
  <div v-html="aliPay" id="alipay">{{ aliPay }}</div>
</template>

<script>
export default {
  name: "aliPay",
  data() {
    return {
      aliPay: '',
    }
  },

  mounted() {
    let form = this.$route.query.htmlData
    this.aliPay = form
    this.$nextTick(() => {
      document.forms [0].submit()
    })
  }
}
</script>

<style scoped>

</style>
