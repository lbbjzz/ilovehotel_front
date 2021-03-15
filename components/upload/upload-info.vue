<template>
  <el-upload
    class="avatar-uploader"
    action="http://8.135.35.123:9000/hotelsystem/ocr/aiCheck"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<script>
import controller from './controller/upload-info.controller'

export default controller
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 300px;
  height: 190px;
  border: 1px dashed #8c939d;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 300px;
  height: 190px;
  display: block;
}
</style>
