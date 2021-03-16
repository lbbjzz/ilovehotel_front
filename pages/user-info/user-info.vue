<template>
  <div class="user-info">
    <ih-header style="position: fixed; top: 0;z-index: 1"></ih-header>
    <div class="main-content">
      <!--      <div class="main-content-left">-->
      <!--        <div class="inner">-->
      <!--          <div class="left-info" @click="infoEditShow = true;accountEditShow = false;identifyEditShow = false">-->
      <!--            <i class="el-icon-user-solid"></i>-->
      <!--            个人中心-->
      <!--          </div>-->
      <!--          &lt;!&ndash;          <div class="left-setting" @click="accountEditShow = true;infoEditShow = false; identifyEditShow = false">&ndash;&gt;-->
      <!--          &lt;!&ndash;            <i class="el-icon-s-tools"></i>&ndash;&gt;-->
      <!--          &lt;!&ndash;            账号设置&ndash;&gt;-->
      <!--          &lt;!&ndash;          </div>&ndash;&gt;-->
      <!--          &lt;!&ndash;          <div class="left-check" @click="identifyEditShow = true;infoEditShow = false; accountEditShow = false">&ndash;&gt;-->
      <!--          &lt;!&ndash;            <i class="el-icon-info"></i>&ndash;&gt;-->
      <!--          &lt;!&ndash;            信息认证&ndash;&gt;-->
      <!--          &lt;!&ndash;          </div>&ndash;&gt;-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="main-content-right">
        <div class="right-info-header">
          <el-avatar icon="el-icon-user-solid" :size="60" :src="userInfo.avatar"
                     @click.native="dialogVisible = true"
                     @mouseover.native="avatarChange"
                     @mouseleave.native="showAvatar"></el-avatar>
          <div class="right-info-header-content">
            <div class="register-time">
              <p style="font-size: 18px;font-family: 微软雅黑;">注册时间: {{ userInfo.createTime }}</p>
            </div>
            <div class="percent">
              <percentage :per="per"></percentage>
              <p style="font-weight: bold;font-size: 13px;color: gray;margin-right: 23px">资料完成度</p>
            </div>
          </div>
        </div>
        <div class="right-account-edit">
          <div style="display: flex;justify-content: space-between">
            <h3>账号设置</h3>
          </div>
          <div class="right-account-edit-content" @mouseover="editShow1 = true" @mouseleave="editShow1 = false"
               v-if="infoShow1">
            <pre class="edit-account email">邮   箱：  {{ userInfo.email }}</pre>
            <div class="edit-account edit" v-if="editShow1">
              <i class="el-icon-edit" @click="editFormIsShow1 = true; infoShow1 = false">编辑</i>
            </div>
          </div>
          <el-form class="edit-form" v-if="editFormIsShow1" :model="userInfo" :rules="userInfoRules" ref="userInfoRef">
            <el-form-item label="邮箱：" label-width="100px" prop="email">
              <el-input type="email" v-model="userInfo.email" size="medium" style="width: 300px" disabled></el-input>
            </el-form-item>
            <el-form-item label="验证码" label-width="100px">
              <el-input type="text" size="medium" style="width: 180px"></el-input>
              <el-button type="primary" style="width: 110px;margin-left: 10px">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
              <el-button @click="infoShow1 = true;editFormIsShow1 = false"
                         style="margin-left: 10%;margin-top: 3%;width: 80px">取消
              </el-button>
              <el-button @click="userInfoSubmit"
                         style="margin-left: 5%;margin-top: 3%;width: 80px"
                         type="primary">下一步
              </el-button>
            </el-form-item>
          </el-form>
          <el-form class="edit-form" v-if="editFormIsShow2" :model="userInfo" :rules="userInfoRules" ref="userInfoRef">
            <el-form-item label="邮箱：" label-width="100px" prop="email">
              <el-input type="email" v-model="userInfo.email" size="medium" style="width: 300px" disabled></el-input>
            </el-form-item>
            <el-form-item label="验证码" label-width="100px">
              <el-input type="text" size="medium" style="width: 180px"></el-input>
              <el-button type="primary" style="width: 110px;margin-left: 10px">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
              <el-button @click="infoShow1 = true;editFormIsShow1 = false"
                         style="margin-left: 10%;margin-top: 3%;width: 80px">取消
              </el-button>
              <el-button @click="userInfoSubmit"
                         style="margin-left: 5%;margin-top: 3%;width: 80px"
                         type="primary">下一步
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="right-info-edit">
          <h3>个人资料</h3>
          <div class="right-info-edit-content" @mouseover="editShow = true" @mouseleave="editShow = false"
               v-if="infoShow">
            <div class="edit-user edit" v-if="editShow">
              <i class="el-icon-edit" @click="editFormIsShow = true; infoShow = false">编辑</i>
            </div>
            <pre class="edit-user name">用户昵称：  {{ userInfo.username }}</pre>
            <pre class="edit-user id">用  户 ID：  {{ userInfo.id }}</pre>
            <pre class="edit-user phone">手  机  号：  {{ userInfo.phone }}</pre>
            <div class="edit-user sex">性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别：
              <i class="el-icon-male" v-if="userInfo.sexText === '男'"></i>
              <i class="el-icon-female" v-if="userInfo.sexText === '女'"></i>
            </div>
            <pre class="edit-user age">年       龄：  {{ userInfo.age }}</pre>
            <pre class="edit-user birthday">生       日：  {{ userInfo.birthday }}</pre>
            <pre class="edit-user birthday">身份证号：  {{ userInfo.idcard }}</pre>
          </div>
          <el-form class="edit-form" v-if="editFormIsShow" :model="userInfo" :rules="userInfoRules" ref="userInfoRef">
            <el-form-item class="upload-info">
              <upload-info @sendUserInfo="getIdCardDetail"></upload-info>
              <p style="text-align: center;margin-top:10px;font-size: 13px;color: #99a9bf">上传身份证,完善用户信息</p>
            </el-form-item>
            <el-form-item label="用户昵称：" label-width="100px" prop="username">
              <el-input v-model="userInfo.username" size="medium" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="用户ID：" label-width="100px" prop="id">
              <el-input v-model="userInfo.id" size="medium" style="width: 300px" disabled></el-input>
            </el-form-item>
            <el-form-item label="手机号：" label-width="100px" prop="phone">
              <el-input v-model="userInfo.phone" size="medium" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="身份证号：" label-width="100px" prop="idcard">
              <el-input v-model="userInfo.idcard" size="medium" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="性别：" label-width="100px" prop="sexText">
              <el-radio v-model="userInfo.sexText" label="男" @change="userInfo.sexText === '男'">
                <i class="el-icon-male"></i>
              </el-radio>
              <el-radio v-model="userInfo.sexText" label="女" @change="userInfo.sexText === '女'">
                <i class="el-icon-female"></i>
              </el-radio>
            </el-form-item>
            <el-form-item label="生日：" label-width="100px" prop="birthday">
              <el-date-picker
                value-format="yyyyMMdd"
                v-model="userInfo.birthday"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button @click="infoShow = true;editFormIsShow = false"
                         style="margin-left: 10%;margin-top: 3%;width: 80px">取消
              </el-button>
              <el-button @click="userInfoSubmit"
                         style="margin-left: 5%;margin-top: 3%;width: 80px"
                         type="primary">提交
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <upload :dialog-is-show="dialogVisible" @sendMsg="getMsg" @uploadSuccess="getImgUrl"
            :ids="userInfo.id"></upload>
  </div>

</template>

<script>
import controller from '../user-info/controller/user-info.controller'

export default controller
</script>
