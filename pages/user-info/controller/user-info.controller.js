import '@/styles/pages/user-info/user-info.scss'
import ihHeader from "@/components/common/ihheader";
import upload from "@/components/upload/upload";
import uploadInfo from "@/components/upload/upload-info"
import percentage from "@/components/percentage/percentage";
import reset from "@/components/reset/reset";
import {userDetail, updateInfo} from "@/api/user-info/user-info";
import {getEmailCode} from "@/api/reset-pwd/reset-pwd";

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
      pwd: '',
      rePwd: '',
      pwdType: 'password',
      iconType: 'iconfont icon-browse',
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
        sexText: '',
        birthday: '',
        username: '',
        createTime: '',
        avatar: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
      },
      userInfoRules: {
        username: [
          {required: true, message: '请输入昵称', trigger: 'blur'},
        ],
        email: [
          {required: true, message: '请输入昵称', trigger: 'blur'}
        ]
      },
      pwdRules: {
        pwd: [
          {
            min: 8,
            required: true,
            message: "请输入密码！",
            trigger: 'blur'
          },
        ],
        rePwd: [
          {
            min: 8,
            required: true,
            message: "请输入密码！",
            trigger: 'blur'
          },
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
        // console.log(res, 'userInfo')
        for (let i in this.userInfo) {
          // console.log(i, 'percent')
          if (this.userInfo[i]) {
            this.per += 10
          }
        }
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
      // setTimeout(this.getUserDetail, 2000)
    },
    getIdCardDetail(val) {
      console.log(val, 'get')
      this.userInfo.idcard = val.idcard
      this.userInfo.sexText = val.sexText
      this.userInfo.birthday = val.birthday
    },
    getEmailCodeM() {
      this.$refs.firstEmailRef.validate(async val => {
        if (!val) return
        getEmailCode()
      })
    },
    changePwd() {
      this.$refs.pwdRef.validate(async val => {
        if (!val) return
      })
    },
    getCancel(val) {
      this.editFormIsShow1 = val
      this.infoShow1 = !val
    },
    userInfoSubmit() {
      this.$refs.userInfoRef.validate(async val => {
        if (!val) return
        updateInfo(this.userInfo).then(res => {
          console.log(res, '123')
          if (res.data.code === 80200) {
            this.getUserDetail()
            this.editFormIsShow = false
            this.infoShow = true
          }
        })
      })
    },

  }
}
