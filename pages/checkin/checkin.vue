<template>
  <div>
    <UploadInfo @sendUserInfo="getOCRInfo"/>
    <el-form v-model="checkinInfo">
      <el-form-item>
        <el-input v-model="checkinInfo.name" label="姓名："></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="checkinInfo.idcard" label="身份证号："></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="check">入住</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import controller from './controller/checkin.controller'

export default controller
</script>
