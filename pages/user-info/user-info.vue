<template>
  <div>
    <ih-header></ih-header>
    <div class="main-content">
      <div class="main-content-left">
        <div class="left-info">
          <i class="el-icon-user-solid"></i>
          个人资料
        </div>
        <div class="left-setting">
          <i class="el-icon-s-tools"></i>
          账号设置
        </div>
        <div class="left-check">
          <i class="el-icon-info"></i>
          信息认证
        </div>
      </div>
      <div class="main-content-right">
        <div class="right-info-header">
          <el-avatar icon="el-icon-user-solid" :size="60" :src="userInfo.avatar"></el-avatar>
          <div class="right-info-header-content">注册时间: {{ userInfo.createTime }}</div>
        </div>
        <div class="right-info-edit">
          <h3>基本信息</h3>
          <div class="right-info-edit-content" @mouseover="showEdit" @mouseleave="notShowEdit">
            <div class="edit-user edit" v-if="editShow">
              <i class="el-icon-edit"></i>
              编辑
            </div>
            <pre class="edit-user name">用户昵称：  {{ userInfo.username }}</pre>
            <pre class="edit-user id"  >用  户 ID：  {{ userInfo.id }}</pre>
            <pre class="edit-user age" >年       龄：  {{ userInfo.age }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import controller from '../user-info/controller/user-info.controller'

export default controller
</script>
