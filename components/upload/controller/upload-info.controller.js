export default {
  name: 'upload-info',
  data() {
    return {
      imageUrl: ''
    };
  },
  watch: {
    // imageUrl: {
    //   handler(val) {
    //     console.log(val, 'val')
    //     this.$emit('sendUserInfo', val)
    //   },
    //   deep: true,
    //   immediate: true
    // }
  },

  methods: {
    handleAvatarSuccess(res) {
      console.log(res.data, 'res')
      this.$emit('sendUserInfo', res.data)
      // this.imageUrl = res.data

    },
    beforeAvatarUpload(file) {
      // console.log(window.URL.createObjectURL(file), 'url')
      this.imageUrl = window.URL.createObjectURL(file)
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
