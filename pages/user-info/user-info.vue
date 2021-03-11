<template>
  <div class="user-info">
    <ih-header style="position: fixed; top: 0;z-index: 1"></ih-header>
    <div class="main-content">
      <div class="main-content-left">
        <div class="inner">
          <div class="left-info" @click="infoEditShow = true;accountEditShow = false;identifyEditShow = false">
            <i class="el-icon-user-solid"></i>
            个人资料
          </div>
          <div class="left-setting" @click="accountEditShow = true;infoEditShow = false; identifyEditShow = false">
            <i class="el-icon-s-tools"></i>
            账号设置
          </div>
          <div class="left-check" @click="identifyEditShow = true;infoEditShow = false; accountEditShow = false">
            <i class="el-icon-info"></i>
            信息认证
          </div>
        </div>
      </div>
      <div class="main-content-right">
        <div class="right-info-header">
          <el-avatar icon="el-icon-user-solid" :size="60" :src="userInfo.avatar"
                     @click.native="dialogVisible = true"
                     @mouseover.native="avatarChange"
                     @mouseleave.native="showAvatar"></el-avatar>
          <div class="right-info-header-content">注册时间: {{ userInfo.createTime }}</div>
        </div>
        <div class="right-info-edit" id="info" v-if="infoEditShow">
          <h3>个人资料</h3>
          <div class="right-info-edit-content" @mouseover="editShow = true" @mouseleave="editShow = false"
               v-if="infoShow">
            <div class="edit-user edit" v-if="editShow">
              <i class="el-icon-edit" @click="editFormIsShow = true; infoShow = false">编辑</i>
            </div>
            <pre class="edit-user name">用户昵称：  {{ userInfo.username }}</pre>
            <pre class="edit-user id">用  户 ID：  {{ userInfo.id }}</pre>
            <pre class="edit-user sex">性       别：  {{ userInfo.sex }}</pre>
            <pre class="edit-user age">年       龄：  {{ userInfo.age }}</pre>
            <pre class="edit-user birthday">生       日：  {{ userInfo.birthday }}</pre>
          </div>
          <el-form v-if="editFormIsShow" :model="userInfo">
            <el-form-item label="用户昵称：" label-width="100px">
              <el-input v-model="userInfo.username" size="medium" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="用户ID：" label-width="100px">
              <el-input v-model="userInfo.id" size="medium" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="用户ID：" label-width="100px">
              <el-input v-model="userInfo.id" size="medium" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="infoShow = true;editFormIsShow = false">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="right-account-edit" v-if="accountEditShow">
          <h3>账号设置</h3>
          <div class="right-account-edit-content" @mouseover="editShow = true" @mouseleave="editShow = false"
               v-if="infoShow">
            <div class="edit-account edit" v-if="editShow">
              <i class="el-icon-edit" @click="editFormIsShow = true; infoShow = false">编辑</i>
            </div>
            <pre class="edit-account phone">手机号：  {{ userInfo.phone }}</pre>
            <pre class="edit-account email">邮   箱：  {{ userInfo.email }}</pre>
          </div>
        </div>
        <div class="right-identify-edit" v-if="identifyEditShow">
          <h3>信息认证</h3>
        </div>
      </div>
    </div>
    <upload :dialog-is-show="dialogVisible" @sendMsg="getMsg" :img="userInfo.avatar" @uploadSuccess="getImgUrl"
            :ids="userInfo.id"></upload>
  </div>

</template>

<script>
import controller from '../user-info/controller/user-info.controller'

export default controller
</script>
