import '@/styles/pages/user-info/user-info.scss'
import ihHeader from "@/components/common/ihheader";
import upload from "@/components/upload/upload";
import uploadInfo from "@/components/upload/upload-info"
import percentage from "@/components/percentage/percentage";
import {userDetail, updateInfo} from "@/api/user-info/user-info";

export default {
  components: {
    ihHeader,
    upload,
    uploadInfo,
    percentage,
  },
  data() {
    return {
      id: '',
      infoEditShow: true,
      accountEditShow: false,
      identifyEditShow: false,
      editFormIsShow: false,
      infoShow: true,
      editFormIsShow1: false,
      editFormIsShow2: false,
      infoShow1: true,
      editShow: false,
      editShow1: false,
      dialogVisible: false,
      per: 0,
      sta: '',
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
      let newBirthday1 = this.userInfo.birthday.substr(0, 4)
      let newBirthday2 = this.userInfo.birthday.substr(4, 2)
      let newBirthday3 = this.userInfo.birthday.substr(6, 2)
      let newBirthday = newBirthday1 + '-' + newBirthday2 + '-' + newBirthday3
      return newBirthday
    },
  },
  methods: {
    getUserDetail() {
      userDetail(this.id).then(res => {
        this.userInfo = res.data.data
        // console.log(res, 'userInfo')
        for (let i in this.userInfo) {
          // console.log(i, 'percent')
          if (this.userInfo[i]) {
            this.per += 10
          }
        }
      })
    },
    avatarChange() {
      this.userInfo.avatar = this.imgLink.url
    },
    showAvatar() {
      this.userInfo = JSON.parse(localStorage.getItem('loginData'))
    },
    getMsg(val) {
      this.dialogVisible = val
    },
    getImgUrl(val) {
      this.userInfo.avatar = val.data
    },
    getIdCardDetail(val) {
      console.log(val, 'get')
      this.userInfo.idcard = val.idcard
      this.userInfo.sexText = val.sexText
      this.userInfo.birthday = val.birthday
      // this.userInfo.birthday =
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
