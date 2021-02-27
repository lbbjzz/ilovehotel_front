import '@/styles/pages/user-info/user-info.scss'
import ihHeader from "@/pages/home/ihheader";

export default {
  components: {
    ihHeader
  },
  data() {
    return {
      editShow: false,
      uploadItem: false,
      userInfo: {
        id: '',
        //身份证
        idcard: '',
        phone: '',
        email: '',
        age: '',
        createTime: '',
        username: '',
        avatar: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
      }
    }
  },
  mounted() {
    // console.log(JSON.parse(localStorage.getItem('loginData')))
    if (localStorage.getItem('loginData')) {
      this.isLogin = true
      this.userInfo = JSON.parse(localStorage.getItem('loginData'))
    }
  },
  methods: {
    showEdit() {
      this.editShow = true
    },
    notShowEdit() {
      this.editShow = false
    },
    uploadAvatar() {
      this.uploadItem = true
    },
    avatarChange() {
      this.userInfo.avatar = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
    },
    showAvatar() {
      this.userInfo = JSON.parse(localStorage.getItem('loginData'))
    }
  }
}
