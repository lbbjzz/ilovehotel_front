import '@/styles/pages/details/room-details.scss'
import {getRoomTypeDetails, getRoom, getOrder, pay} from "../../../api/details/room-details";
import {getCity} from "../../../api/home/room-class";
import Comment from "../../../components/details/comment";
import Images from '/components/details/images'
import IhHeader from '/components/common/ihheader'

export default {
  name: "room-details",
  components: {Comment, Images, IhHeader},
  data() {
    return {
      //房间类型ID
      roomTypeId: null,
      //房间ID
      roomId: null,
      roomTypeDetails: {},
      commentList: [],
      //详情
      viewList: [],
      imageList: [],
      cityList: [],
      timeRange: [],
      tabModel: null,
      //房间提示
      info: '',
      roomList: [],
      //订单ID
      orderId: null,
      activeName: 'first',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
    }
  },
  created() {
    this.roomTypeId = this.$route.query.id
    this.getRoomDetailsM()
    this.getAllCityM()
    this.getRoomSpecific()
  },

  methods: {
    getRoomDetailsM() {
      // console.log(this.roomTypeId, 'id')
      getRoomTypeDetails(this.roomTypeId).then(res => {
        // console.log(res, 'roomTypeDetails')
        this.roomTypeDetails = res.data.data
        this.commentList = res.data.data.commentList
        this.imageList = res.data.data.imageList
        this.viewList = res.data.data.viewList
        // console.log(this.imageList, 'comment')
      })
    },

    getAllCityM() {
      getCity().then(res => {
        // console.log(res, 'city')
        this.cityList = res.data.data.records
        this.tabModel = this.cityList[0].id
        // console.log(this.cityList, 'city')
      })
    },

    getRoomSpecific() {
      if (this.timeRange.length === 0) {
        this.info = '请选择您的入住时间！'
      } else {
        getRoom(this.timeRange[0], this.timeRange[1], this.tabModel, this.roomTypeId).then(res => {
          console.log(res, 'room')
          this.roomList = res.data.data.records
          console.log(this.roomList, 'roomList')
        })
      }
    },

    getCityId(tab) {
      // console.log(tab, 'getCityId')
      this.tabModel = tab.name
      this.getRoomSpecific()
      // console.log(this.tabModel, 'id')
    },

    timeRangeChange() {
      this.getRoomSpecific()
    },

    chooseRoom(val) {
      console.log(val, 'roomS')
      this.roomId = val
    },

    makeOrder() {
      getOrder(this.timeRange[0], this.timeRange[1], this.roomId).then(res => {
        console.log(res, 'roomOrder')
        if (res.data.code === 80200) {
          this.orderId = res.data.data.id
          alert(this.orderId)
          // alert('订单已生成')
        } else {
          alert(res.data.msg)
        }
      })
    },

    payM() {
      pay(this.orderId).then(res => {
        alert(res.data)
        let routerData = this.$router.resolve({name: 'pay-aliPay', query: {htmlData: res.data}})
        // 打开新页面
        window.open(routerData.href, '_ blank')
      })
    }
  }
}
