import {getOrderDetail} from "../../../api/checkin/checkin";
import {commentAdd} from "@/api/comment/comment";
import '/styles/pages/comment/comment.scss'
import ihHeader from "@/components/common/ihheader";
import InnerImageZoom from 'vue-inner-image-zoom';
import 'assets/fonts-ele/style.css'


export default {
  name: "comment",
  components: {
    ihHeader,
    InnerImageZoom
  },
  data() {
    return {
      orderId: '',
      details: {},
      startTime: '',
      endTime: '',
      dateRangeA: '',
      dateRangeB: '',
      imageSuccess: {
        url: require('/static/img/success.png')
      },
      // 评价
      textarea: '',
      rate: null,
      iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
    }
  },

  computed: {
    dateDis() {
      let timeDis = (new Date(this.endTime).getTime() / 1000 - new Date(this.startTime).getTime() / 1000) / 60 / 60 / 24
      return timeDis
    },
  },

  created() {
    this.orderId = this.$route.query.orderId
    // console.log(this.checkinInfo.orderId, 'orderId');
    this.getOrderDetailM()
  },
  methods: {
    getOrderDetailM() {
      getOrderDetail(this.orderId).then(res => {
        // console.log(res, 'details');
        this.details = res.data.data
        this.startTime = res.data.data.checkinTime
        this.endTime = res.data.data.checkoutTime
        this.dateRangeA = res.data.data.checkinTime.substring(5, 10)
        this.dateRangeB = res.data.data.checkoutTime.substring(5, 10)
        // console.log(this.details, 'details')
      })
    },

    commentAddM() {
      commentAdd(this.textarea, this.orderId, this.rate).then(res => {
        // console.log(res, 'comment')
        if (res.data.code === 80200) {
          this.$message({
            message: res.data.msg,
            type: "success"
          })
          this.$router.push({
            name: 'order-order'
          })
        } else {
          this.$message({
            message: res.data.msg,
            type: "error"
          })
        }
      })
    }
  }
}
