import '@/styles/components/upload/upload.scss';
import {updateAvatar, userDetail} from "@/api/user-info/user-info";

export default {
  props: ['dialogIsShow', 'ids'],
  data() {
    return {
      dialogVisible: false,
      avatar: '',
      id: '',
      per: 0,
      userInfo: {}
    }
  },

  watch: {
    dialogIsShow(val) {
      this.dialogVisible = val
    },
    ids: {
      handler(val) {
        this.id = val
      },
      immediate: true
    }
  },

  methods: {
    setLocalStorage(loginData) {
      this.$store.commit('login', loginData)
    },
    getUserDetail() {
      userDetail(this.id).then(res => {
        this.setLocalStorage(res.data.data)
        this.userInfo = res.data.data
        this.per = 0
        for (let i in this.userInfo) {
          // console.log(i, 'percent')
          if (this.userInfo[i] !== undefined && this.userInfo[i] !== null && this.userInfo[i] !== '') {
            this.per += 10
          }
          this.$emit('getPer', this.per)
        }
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {
        });
    },
    sendMsg() {
      this.dialogVisible = false
      this.$emit('sendMsg', this.dialogVisible)
      updateAvatar(this.avatar, this.id).then(res => {
        if (res.data.code === 80200) {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.getUserDetail()
        }
      })
    },
    sendMsgCancel() {
      this.dialogVisible = false
      this.$emit('sendMsg', this.dialogVisible)
    },
    handleUploadSuccess(res) {
      this.avatar = res.data
      this.$emit('uploadSuccess', res)
    }
  }
}
