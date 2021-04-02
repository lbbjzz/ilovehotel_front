import '@/styles/pages/details/room-details.scss'
import {getRoomTypeDetails} from "../../../api/details/room-details";
import Comment from "../../../components/details/comment";

export default {
  name: "room-details",
  components: {Comment},
  data() {
    return {
      roomId: null,
      roomTypeDetails: {},
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
      getRoomTypeDetails(this.roomId).then(res => {
        console.log(res, 'roomTypeDetails')
        this.roomTypeDetails = res.data.data
        this.commentList = res.data.data.commentList
        this.imageList = res.data.data.imageList
        // console.log(this.commentList, 'comment')
      })
    }
  }
}
