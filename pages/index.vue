<template>
  <div>
    <ih-header></ih-header>
    <home style="margin-top: 10px"></home>
    <!--    <ih-footer></ih-footer>-->
  </div>
</template>
<script>

import ihFooter from "@/components/common/ihfooter"
import ihHeader from "@/components/common/ihheader";
import home from "@/components/common/home";

export default {
  components: {ihHeader, ihFooter, home},
  data() {
    return {}
  },
}
</script>

<style scoped>
</style>
