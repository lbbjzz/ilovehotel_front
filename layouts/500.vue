<template>
  <div>
    <div>
      <img :src="imgLink.url"/>
    </div>
    <div>
      <p>OOPS，服务器出错了！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "error-500",
  data() {
    return {
      imgLink: {
        url: require('@/static/img/500.png')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 700px;
  height: 700px;
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
