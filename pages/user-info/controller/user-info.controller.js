import '@/styles/pages/user-info/user-info.scss'
import ihHeader from "@/components/common/ihheader";
import upload from "@/components/upload/upload";
import {userDetail} from "@/api/user-info/user-info";

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
      }
    }
  },
  created() {
    this.getUserDetail()
  },
  methods: {
    getUserDetail() {
      userDetail(this.$route.query.id).then(res => {
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
    }
  }
}
