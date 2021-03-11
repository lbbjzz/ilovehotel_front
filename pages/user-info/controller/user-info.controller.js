import '@/styles/pages/user-info/user-info.scss'
import ihHeader from "@/components/common/ihheader";
import upload from "@/components/upload/upload";
import percentage from "@/components/percentage/percentage";
import {userDetail, updateInfo} from "@/api/user-info/user-info";

export default {
  components: {
    ihHeader,
    upload,
    percentage
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
      infoShow1: true,
      editShow: true,
      dialogVisible: false,
      per: 25,
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
        birthday: '',
        createTime: '',
        username: '',
        avatar: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
      },
      userInfoRules: {
        username: [
          {required: true, message: '请输入昵称', trigger: 'blur'},
        ],
      }
    }
  },
  created() {

  },
  mounted() {
    this.id = JSON.parse(localStorage.getItem('loginData')).id
    this.getUserDetail()
  },
  methods: {
    getUserDetail() {
      userDetail(this.id).then(res => {
        this.userInfo = res.data.data
        console.log(res, 'userInfo')
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
    userInfoSubmit() {
      this.$refs.userInfoRef.validate(async val => {
        if (!val) return
        updateInfo(this.userInfo).then(res => {
          console.log(res, '123')
          this.getUserDetail()
          if (res.data.code === 80200) {

          }
        })
      })
    },
  }
}
