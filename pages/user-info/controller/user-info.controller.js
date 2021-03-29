import '@/styles/pages/user-info/user-info.scss'
import ihHeader from "@/components/common/ihheader";
import upload from "@/components/upload/upload";
import uploadInfo from "@/components/upload/upload-info"
import percentage from "@/components/percentage/percentage";
import reset from "@/components/reset/reset";
import {userDetail, updateInfo} from "@/api/user-info/user-info";
import {getEmailCode, resetPwd, emailCodeVerify} from "@/api/reset-pwd/reset-pwd";

export default {
  components: {
    ihHeader,
    upload,
    uploadInfo,
    percentage,
    reset
  },
  data() {
    return {
      id: '',
      infoEditShow: true,
      accountEditShow: false,
      identifyEditShow: false,
      editFormIsShow: false,
      infoShow: true,
      infoShow1: true,
      editFormIsShow1: false,
      editFormIsShow2: false,
      editFormIsShow3: false,
      editFormIsShow4: false,
      editShow: false,
      dialogVisible: false,
      per: 0,
      sta: '',
      temp: '',
      pwdType: 'password',
      iconType: 'iconfont icon-browse',
      letName: '',
      resetEmailCode: '',
      editForm: {
        username: '',
      },
      imgLink: {
        url: require('@/static/img/edit.png')
      },
      userInfo: {
        id: '',
        //身份证
        idcard: '',
        phone: '',
        email: '',
        age: '',
        sex: '',
        birthday: '',
        username: '',
        createTime: '',
        avatar: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
      },
      resetPwd: {
        pwd: '',
        rePwd: '',
      },
      userInfoRules: {
        username: [
          {required: true, message: '请输入昵称', trigger: 'blur'},
        ],
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},
          {message: '请输入正确的邮箱', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/}
        ],
        phone: [
          {message: '请输入正确的手机号', pattern: /^1[3456789]\d{9}$/}
        ]
      },
      pwdRules: {
        pwd: [
          {min: 8, required: true, message: "请输入密码！", trigger: 'blur'},
        ],
        rePwd: [
          {min: 8, required: true, message: "请输入密码！", trigger: 'blur'},
        ]
      }
    }
  },
  created() {

  },
  mounted() {
    this.id = JSON.parse(localStorage.getItem('loginData')).id
    this.getUserDetail()
  },
  computed: {
    splitCreateTime() {
      let newCreateTime1 = this.userInfo.createTime.substr(0, 4)
      let newCreateTime2 = this.userInfo.createTime.substr(4, 2)
      let newCreateTime3 = this.userInfo.createTime.substr(6, 2)
      let newCreateTime = newCreateTime1 + '-' + newCreateTime2 + '-' + newCreateTime3
      return newCreateTime
    },
    splitBirthday() {
      if (this.userInfo.birthday === null) {
        return ''
      } else {
        let newBirthday1 = this.userInfo.birthday.substr(0, 4)
        let newBirthday2 = this.userInfo.birthday.substr(4, 2)
        let newBirthday3 = this.userInfo.birthday.substr(6, 2)
        let newBirthday = newBirthday1 + '-' + newBirthday2 + '-' + newBirthday3
        return newBirthday
      }
    },

  },
  methods: {
    setLocalStorage(loginData) {
      this.$store.commit('login', loginData)
    },
    getUserDetail() {
      userDetail(this.id).then(res => {
        this.userInfo = res.data.data
        this.temp = res.data.data.avatar
        this.setLocalStorage(res.data.data)
        this.per = 0
        for (let i in this.userInfo) {
          // console.log(i, 'percent')
          if (this.userInfo[i] !== undefined && this.userInfo[i] !== null && this.userInfo[i] !== '') {
            this.per += 10
          }
        }
        // console.log(res, 'userInfo')
      })
    },
    showPwd() {
      this.pwdType === 'password' ? this.pwdType = 'text' : this.pwdType = 'password';
      this.iconType === 'iconfont icon-browse' ? this.iconType = 'iconfont icon-Notvisible1' : this.iconType = 'iconfont icon-browse'
    },
    avatarChange() {
      this.userInfo.avatar = this.imgLink.url
    },
    showAvatar() {
      this.userInfo.avatar = this.temp
    },
    getMsg(val) {
      this.dialogVisible = val
    },
    getImgUrl(val) {
      this.userInfo.avatar = val.data
      this.temp = val.data
    },
    getUploadPer(val) {
      this.per = val
    },
    getIdCardDetail(val) {
      console.log(val, 'get')
      this.userInfo.idcard = val.idcard
      this.userInfo.sex = val.sex
      this.userInfo.birthday = val.birthday
    },
    getCancel(val) {
      this.editFormIsShow1 = val
      this.infoShow1 = !val
    },
    getCancel1(val) {
      this.editFormIsShow4 = val
      this.infoShow1 = !val
    },
    getNextStep(val) {
      this.editFormIsShow2 = val
    },
    getNextStep1(val) {
      this.editFormIsShow3 = val
    },
    toLogin() {
      this.$router.push({
        name: 'login-login'
      })
    },
    getEmailCodeM() {
      getEmailCode(this.userInfo.email, '', 1).then(res => {
        if (res.data.code === 80200) {
          this.$message({
            message: '邮件发送成功,有效时间三分钟',
            type: 'success'
          })
        } else {
          this.$message({
            message: '出错了 请稍后重试',
            type: 'error'
          })
        }
      })
    },
    changePwd() {
      this.$refs.passwordRef.validate(async val => {
        if (!val) return
        console.log(123123)
        if (this.resetPwd.pwd !== this.resetPwd.rePwd) {
          this.$message({
            type: 'error',
            message: '两次输入的密码不一致'
          })
        } else {
          resetPwd(this.userInfo.email, this.resetPwd.pwd).then(res => {
            if (res.data.code === 80200) {
              this.$message({
                type: 'success',
                message: '修改成功,请重新登录！'
              })
              localStorage.removeItem('loginData')
              setTimeout(this.toLogin, 2000)
            }
          })
        }
      })
    },

    //Todo: save notice: success or fail;
    userInfoSubmit() {
      this.$refs.userInfoRef.validate(async val => {
        if (!val) return
        updateInfo(this.userInfo).then(res => {
          if (res.data.code === 80200) {
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            this.letName = this.userInfo.username
            this.getUserDetail()
            this.editFormIsShow = false
            this.infoShow = true
          }
        })
      })
    },

    userInfoSubmitWithCode() {
      emailCodeVerify(this.resetEmailCode, this.userInfo.email).then(res => {
        if (res.data.code === 80200) {
          updateInfo(this.userInfo).then(res => {
            if (res.data.code === 80200) {
              this.$message({
                message: res.data.data.msg,
                type: 'success'
              })
              this.editFormIsShow2 = false
              this.infoShow1 = true
            } else if (res.data.code === 80400) {
              this.$message({
                message: res.data.msg,
                type: 'error'
              })
            } else {
              this.$message({
                message: res.data.msg,
                type: 'error'
              })
            }
          })
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        }
      })
    }
  }
}
