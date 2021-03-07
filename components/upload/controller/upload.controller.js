import '@/styles/components/upload/upload.scss';

export default {
  props: ['dialogIsShow'],
  data() {
    return {
      dialogVisible: '',
    }
  },

  watch: {
    dialogIsShow(val) {
      this.dialogVisible = val
    }
  },

  methods: {
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
    }
  }
}
