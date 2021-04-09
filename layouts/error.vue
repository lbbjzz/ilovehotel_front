<template>
  <div>
    <div v-if="error.statusCode === 404">
      <page404></page404>
    </div>
    <div v-if="error.statusCode === 502 || error.statusCode === 500">
      <page500></page500>
    </div>
    <NuxtLink to="/" style="text-decoration: none;">
      <p>返回首页</p>
    </NuxtLink>
  </div>
</template>

<script>
import page404 from '@/layouts/404'
import page500 from '@/layouts/500'

export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
  components: {
    page404,
    page500
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-top: 50px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  font-size: 28px;
  font-weight: bold;
  color: #99a9bf;
  background-color: #ECF2FE;
  text-align: center;
  margin-left: 50%;
  transform: translateX(-50%);
}

</style>
