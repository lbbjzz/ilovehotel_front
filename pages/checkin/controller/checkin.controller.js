import UploadInfo from '/components/upload/upload-info'
import {checkin, getOrderDetail} from "../../../api/checkin/checkin";
import ihHeader from "@/components/common/ihheader";
import InnerImageZoom from 'vue-inner-image-zoom';
import '/styles/pages/checkin/checkin.scss'


export default {
  name: "checkin",
  components: {
    UploadInfo,
    ihHeader,
    InnerImageZoom
  },
  data() {
    return {
      checkinInfo: {
        name: '',
        idcard: '',
        orderId: ''
      },
      details: {},
      startTime: '',
      endTime: '',
      dateRangeA: '',
      dateRangeB: '',
      imageSuccess: {
        url: require('/static/img/success.png')
      }
    }
  },
  created() {
    this.checkinInfo.orderId = this.$route.query.orderId
    // console.log(this.checkinInfo.orderId, 'orderId');
    this.getOrderDetailM()
  },

  computed: {
    dateDis() {
      let timeDis = (new Date(this.endTime).getTime() / 1000 - new Date(this.startTime).getTime() / 1000) / 60 / 60 / 24
      return timeDis
    },
  },

  methods: {
    getOCRInfo(val) {
      console.log(val, 'OCR')
      this.checkinInfo.name = val.name
      this.checkinInfo.idcard = val.idcard
    },

    getOrderDetailM() {
      getOrderDetail(this.checkinInfo.orderId).then(res => {
        // console.log(res, 'details');
        this.details = res.data.data
        this.startTime = res.data.data.checkinTime
        this.endTime = res.data.data.checkoutTime
        this.dateRangeA = res.data.data.checkinTime.substring(5, 10)
        this.dateRangeB = res.data.data.checkoutTime.substring(5, 10)
        // console.log(this.details, 'details')
      })
    },

    //入住
    check() {
      checkin(this.checkinInfo.name, this.checkinInfo.idcard, this.checkinInfo.orderId).then(res => {
        console.log(res, 'info')
      })
    }
  }
}
