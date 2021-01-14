<template>
   <header-vue></header-vue>

<!--    <home></home>-->
<!--    <footerVue></footerVue>-->
</template>
<script>

import footerVue from "@/pages/home/footerVue"
import headerVue from "@/pages/home/headerVue";
import home from "@/pages/home/home";

export default {
  components: {headerVue ,footerVue ,home},
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>
