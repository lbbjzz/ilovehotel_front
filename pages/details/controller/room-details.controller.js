import '@/styles/pages/details/room-details.scss'
import {getRoomDetails} from "@/api/details/room-details";

export default {
  name: "room-details",
  data() {
    return {
      roomId: null,
      roomDetails: '',
      commentList: [],
      //详情
      imageList: [],
    }
  },
  created() {
    this.roomId = this.$route.query.id
    this.getRoomDetailsM()
  },

  methods: {
    getRoomDetailsM() {
      // console.log(this.roomId, 'id')
      getRoomDetails(this.roomId).then(res => {
        console.log(res, 'roomDetails')
        this.roomDetails = res.data.data
        this.commentList = res.data.data.commentList
        this.imageList = res.data.data.imageList
      })
    }
  }
}
