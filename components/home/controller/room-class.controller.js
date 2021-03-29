import '@/styles/components/home/room-class.scss'
import {getRoom} from "@/api/home/room-class";

export default {
  name: "room-class",
  data() {
    return {
      roomList: [],
    }
  },
  created() {
    this.getRoomM()
  },
  methods: {
    getRoomM() {
      getRoom().then(res => {
        this.roomList = res.data.data
      })
    }
  }
}
