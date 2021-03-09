<template>
  <div>
    <div>
      <img :src="imgLink.url">
    </div>
    <div>
      <p>抱歉，您访问的页面不存在！</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "error-404",
  data() {
    return {
      imgLink: {
        url: require('@/static/img/404.png')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  margin-top: 2%;
  margin-left: 50%;
  transform: translateX(-50%);
}

p {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin-left: 50%;
  color: #99a9bf;
  transform: translateX(-50%);
}
</style>
