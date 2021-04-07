import '@/styles/pages/details/room-details.scss'
import {getRoomTypeDetails, getRoom, getOrder, pay} from "../../../api/details/room-details";
import {getCity} from "../../../api/home/room-class";
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';
import Comment from "../../../components/details/comment";
import Images from '/components/details/images'
import IhHeader from '/components/common/ihheader'
import Wait from "../../../components/order/wait";

export default {
  name: "room-details",
  components: {Comment, Images, IhHeader, InnerImageZoom, Wait},
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
      //支付选择
      pay: 1,
      payIcon: {
        url: require('static/img/aliPay.png')
      },
      iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
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

    toLogin() {
      this.$router.push({name: 'login-login'})
    },

    makeOrder() {
      if (this.roomId === null) {
        this.$message({
          message: '您还未选择房间',
          type: 'error'
        })
      } else {
        getOrder(this.timeRange[0], this.timeRange[1], this.roomId).then(res => {
          console.log(res, 'roomOrder')
          if (res.data.code === 80200) {
            this.orderId = res.data.data.id
            this.$message({
              message: '请在15分钟内完成支付，超时订单将会自动取消...',
              type: 'info'
            })
            setTimeout(
              this.payM, 2000
            )
            // alert('订单已生成')
          } else if (res.data.code === 80400) {
            this.$message({
              message: '请先完善用户身份证信息',
              type: 'warning'
            })
            this.$router.push({
              name: 'user-info-user-info'
            })
          } else {
            this.$message({
              message: `未登录或登录状态已过期，请重新登录`,
              type: 'warning'
            })
            localStorage.removeItem('loginData')
            setTimeout(
              this.toLogin, 1300
            )
          }
        })
      }
    },

    //支付宝
    payM() {
      pay(this.orderId).then(res => {
        // alert(res.data)
        let routerData = this.$router.resolve({name: 'pay-aliPay', query: {htmlData: res.data}})
        // 打开新页面
        window.open(routerData.href, '_self')
      })
    },

  },
}

