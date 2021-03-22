<template>
  <div class="ih-footer">
    <p>Copyright © iLoveHotel Group All Rights Reserved</p>
  </div>

</template>

<script>
import controller from './controller/ihfooter.controller'

export default controller
</script>

<style lang="scss" scoped>
.ih-footer {
  height: 20px;
  position: fixed;
  bottom: 20px;

  p {
    text-align: center;
    font-weight: bold;
  }
}
</style>
