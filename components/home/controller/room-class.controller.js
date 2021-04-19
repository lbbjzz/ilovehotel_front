import '/styles/components/home/room-class.scss'
import {getRoomTypeByCityId, getCity, getRoomType} from "/api/home/room-class";

export default {
  name: "room-class",
  data() {
    return {
      loading: '',
      roomTypeList: [],
      cityList: [],
      value: ''
    }
  },
  created() {
    this.getCityM()
    this.getRoomTypeM()
  },
  methods: {
    getRoomTypeM() {
      getRoomType().then(res => {
        // console.log(res, 'RoomType')
        this.roomTypeList = res.data.data
      })
    },
    getCityM() {
      getCity().then(res => {
        this.cityList = res.data.data.records
      })
    },
    cityChange(val) {
      // this.loading = true
      // console.log(val)
      getRoomTypeByCityId(val).then(res => {
        // console.log(res)
        if (res.data.code === 80200) {
          this.roomTypeList = res.data.data
          // setTimeout(() => {
          //   this.loading = false
          // }, 800)
        } else {
          this.$message({
            message: '出错啦！请稍后重试',
            type: 'error'
          })
        }
      })
    },
    roomOrder(val) {
      // console.log(val, 'id')
      this.$router.push({
        name: 'details-room-details',
        query: {
          id: val
        }
      })
    },

    //导航
    navigate(){
      window.location.href = 'http://8.135.35.123:9001/getMap'
    }
  }
}
