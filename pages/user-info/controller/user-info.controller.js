import '@/styles/pages/user-info/user-info.scss'
import ihHeader from "@/components/common/ihheader";
import upload from "@/components/upload/upload";

export default {
  components: {
    ihHeader,
    upload,
  },
  data() {
    return {
      infoEditShow: true,
      accountEditShow: false,
      identifyEditShow: false,
      editFormIsShow: false,
      infoShow: true,
      editShow: true,
      dialogVisible: false,
      editForm: {
        username: '',
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
      }
    }
  },
  created() {

  },
  mounted() {
    // console.log(JSON.parse(localStorage.getItem('loginData')))
    if (localStorage.getItem('loginData')) {
      this.isLogin = true
      this.userInfo = JSON.parse(localStorage.getItem('loginData'))
    }
  },
  methods: {
    avatarChange() {
      this.userInfo.avatar = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
    },
    showAvatar() {
      this.userInfo = JSON.parse(localStorage.getItem('loginData'))
    },
    getMsg(val) {
      this.dialogVisible = val
    }
  }
}
