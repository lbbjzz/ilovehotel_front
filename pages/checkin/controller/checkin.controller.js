import UploadInfo from '/components/upload/upload-info'
import {checkin} from "../../../api/checkin/checkin";

export default {
  name: "checkin",
  components: {
    UploadInfo
  },
  data() {
    return {
      checkinInfo: {
        name: '',
        idcard: '',
        orderId: ''
      }
    }
  },
  created() {
    this.checkinInfo.orderId = this.$route.query.orderId
    // console.log(this.checkinInfo.orderId, 'orderId');
  },

  methods: {
    getOCRInfo(val) {
      console.log(val, 'OCR')
      this.checkinInfo.name = val.name
      this.checkinInfo.idcard = val.idcard
    },
    check() {
      checkin(this.checkinInfo.name, this.checkinInfo.idcard, this.checkinInfo.orderId).then(res => {
        console.log(res, 'info')
      })
    }
  }
}
