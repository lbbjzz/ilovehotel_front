import '@/styles/components/upload/upload.scss';
import {updateAvatar, userDetail} from "@/api/user-info/user-info";

export default {
  props: ['dialogIsShow', 'ids'],
  data() {
    return {
      dialogVisible: false,
      avatar: '',
      id: ''
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
