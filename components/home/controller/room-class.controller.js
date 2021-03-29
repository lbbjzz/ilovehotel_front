import '@/styles/components/home/room-class.scss'
import {getRoom, getCity} from "@/api/home/room-class";

export default {
  name: "room-class",
  data() {
    return {
      loading: '',
      roomList: [],
      cityList: [],
      value: ''
    }
  },
  created() {
    this.getRoomM()
    this.getCityM()
  },
  methods: {
    getRoomM() {
      getRoom().then(res => {
        if (res.data.code === 80200) {
          this.roomList = res.data.data
        } else {
          this.loading = true
        }
      })
    },
    getCityM() {
      getCity().then(res => {
        this.cityList = res.data.data.records
      })
    },
    cityChange(val) {
      this.loading = true

      getRoom(val).then(res => {
        if (res.data.code === 80200) {
          this.roomList = res.data.data
          setTimeout(() => {
            this.loading = false
          }, 800)
        } else {
          this.$message({
            message: '出错啦！请稍后重试',
            type: 'error'
          })
        }
      })
    }
  }
}
