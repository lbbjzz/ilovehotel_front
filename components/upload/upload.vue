<template>
  <el-dialog
    title="上传图片"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <el-upload
      class="upload-demo"
      drag
      action="http://8.135.35.123:9000/hotelsystem/user/uploadImg"
      :on-success="handleUploadSuccess"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <span slot="footer" class="dialog-footer">
        <el-button @click="sendMsgCancel">取 消</el-button>
        <el-button type="primary" @click="sendMsg">确 定</el-button>
      </span>
  </el-dialog>
</template>

<script>
import controller from "../upload/controller/upload.controller";

export default controller
</script>

